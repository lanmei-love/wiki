import{o as n,c as s,a}from"./app.904a5c68.js";const t='{"title":"组件注册","description":"","frontmatter":{},"headers":[{"level":2,"title":"按需引入","slug":"按需引入"},{"level":3,"title":"tsx 文件注册","slug":"tsx-文件注册"},{"level":2,"title":"全局注册","slug":"全局注册"}],"relativePath":"guide/component.md","lastUpdated":1672672100193}',p={},e=a('<h1 id="组件注册"><a class="header-anchor" href="#组件注册" aria-hidden="true">#</a> 组件注册</h1><h2 id="按需引入"><a class="header-anchor" href="#按需引入" aria-hidden="true">#</a> 按需引入</h2><p>项目目前的组件注册机制是按需注册，是在需要用到的页面才引入。</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ElBacktop <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useDesign <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/hooks/web/useDesign&#39;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> getPrefixCls<span class="token punctuation">,</span> variables <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useDesign</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> prefixCls <span class="token operator">=</span> <span class="token function">getPrefixCls</span><span class="token punctuation">(</span><span class="token string">&#39;backtop&#39;</span><span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElBacktop</span>\n    <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>`${prefixCls}-backtop`<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>`.${variables.namespace}-layout-content-scrollbar .${variables.elNamespace}-scrollbar__wrap`<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h3 id="tsx-文件注册"><a class="header-anchor" href="#tsx-文件注册" aria-hidden="true">#</a> tsx 文件注册</h3><p><strong>tsx 文件内不能使用全局注册组件</strong>，需要手动引入组件使用。</p><h2 id="全局注册"><a class="header-anchor" href="#全局注册" aria-hidden="true">#</a> 全局注册</h2><p>如果觉得按需引入太麻烦，可以进行全局注册，在<a href="https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/components/index.ts" target="_blank" rel="noopener noreferrer">src/components/index.ts</a>，添加需要注册的组件。</p><p>目前只有 <code>Icon</code> 组件进行了全局注册。</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> App <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./Icon&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> setupGlobCom <span class="token operator">=</span> <span class="token punctuation">(</span>app<span class="token operator">:</span> App<span class="token operator">&lt;</span>Element<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;Icon&#39;</span><span class="token punctuation">,</span> Icon<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n</code></pre></div><p>如果 <code>element-plus</code> 的组件需要全局注册，在 <a href="https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/plugins/elementPlus/index.ts" target="_blank" rel="noopener noreferrer">src/plugins/elementPlus/index.ts</a> 添加需要注册的组件。</p><p>目前 <code>element-plus</code> 中只有 <code>ElLoading</code> 与 <code>ElScrollbar</code> 进行了全局注册。</p><div class="language-"><pre><code>import type { App } from &#39;vue&#39;\n\n// 需要全局引入一些组件，如ElScrollbar，不然一些下拉项样式有问题\nimport { ElLoading, ElScrollbar } from &#39;element-plus&#39;\n\nconst plugins = [ElLoading]\n\nconst components = [ElScrollbar]\n\nexport const setupElementPlus = (app: App) =&gt; {\n  plugins.forEach((plugin) =&gt; {\n    app.use(plugin)\n  })\n\n  components.forEach((component) =&gt; {\n    app.component(component.name, component)\n  })\n}\n\n</code></pre></div>',13);p.render=function(a,t,p,o,c,l){return n(),s("div",null,[e])};export default p;export{t as __pageData};
