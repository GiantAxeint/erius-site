// erius-site /home 数据契约（单文件数据源）
// 组件只消费这里的数据，将来换真实后端只改本文件/加 API 层

export interface SocialLink {
  label: string;
  url: string;
  icon: string; // emoji 或 svg 路径占位
}

export interface Profile {
  name: string;
  tagline: string;
  intro: string;
  avatarText: string; // 无头像时显示的名字首字
}

export interface MenuItem {
  key: string;
  label: string;
  href: string;
}

export interface PostItem {
  title: string;
  date: string;
  summary: string;
  href: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
}

export const profile: Profile = {
  name: 'Erius',
  tagline: 'AI Grad Student · Obsidian Plugin Maker · Agent Tinkerer',
  intro: 'Regain lost courage!',
  avatarText: 'E',
};

export const menuItems: MenuItem[] = [
  { key: 'posts', label: '近期文章', href: '#posts' },
  { key: 'projects', label: '我的项目', href: '#projects' },
  { key: 'about', label: '关于我', href: '#about' },
  { key: 'links', label: '友链', href: '#links' },
];

export const socialLinks: SocialLink[] = [
  { label: 'Email', url: 'mailto:2890386344@qq.com', icon: '✉' },
  { label: 'GitHub', url: 'https://github.com/GiantAxeint', icon: '◈' },
  { label: 'Home', url: '/erius-site/', icon: '⌂' },
];

// 静态示例数据 —— 后续接真实文章/项目时替换
export const latestPosts: PostItem[] = [
  {
    title: 'Hello World: Erius 的个人站开张了',
    date: '2026-09-04',
    summary: '用 Astro 搭的多卡片个人门户，先跑通结构，内容慢慢填。',
    href: '#',
  },
];

export const projects: ProjectItem[] = [
  {
    title: 'Obsidian AI 插件',
    description: 'AI-powered article polisher (luobi-polish)',
    tags: ['Obsidian', 'LLM'],
  },
  {
    title: 'Agent Harness 折腾记',
    description: 'dsh / opencode / Claude Code / Codex 全家桶落地',
    tags: ['Agent', 'CLI'],
  },
];
