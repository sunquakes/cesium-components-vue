type Options = {
  color: Cesium.Color
  alpha?: Number
  invert?: Boolean
  preMultiplyAlpha?: Boolean
}

type Shaders = {
  bgFS?: String
  mainFS?: String
  uniformMap: UniformMap
}

type UniformMap = {
  u_map?: Function
  u_invert?: Function
  u_alpha?: Function
  u_color?: Function
}

export class ImageryColorTheme {
  options: Options

  shaders: Shaders

  constructor(options: Options) {
    this.options = options
    options.color = Cesium.defaultValue(options.color, Cesium.Color.TRANSPARENT)
    options.alpha = Cesium.defaultValue(options.alpha, 1)
    options.invert = Cesium.defaultValue(options.invert, false)
    options.preMultiplyAlpha = Cesium.defaultValue(options.preMultiplyAlpha, true)

    this.shaders = {
      bgFS: `
          uniform sampler2D u_map; 
          uniform vec4 u_color;
          in vec2 v_textureCoordinates;
          layout(location=0) out vec4 fragColor;
          void main(){
            vec2 uv = v_textureCoordinates;
            vec4 bgColor = u_color;
            vec4 color = texture(u_map, uv);
            if( color.a > 0.){
              fragColor = bgColor;
            }
          }`,
      mainFS: `
          uniform sampler2D u_map;
          uniform bool u_invert;
          uniform float u_alpha;
          in vec2 v_textureCoordinates;
          layout(location=0) out vec4 fragColor;
          void main(){
            vec2 uv = v_textureCoordinates;
            vec4 color = texture(u_map , uv);
            float grayVal = (color.r + color.g + color.b) / 3.;
            if(u_invert){
              grayVal = 1. - grayVal;
            }
            float alpha = color.a * u_alpha;
            fragColor = vec4(vec3(grayVal), alpha);
          }`,
      uniformMap: {
        u_invert() {
          return options.invert
        },
        u_alpha() {
          return options.alpha
        },
        u_color() {
          return options.color
        }
      }
    }
  }

  /**
   * Process Texture
   * @param context
   * @param texture
   * @returns
   */
  processTexture(context: any, texture: any) {
    const { options, shaders } = this
    const sampler = texture.sampler
    const { PixelFormat, PixelDatatype, WebGLConstants, BlendingState, Color } = Cesium

    // @ts-ignore
    const textureProcessed = new Cesium.Texture({
      context: context,
      pixelFormat: PixelFormat.RGBA,
      pixelDatatype: PixelDatatype.UNSIGNED_BYTE,
      sampler: sampler,
      width: texture.width,
      height: texture.height,
      flipY: texture.flipY,
      target: WebGLConstants.TEXTURE_2D,
      preMultiplyAlpha: options.preMultiplyAlpha
    })
    // @ts-ignore
    const framebuffer = new Cesium.Framebuffer({
      context: context,
      colorTextures: [textureProcessed],
      destroyAttachments: false
    })
    // @ts-ignore
    const renderState = Cesium.RenderState.fromCache({
      depthTest: {
        enabled: false
      },
      blending: options.preMultiplyAlpha
        ? BlendingState.PRE_MULTIPLIED_ALPHA_BLEND
        : BlendingState.ALPHA_BLEND,
      viewport: {
        x: 0,
        y: 0,
        width: texture.width,
        height: texture.height
      }
    })

    shaders.uniformMap.u_map = function () {
      return texture
    }

    if (!Color.equals(options.color, Color.TRANSPARENT)) {
      const bgCommand = context.createViewportQuadCommand(shaders.bgFS, {
        framebuffer: framebuffer,
        renderState: renderState,
        uniformMap: shaders.uniformMap
      })
      bgCommand.execute(context)
    }
    const mainCommand = context.createViewportQuadCommand(shaders.mainFS, {
      framebuffer: framebuffer,
      renderState: renderState,
      uniformMap: shaders.uniformMap
    })
    mainCommand.execute(context)

    framebuffer.destroy()
    texture.destroy()

    return textureProcessed
  }
}
