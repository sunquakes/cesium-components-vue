import{_ as e,r as s,o,c,b as a,d as n}from"./app-c0d611fa.js";const l={},i=n('<div class="custom-container tip"><p class="custom-container-title">类型</p><p>Class</p></div><h2 id="折线" tabindex="-1"><a class="header-anchor" href="#折线" aria-hidden="true">#</a> 折线</h2><h3 id="箭头" tabindex="-1"><a class="header-anchor" href="#箭头" aria-hidden="true">#</a> 箭头</h3>',3),u=n(`<details class="custom-container details"><summary>点击查看代码</summary><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cc-tian-viewer</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewer<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:tk</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tk<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>containerId<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cc-tian-viewer</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> PolylineArrowsMaterialProperty <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;cesium-components-vue&#39;</span>

<span class="token keyword">const</span> viewer <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> tk <span class="token operator">=</span> <span class="token string">&#39;map-world-tk&#39;</span> <span class="token comment">// 从天地图官网获取</span>
<span class="token keyword">const</span> containerId <span class="token operator">=</span> <span class="token string">&#39;default&#39;</span>

<span class="token function">watch</span><span class="token punctuation">(</span>viewer<span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">newValue</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> viewer <span class="token operator">=</span> newValue <span class="token keyword">as</span> Cesium<span class="token punctuation">.</span>Viewer
  <span class="token keyword">if</span> <span class="token punctuation">(</span>viewer <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    viewer<span class="token punctuation">.</span>camera<span class="token punctuation">.</span><span class="token function">flyTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">destination</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token number">120.74210547619033</span><span class="token punctuation">,</span> <span class="token number">31.275160096694293</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 添加折线到视图</span>
    <span class="token keyword">const</span> coordinates <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">[</span><span class="token number">120.73110547619033</span><span class="token punctuation">,</span> <span class="token number">31.274160096694293</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token number">120.75110547619033</span><span class="token punctuation">,</span> <span class="token number">31.274160096694293</span><span class="token punctuation">]</span>
    <span class="token punctuation">]</span>
    <span class="token keyword">const</span> positions <span class="token operator">=</span> coordinates<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">coordinate</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span>coordinate<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> coordinate<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">const</span> entity <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Entity</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">polyline</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">positions</span><span class="token operator">:</span> positions<span class="token punctuation">,</span>
        <span class="token literal-property property">material</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">PolylineArrowsMaterialProperty</span><span class="token punctuation">(</span>viewer<span class="token punctuation">,</span> positions<span class="token punctuation">,</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">RED</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
        <span class="token literal-property property">clampToGround</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>entity<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.viewer</span> <span class="token punctuation">{</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h4 id="构造函数参数" tabindex="-1"><a class="header-anchor" href="#构造函数参数" aria-hidden="true">#</a> 构造函数参数</h4><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>value</td><td>Cesium.Viewer</td><td></td><td><code>required</code> 展示折线的视图实例</td></tr><tr><td>positions</td><td>Array&lt;Cesium.Cartesian3&gt;</td><td></td><td><code>required</code> 折线的positions属性值</td></tr><tr><td>color</td><td>Cesium.Color</td><td></td><td><code>required</code> 折线的颜色</td></tr></tbody></table><h2 id="椭圆" tabindex="-1"><a class="header-anchor" href="#椭圆" aria-hidden="true">#</a> 椭圆</h2><h3 id="闪烁" tabindex="-1"><a class="header-anchor" href="#闪烁" aria-hidden="true">#</a> 闪烁</h3>`,5),r=n(`<details class="custom-container details"><summary>点击查看代码</summary><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cc-tian-viewer</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewer<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:tk</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tk<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>containerId<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cc-tian-viewer</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> PolylineArrowsMaterialProperty <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;cesium-components-vue&#39;</span>

<span class="token keyword">const</span> viewer <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> tk <span class="token operator">=</span> <span class="token string">&#39;map-world-tk&#39;</span> <span class="token comment">// 从天地图官网获取</span>
<span class="token keyword">const</span> containerId <span class="token operator">=</span> <span class="token string">&#39;ellipse-fade&#39;</span>

<span class="token function">watch</span><span class="token punctuation">(</span>viewer<span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">newValue</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> viewer <span class="token operator">=</span> newValue <span class="token keyword">as</span> Cesium<span class="token punctuation">.</span>Viewer
  <span class="token keyword">if</span> <span class="token punctuation">(</span>viewer <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    viewer<span class="token punctuation">.</span>camera<span class="token punctuation">.</span><span class="token function">flyTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">destination</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token number">120.74210547619033</span><span class="token punctuation">,</span> <span class="token number">31.275160096694293</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// Add the Ellipse to the viewer.</span>
    <span class="token keyword">const</span> position <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token number">120.74210547619033</span><span class="token punctuation">,</span> <span class="token number">31.275160096694293</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> entity <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Entity</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">position</span><span class="token operator">:</span> position<span class="token punctuation">,</span>
      <span class="token literal-property property">ellipse</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">semiMajorAxis</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
        <span class="token literal-property property">semiMinorAxis</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
        <span class="token literal-property property">material</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">EllipseFadeMaterialProperty</span><span class="token punctuation">(</span>Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">RED</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>entity<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.viewer</span> <span class="token punctuation">{</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h4 id="构造函数参数-1" tabindex="-1"><a class="header-anchor" href="#构造函数参数-1" aria-hidden="true">#</a> 构造函数参数</h4><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>color</td><td>Cesium.Color</td><td></td><td><code>required</code> 椭圆的颜色</td></tr><tr><td>duration</td><td>number</td><td></td><td><code>required</code> 动画持续时间，单位（毫秒）</td></tr></tbody></table>`,3);function k(d,v){const t=s("PolylineArrowsMaterial"),p=s("EllipseFadeMaterial");return o(),c("div",null,[i,a(t),u,a(p),r])}const b=e(l,[["render",k],["__file","material.html.vue"]]);export{b as default};