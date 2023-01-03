import{o as s,c as a,a as n}from"./app.904a5c68.js";const t='{"title":"InputPassword 密码输入框","description":"","frontmatter":{},"headers":[{"level":2,"title":"用法","slug":"用法"},{"level":2,"title":"InputPassword 属性","slug":"inputpassword-属性"}],"relativePath":"components/input-password.md","lastUpdated":1672672100193}',p={},e=n('<h1 id="inputpassword-密码输入框"><a class="header-anchor" href="#inputpassword-密码输入框" aria-hidden="true">#</a> InputPassword 密码输入框</h1><p>对 <code>element-plus</code> 的 <code>Input</code> 组件进行封装。</p><p>InputPassword 组件位于 <a href="https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/InputPassword" target="_blank" rel="noopener noreferrer">src/components/InputPassword</a> 内</p><h2 id="用法"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> InputPassword <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/InputPassword&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n\n<span class="token keyword">const</span> password <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputPassword</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span> <span class="token attr-name">strength</span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h2 id="inputpassword-属性"><a class="header-anchor" href="#inputpassword-属性" aria-hidden="true">#</a> InputPassword 属性</h2><p>除以下参数外，还支持 <code>element-plus</code> 的 <code>Input</code> 所有属性，<a href="https://element-plus.org/zh-CN/component/input.html#autocomplete-%E5%B1%9E%E6%80%A7" target="_blank" rel="noopener noreferrer">详见</a></p><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>strength</td><td>是否显示强度校验</td><td><code>boolean</code></td><td>-</td><td>false</td></tr><tr><td>modelValue</td><td>选中项绑定值，支持v-model</td><td><code>string</code></td><td>-</td><td>-</td></tr></tbody></table>',8);p.render=function(n,t,p,o,c,r){return s(),a("div",null,[e])};export default p;export{t as __pageData};
