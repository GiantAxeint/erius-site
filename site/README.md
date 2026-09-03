# site/ — Astro Dashboard 骨架说明

> 本目录是路线 C 第二阶段（/home 多卡片门户）的 Astro 实现原型。
> 纯静态输出（output: 'static'），构建产物可继续用 GitHub Pages 免费托管。
> 部署方式与现有 erius-site 首页共存策略见下。

## 技术栈

- **Astro 7.3.1**（静态生成，零 JS 默认输出，组件按需客户端增强）
- 纯静态：`astro build` → `site/dist/`（可用任何静态托管）
- 字体：fonts.googleapis.cn 国内镜像（Caveat 手写 + Kalam 正文）

## 目录结构

```
site/
├── astro.config.mjs    # base=/erius-site，与 GitHub Pages 子路径匹配
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
| 本地开发 | `npm run dev`（http://localhost:4321/erius-site/home） |
| 构建 | `npm run build`（产物 dist/） |
| 本地预览产物 | `npm run preview` |

## 与现有部署的共存方案（待用户选）

现有 https://giantaxeint.github.io/erius-site/ 是**静态 index.html 直传**（Pages legacy build，source=main 根路径）。

方案 A（推荐，渐进）：首页维持现状不动；`/home` 先在本地 dev 预览验收 → 满意后把 `site/dist/` 构建产物纳入 Pages（用 Actions 或手动上传 dist 到 gh-pages 分支）。

方案 B（完整迁移）：整个站点交给 Astro，`/` 与 `/home` 都由 Astro 生成，一次构建全量发布。旧 index.html 归档。

## 验收清单

- [x] Astro 项目骨架 + 配置
- [x] 全局主题令牌（lvy010 配色微调成 Erius 青绿系）
- [x] 数据契约单文件（src/data/profile.ts）
- [x] / 首页（极简名片 + 门户入口）
- [x] /home 七卡片 dashboard（去 Live2D）
- [x] 桌面三栏 + 移动单列响应式
- [ ] 本地 dev/build 通过
- [ ] 部署集成（方案 A 或 B，等用户确认）

## 已知坑

- Astro 7 需要 Node ≥ 18；本机 managed node v22 OK
- 组件用 `<script>` 内联做客户端增强（时钟/日历/问候），Astro 默认输出纯静态外壳，SEO 友好
- 所有内部链接须带 `/erius-site` 前缀（base 配置），否则子路径部署下 404
- 数据改动只动 src/data/profile.ts，组件零改动（Agent A/B 交接点）
