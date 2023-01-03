import{o as n,c as s,a}from"./app.3e998fbc.js";const t='{"title":"useCrudSchemas","description":"","frontmatter":{},"headers":[{"level":2,"title":"用法","slug":"用法"},{"level":3,"title":"参数介绍","slug":"参数介绍"},{"level":2,"title":"CrudSchema","slug":"crudschema"}],"relativePath":"hooks/useCrudSchemas.md","lastUpdated":1672672100193}',p={},o=a('<h1 id="usecrudschemas"><a class="header-anchor" href="#usecrudschemas" aria-hidden="true">#</a> useCrudSchemas</h1><p>统一生成 <code>Search</code> 、 <code>Form</code> 、 <code>Descriptions</code> 、 <code>Table</code> 组件所需要的数据结构。</p><p>由于以上四个组件都需要 <code>Sechema</code> 或者 <code>columns</code> 的字段，如果每个组件都写一遍的话，会造成大量重复代码，所以提供 <code>useCrudSchemas</code> 来进行统一的数据生成。</p><p>useCrudSchemas 位于 <a href="https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/hooks/web/useCrudSchemas.ts" target="_blank" rel="noopener noreferrer">src/hooks/web/useCrudSchemas.ts</a></p><h2 id="用法"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果不需要某个字段，如 <code>formSchema</code> 不需要 <code>field</code> 为 <code>index</code> 的字段，可以使用 <code>form: { show: false }</code> 进行过滤，其他组件同理。</p></div><p><code>Search</code> 是基于 <code>Form</code> 进行二次封装的，所以 <code>Search</code> 支持的参数 <code>Form</code> 也都支持。</p><p><code>search</code> 与 <code>form</code> 字段，可以传入 <code>dictName</code> 来获取全局的字典数据，也可以传入 <code>api</code> 来获取接口数据，如果使用 <code>api</code> ，需要主动 <code>return</code> 数据。</p><p>如果想看更复杂点的例子，请<a href="https://element-plus-admin.cn/#/hooks/useCrudSchemas" target="_blank" rel="noopener noreferrer">在线预览</a></p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> CrudSchema<span class="token punctuation">,</span> useCrudSchemas <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/hooks/web/useCrudSchemas&#39;</span>\n\n<span class="token keyword">const</span> crudSchemas <span class="token operator">=</span> reactive<span class="token operator">&lt;</span>CrudSchema<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    field<span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>\n    label<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;tableDemo.index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    type<span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>\n    form<span class="token operator">:</span> <span class="token punctuation">{</span>\n      show<span class="token operator">:</span> <span class="token boolean">false</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    detail<span class="token operator">:</span> <span class="token punctuation">{</span>\n      show<span class="token operator">:</span> <span class="token boolean">false</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    field<span class="token operator">:</span> <span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span>\n    label<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;tableDemo.title&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    search<span class="token operator">:</span> <span class="token punctuation">{</span>\n      show<span class="token operator">:</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    form<span class="token operator">:</span> <span class="token punctuation">{</span>\n      colProps<span class="token operator">:</span> <span class="token punctuation">{</span>\n        span<span class="token operator">:</span> <span class="token number">24</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    detail<span class="token operator">:</span> <span class="token punctuation">{</span>\n      span<span class="token operator">:</span> <span class="token number">24</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    field<span class="token operator">:</span> <span class="token string">&#39;author&#39;</span><span class="token punctuation">,</span>\n    label<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;tableDemo.author&#39;</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    field<span class="token operator">:</span> <span class="token string">&#39;display_time&#39;</span><span class="token punctuation">,</span>\n    label<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;tableDemo.displayTime&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    form<span class="token operator">:</span> <span class="token punctuation">{</span>\n      component<span class="token operator">:</span> <span class="token string">&#39;DatePicker&#39;</span><span class="token punctuation">,</span>\n      componentProps<span class="token operator">:</span> <span class="token punctuation">{</span>\n        type<span class="token operator">:</span> <span class="token string">&#39;datetime&#39;</span><span class="token punctuation">,</span>\n        valueFormat<span class="token operator">:</span> <span class="token string">&#39;YYYY-MM-DD HH:mm:ss&#39;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    field<span class="token operator">:</span> <span class="token string">&#39;importance&#39;</span><span class="token punctuation">,</span>\n    label<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;tableDemo.importance&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token function-variable function">formatter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">_<span class="token operator">:</span> Recordable<span class="token punctuation">,</span> __<span class="token operator">:</span> TableColumn<span class="token punctuation">,</span> cellValue<span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span>\n        ElTag<span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n          type<span class="token operator">:</span> cellValue <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token string">&#39;success&#39;</span> <span class="token operator">:</span> cellValue <span class="token operator">===</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token string">&#39;warning&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;danger&#39;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>\n          cellValue <span class="token operator">===</span> <span class="token number">1</span>\n            <span class="token operator">?</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;tableDemo.important&#39;</span><span class="token punctuation">)</span>\n            <span class="token operator">:</span> cellValue <span class="token operator">===</span> <span class="token number">2</span>\n            <span class="token operator">?</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;tableDemo.good&#39;</span><span class="token punctuation">)</span>\n            <span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;tableDemo.commonly&#39;</span><span class="token punctuation">)</span>\n      <span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    form<span class="token operator">:</span> <span class="token punctuation">{</span>\n      component<span class="token operator">:</span> <span class="token string">&#39;Select&#39;</span><span class="token punctuation">,</span>\n      componentProps<span class="token operator">:</span> <span class="token punctuation">{</span>\n        options<span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            label<span class="token operator">:</span> <span class="token string">&#39;重要&#39;</span><span class="token punctuation">,</span>\n            value<span class="token operator">:</span> <span class="token number">3</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">{</span>\n            label<span class="token operator">:</span> <span class="token string">&#39;良好&#39;</span><span class="token punctuation">,</span>\n            value<span class="token operator">:</span> <span class="token number">2</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">{</span>\n            label<span class="token operator">:</span> <span class="token string">&#39;一般&#39;</span><span class="token punctuation">,</span>\n            value<span class="token operator">:</span> <span class="token number">1</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    field<span class="token operator">:</span> <span class="token string">&#39;pageviews&#39;</span><span class="token punctuation">,</span>\n    label<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;tableDemo.pageviews&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    form<span class="token operator">:</span> <span class="token punctuation">{</span>\n      component<span class="token operator">:</span> <span class="token string">&#39;InputNumber&#39;</span><span class="token punctuation">,</span>\n      value<span class="token operator">:</span> <span class="token number">0</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    field<span class="token operator">:</span> <span class="token string">&#39;content&#39;</span><span class="token punctuation">,</span>\n    label<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;exampleDemo.content&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    table<span class="token operator">:</span> <span class="token punctuation">{</span>\n      show<span class="token operator">:</span> <span class="token boolean">false</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    form<span class="token operator">:</span> <span class="token punctuation">{</span>\n      component<span class="token operator">:</span> <span class="token string">&#39;Editor&#39;</span><span class="token punctuation">,</span>\n      colProps<span class="token operator">:</span> <span class="token punctuation">{</span>\n        span<span class="token operator">:</span> <span class="token number">24</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    detail<span class="token operator">:</span> <span class="token punctuation">{</span>\n      span<span class="token operator">:</span> <span class="token number">24</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    field<span class="token operator">:</span> <span class="token string">&#39;action&#39;</span><span class="token punctuation">,</span>\n    width<span class="token operator">:</span> <span class="token string">&#39;260px&#39;</span><span class="token punctuation">,</span>\n    label<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;tableDemo.action&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    form<span class="token operator">:</span> <span class="token punctuation">{</span>\n      show<span class="token operator">:</span> <span class="token boolean">false</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    detail<span class="token operator">:</span> <span class="token punctuation">{</span>\n      show<span class="token operator">:</span> <span class="token boolean">false</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> allSchemas <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useCrudSchemas</span><span class="token punctuation">(</span>crudSchemas<span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h3 id="参数介绍"><a class="header-anchor" href="#参数介绍" aria-hidden="true">#</a> 参数介绍</h3><div class="language-ts"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> allSchemas <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useCrudSchemas</span><span class="token punctuation">(</span>crudSchemas<span class="token punctuation">)</span>\n</code></pre></div><p><strong>allSchemas</strong></p><p><code>allSchemas</code> 存放着四个组件所需要的数据结果</p><p><em><strong>allSchemas.fromSchema</strong></em></p><p><code>Form</code> 组件的 <code>Sechema</code></p><p><em><strong>allSchemas.searchSchema</strong></em></p><p><code>Search</code> 组件的 <code>Sechema</code></p><p><em><strong>allSchemas.detailSchema</strong></em></p><p><code>Descriptions</code> 组件的 <code>Sechema</code></p><p><em><strong>allSchemas.tableColumns</strong></em></p><p><code>Table</code> 组件的 <code>columns</code></p><h2 id="crudschema"><a class="header-anchor" href="#crudschema" aria-hidden="true">#</a> CrudSchema</h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>search</td><td>用于设置 <code>searchSchema</code></td><td><code>CrudSearchParams</code></td><td>-</td><td>-</td></tr><tr><td>table</td><td>用于设置 <code>tableColumns</code></td><td><code>CrudTableParams</code></td><td>-</td><td>-</td></tr><tr><td>form</td><td>用于设置 <code>fromSchema</code></td><td><code>CrudFormParams</code></td><td>-</td><td>-</td></tr><tr><td>detail</td><td>用于设置 <code>DescriptionsSchema</code></td><td><code>CrudDescriptionsParams</code></td><td>-</td><td>-</td></tr><tr><td>children</td><td>如果是 <code>Table</code> 组件，则可能会有多表头的情况存在</td><td><code>CrudSchema[]</code></td><td>-</td><td>-</td></tr></tbody></table>',24);p.render=function(a,t,p,e,c,l){return n(),s("div",null,[o])};export default p;export{t as __pageData};
