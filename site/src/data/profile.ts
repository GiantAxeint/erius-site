// ============================================================
// erius-site /home 数据契约 —— 唯一"内容配置文件"
// ============================================================
// ⭐ 想改主页内容？只需要编辑本文件，改完保存后：
//    cd site && npm run build
//    复制 dist 产物到仓库根 → git commit → git push
//    （或告诉我，我一条命令帮你重建发布）
// ============================================================
// 【如何自定义】
//  1. 名字/签名/一句话  → profile 对象（下面第 36 行起）
//  2. 头像图片          → 把图片放到 site/public/avatar.png，
//                        然后把下方 avatarImage 改成 '/avatar.png'
//                        （不填则显示 avatarText 首字母）
//  3. "About Me" 段落  → aboutContent.paragraphs 数组，每项一段
//  4. 侧边菜单          → menuItems 数组
//  5. 社交链接          → socialLinks 数组
//  6. 最新文章          → latestPosts 数组
//  7. 项目展示          → projects 数组
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

// ---------- 1. 你的基本信息（改这里） ----------
export const profile: Profile = {
  name: 'Erius',
  tagline: 'AI Grad Student · Obsidian Plugin Maker · Agent Tinkerer',
  intro: 'Regain lost courage!',
  avatarText: 'E',
  avatarImage: '', // 放图到 site/public/avatar.png 后改成 '/avatar.png'
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

// ---------- 3. 侧边菜单（一般不用改） ----------
export const menuItems: MenuItem[] = [
  { key: 'posts', label: '近期文章', href: '#posts' },
  { key: 'projects', label: '我的项目', href: '#projects' },
  { key: 'about', label: '关于我', href: '#about' },
  { key: 'links', label: '友链', href: '#links' },
];

// ---------- 4. 社交链接（改这里） ----------
export const socialLinks: SocialLink[] = [
  { label: 'Email', url: 'mailto:2890386344@qq.com', icon: '✉' },
  { label: 'GitHub', url: 'https://github.com/GiantAxeint', icon: '◈' },
  { label: 'Home', url: '/', icon: '⌂' },
];

// ---------- 5. 最新文章（改这里，href 留 '#' 表示暂未发布） ----------
export const latestPosts: PostItem[] = [
  {
    title: 'Hello World: Erius 的个人站开张了',
    date: '2026-09-04',
    summary: '用 Astro 搭的多卡片个人门户，先跑通结构，内容慢慢填。',
    href: '#',
  },
];

// ---------- 6. 项目展示（改这里） ----------
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
