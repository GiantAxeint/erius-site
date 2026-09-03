// @ts-check
import { defineConfig } from 'astro/config';

// erius-site /home dashboard 门户（路线 C 第二阶段）
// 纯静态输出（output: 'static'），构建产物可继续用 GitHub Pages 免费托管
// 已绑定自定义域名 erius.dpdns.org → base 用 '/'（仓库根 = 域名根）
export default defineConfig({
  site: 'https://erius.dpdns.org',
  base: '/',
  output: 'static',
  // 构建产物输出到 site/dist（GitHub Pages 需要纯静态文件）
  build: {
    format: 'directory',
  },
});
