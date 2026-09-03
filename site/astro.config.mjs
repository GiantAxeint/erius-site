// @ts-check
import { defineConfig } from 'astro/config';

// erius-site /home dashboard 门户（路线 C 第二阶段）
// 纯静态输出（output: 'static'），构建产物可继续用 GitHub Pages 免费托管
// 将来要动态化（评论/表单/AI）再迁 Next.js 或加 Server Islands
export default defineConfig({
  site: 'https://giantaxeint.github.io',
  base: '/erius-site',
  output: 'static',
  // 构建产物输出到 site/dist（GitHub Pages 需要纯静态文件）
  build: {
    format: 'directory',
  },
});
