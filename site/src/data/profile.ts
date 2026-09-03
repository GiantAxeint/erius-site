// ============================================================
// erius-site /home 数据契约 —— 站点配置文件
// ============================================================
// ⭐ 改内容流程（GitHub Actions 已配好自动部署）：
//    编辑本文件或写 Markdown → git push → 等 ~1 分钟自动生效
// ============================================================
// 【如何自定义】
//  1. 名字/签名/一句话  → profile 对象
//  2. 头像图片          → 放 site/public/avatar.png，avatarImage 填 '/avatar.png'
//                        （不填则显示 avatarText 首字母）
//  3. "About Me" 段落  → aboutContent.paragraphs 数组，每项一段
//  4. 菜单              → menuItems 数组
//  5. 社交链接          → socialLinks 数组
//  6. 折腾日记文章      → 新建 src/content/tinkering/xxx.md（不用改本文件）
//  7. 随笔日记文章      → 新建 src/content/journal/xxx.md（不用改本文件）
//  8. 项目展示          → projects 数组
// ============================================================

export interface SocialLink {
  label: string;
  url: string;
  icon: string; // emoji 或 svg 路径占位
}

export interface Profile {
  name: string;        // 你的名字/昵称
  tagline: string;     // 一句话定位（显示在名字下方）
  intro: string;       // 首页大标语
  avatarText: string;  // 无头像图时显示的首字母
  avatarImage: string; // 头像图片路径（放 site/public/ 下），空字符串=用文字头像
}

export interface MenuItem {
  key: string;
  label: string;
  href: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  href: string;  // GitHub 仓库链接
}

// ---------- 1. 你的基本信息（改这里） ----------
export const profile: Profile = {
  name: 'Erius',
  tagline: 'AI Grad Student · Obsidian Plugin Maker · Agent Tinkerer',
  intro: 'Regain lost courage!',
  avatarText: 'E',
  avatarImage: '/avatar.png', // 放图到 site/public/avatar.png 后改成 '/avatar.png'
};

// ---------- 2. "About Me" 内容（改这里） ----------
export const aboutContent = {
  heading: 'About Me',
  paragraphs: [
    '我是 Erius，研究生在读',
    '爱折腾各种Agent、人文社科和摸鱼',
    '这里记录各种项目、文章、以及折腾日记',
  ],
};

// ---------- 3. 侧边/顶栏菜单（改这里） ----------
// 折腾日记 = 学习 AI 遇到的问题；随笔日记 = 读书/生活随想
export const menuItems: MenuItem[] = [
  { key: 'tinkering', label: '折腾日记', href: '/tinkering' },
  { key: 'journal', label: '随笔日记', href: '/journal' },
  { key: 'projects', label: '我的项目', href: '/projects' },
  { key: 'about', label: '关于我', href: '/about' },
];

// ---------- 4. 社交链接（改这里） ----------
export const socialLinks: SocialLink[] = [
  { label: 'Email', url: 'mailto:2890386344@qq.com', icon: '✉' },
  { label: 'GitHub', url: 'https://github.com/GiantAxeint', icon: '◈' },
  { label: 'Home', url: '/', icon: '⌂' },
];

// ---------- 5. 文章已改为 Markdown 驱动 ----------
// 折腾日记 → src/content/tinkering/*.md（/tinkering）
// 随笔日记 → src/content/journal/*.md（/journal）
// 写文章 = 在对应目录新建 .md 文件，无需改此文件

// ---------- 6. 项目展示（改这里） ----------
export const projects: ProjectItem[] = [
  {
    title: 'Obsidian AI 插件',
    description: 'AI-powered article polisher (luobi-polish)',
    tags: ['Obsidian', 'LLM'],
    href: 'https://github.com/GiantAxeint/luobi-polish',
  },
  {
    title: 'Agent Harness 折腾记',
    description: 'dsh / opencode / Claude Code / Codex 全家桶落地',
    tags: ['Agent', 'CLI'],
    href: 'https://github.com/GiantAxeint',  // 无独立仓库时指向 GitHub 主页
  },
];
