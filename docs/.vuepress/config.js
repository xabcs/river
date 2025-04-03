const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: "river",
  description: 'vdoing博客主题模板',
  base: '/river/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  // vssue 评论插件
  plugins: [
    [
      "vuepress-plugin-vssue-global",
      {
        platform: "github",
        title: "[Comment]<%- frontmatter.title %>",
        needComments: true,
        // 其他的 Vssue 配置
        autoCreateIssue: true,
        clientId: "Ov23liXzqz6HSnW4OONe",
        clientSecret: "f73cf504ddb604f61e6815d7c6adf702287a5336",
        owner: "xabcs",
        repo: "river",
      },
    ],
  ],
  themeConfig,
}