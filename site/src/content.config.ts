// ============================================================
// Astro Content Collections 配置
// 两个内容集：tinkering（折腾日记）+ journal（随笔日记）
// 用法：在 src/content/tinkering/ 下新建 .md 文件即成一篇文章
// ============================================================
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 折腾日记：记录学习 AI 遇到的问题
const tinkering = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tinkering' }),
  schema: z.object({
    title: z.string(),           // 文章标题
    date: z.coerce.date(),       // 日期（YYYY-MM-DD）
    summary: z.string(),         // 卡片摘要（1-2 句）
    tags: z.array(z.string()).optional(), // 标签
  }),
});

// 随笔日记：读书日记 / 生活随想
const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { tinkering, journal };
