# site/ — Astro Dashboard 骨架说明

> 本目录是路线 C 第二阶段（/home 多卡片门户）的 Astro 实现原型。
> 纯静态输出（output: 'static'），构建产物可继续用 GitHub Pages 免费托管。
> 站点已上线：https://erius.dpdns.org（/ 名片、/home 门户）。

## 技术栈

- **Astro 7.3.1**（静态生成，零 JS 默认输出，组件按需客户端增强）
- 纯静态：`astro build` → `site/dist/`（可用任何静态托管）
- 字体：fonts.googleapis.cn 国内镜像（Caveat 手写 + Kalam 正文）

## 目录结构

```
site/
├── astro.config.mjs    # site=https://erius.dpdns.org, base=/
├── package.json
├── tsconfig.json
├── public/              # 静态资源（favicon 等）
└── src/
    ├── pages/
    │   ├── index.astro  # "/" 极简手写风名片（复刻线上首页 + 门户入口）
    │   └── home.astro   # "/home" 多卡片 dashboard（主页面）
    ├── layouts/
    │   └── Dashboard.astro  # 公共布局（顶栏 + 页脚）
    ├── components/      # 7 个卡片组件
    │   ├── UserCard.astro     # 左栏用户卡 + 菜单
    │   ├── GreetingCard.astro # 问候卡（时间感知）
    │   ├── ClockCard.astro    # 实时时钟
    │   ├── CalendarCard.astro # 当月日历
    │   ├── PostsCard.astro    # 最新文章
    │   ├── ProjectsCard.astro # 项目展示
    │   └── SocialCard.astro   # 社交矩阵
    ├── data/
    │   └── profile.ts   # ★ 单一数据契约源（名字/菜单/文章/项目/社交）
    └── styles/
        └── global.css   # 主题令牌（lvy010 配色微调）
```

## 卡片布局（desktop 三栏）

```
┌────────┬──────────────────┬────────┐
│ User   │ Greeting(手写)   │ Clock  │
│ Card   ├──────────────────┤ Card   │
│ + 菜单  │ PostsCard 最新文章 │ Calendar│
│        ├──────────────────┤ Card   │
│ Social │ ProjectsCard 项目 │        │
│ Card   └──────────────────┘        │
└────────┴──────────────────┴────────┘
```

## 常用命令

| 操作 | 命令（在 site/ 下） |
|---|---|
| 本地开发 | `npm run dev`（http://localhost:4321/） |
| 构建 | `npm run build`（产物 dist/） |
| 本地预览产物 | `npm run preview` |

## 部署现状（已上线 ✅）

- 自定义域名：**https://erius.dpdns.org**（已绑定 GitHub Pages，HTTPS 证书有效）
- 页面：`/` 首页名片、`/home` 门户、404 页
- 方式：Astro `npm run build` → 产物复制到仓库根（index.html / home/ / _astro/ + CNAME + .nojekyll）→ push main，GitHub Pages 自动更新
- ⚠️ 仓库根的 `.nojekyll` 不能删（防 Jekyll 吞 `_astro/`），`CNAME` 不能删（域名持久化）

## 内容自定义指南（改内容只看这一个文件）

> **所有文字内容都在 `src/data/profile.ts`**，每个区块都有中文注释说明改哪里：
> - 名字/签名/标语 → `profile` 对象
> - 头像图 → 图片放 `public/` 后把 `profile.avatarImage` 设为路径（如 `/avatar.png`）；不填则显示首字母
> - About Me → `aboutContent.paragraphs`（数组，每项一段）
> - 社交链接 → `socialLinks`
> - 最新文章 → `latestPosts`（date 用 `YYYY-MM-DD`）
> - 项目 → `projects`

**改完发布三步**：
```bash
cd site
npm run build          # 1. 构建
# 2. 复制 dist 产物到仓库根（index.html + home/ + _astro/）
# 3. git add -A && git commit && git push  → 等 ~1 分钟生效
```

## 页面结构

```
site/
├── astro.config.mjs    # site=https://erius.dpdns.org, base='/'
├── src/
│   ├── pages/
│   │   ├── index.astro  # "/" 极简名片
│   │   ├── home.astro   # "/home" 门户（三栏区块带锚点 id）
│   │   └── 404.astro    # 404 页
│   ├── components/      # 卡片组件（User/Greeting/Clock/Calendar/About/Posts/Projects/Social）
│   ├── data/profile.ts  # ★ 内容配置（改这里）
│   ├── layouts/Dashboard.astro
│   └── styles/global.css # 主题令牌
```

## 常用命令

| 操作 | 命令（在 site/ 下） |
|---|---|
| 本地开发 | `npm run dev`（http://localhost:4321/） |
| 构建 | `npm run build`（产物 dist/） |
| 本地预览产物 | `npm run preview` |

## 验收清单

- [x] Astro 项目骨架 + 配置
- [x] 全局主题令牌（lvy010 配色微调成 Erius 青绿系）
- [x] 数据契约单文件（src/data/profile.ts）
- [x] 头像支持图片（avatarImage）或文字回退
- [x] / 首页（极简名片 + 门户入口）
- [x] /home 七卡片 dashboard（去 Live2D）
- [x] 桌面三栏 + 移动单列响应式
- [ ] 本地 dev/build 通过
- [ ] 部署集成（方案 A 或 B，等用户确认）

## 已知坑

- Astro 7 需要 Node ≥ 18；本机 managed node v22 OK
- 组件用 `<script>` 内联做客户端增强（时钟/日历/问候），Astro 默认输出纯静态外壳，SEO 友好
- 已绑定自定义域：内部链接用根路径（/home、/_astro/...），无子路径前缀
- 数据改动只动 src/data/profile.ts，组件零改动（Agent A/B 交接点）
