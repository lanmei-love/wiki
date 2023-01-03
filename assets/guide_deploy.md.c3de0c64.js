import{o as e,c as a,a as n}from"./app.904a5c68.js";const s='{"title":"构建&部署","description":"","frontmatter":{},"headers":[{"level":2,"title":"构建","slug":"构建"},{"level":3,"title":"预览","slug":"预览"},{"level":2,"title":"部署","slug":"部署"},{"level":3,"title":"发布","slug":"发布"}],"relativePath":"guide/deploy.md","lastUpdated":1672672100193}',t={},p=n('<h1 id="构建-部署"><a class="header-anchor" href="#构建-部署" aria-hidden="true">#</a> 构建&amp;部署</h1><div class="tip custom-block"><p class="custom-block-title">前言</p><p>由于是展示项目，所以打包后相对较大，如果项目中没有用到的插件，可以删除对应的文件或者路由，不引用即可，没有引用就不会打包。</p></div><h2 id="构建"><a class="header-anchor" href="#构建" aria-hidden="true">#</a> 构建</h2><p>项目开发完成之后，执行以下命令进行构建</p><ul><li>开发环境 pnpm run build:dev ===&gt; dist-dev</li><li>测试环境 pnpm run build:test ===&gt; dist-test</li><li>生产环境 pnpm run build:pro ===&gt; dist-pro</li></ul><p>构建打包成功之后，会在根目录生成 dist-* 文件夹，里面就是构建打包好的文件。</p><h3 id="预览"><a class="header-anchor" href="#预览" aria-hidden="true">#</a> 预览</h3><p>发布之前可以在本地进行预览</p><p><strong>不能直接打开构建后的 html 文件</strong></p><p>使用项目自定的命令进行预览(推荐)</p><div class="language-bash"><pre><code><span class="token comment"># 先打包在进行预览</span>\n\n<span class="token comment"># 预览开发环境</span>\n<span class="token function">pnpm</span> run preview:dev\n\n<span class="token comment"># 预览测试环境</span>\n<span class="token function">pnpm</span> run preview:test\n\n<span class="token comment"># 预览生产环境</span>\n<span class="token function">pnpm</span> run preview:pro\n</code></pre></div><h2 id="部署"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h2><div class="danger custom-block"><p class="custom-block-title">注意</p><p>项目默认是在生产环境开启 Mock，这样做非常不好，只是为了演示环境有数据，不建议在生产环境使用 Mock，而应该使用真实的后台接口。</p></div><h3 id="发布"><a class="header-anchor" href="#发布" aria-hidden="true">#</a> 发布</h3><p>简单的部署只需要将最终生成的静态文件，dist-* 文件夹的静态文件发布到你的 cdn 或者静态服务器即可。</p><p><strong>部署时可能会发现资源路径不对，只需要修改对应的<code>.env.xxx</code>文件即可。</strong></p><div class="language-bash"><pre><code><span class="token comment"># 根据自己路径来配置更改</span>\nVITE_BASE_PATH <span class="token operator">=</span> /dist-dev/\n</code></pre></div>',17);t.render=function(n,s,t,l,r,d){return e(),a("div",null,[p])};export default t;export{s as __pageData};
