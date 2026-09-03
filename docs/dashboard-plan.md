# erius-site Dashboard 门户规划（路线 C 第二阶段）

> 目标：在极简首页(index.html)之外新增 `/home` 多卡片个人门户，仿 lvyovo-wiki.tech 布局，**去掉 Live2D**。
> 参考调研：`C:\Users\28903\WorkBuddy\调试\_lvy_research\`（shot_home.png 截图、home.html 源码、配色变量）

## 一、技术选型决策

| 方案 | 优点 | 缺点 | 结论 |
|---|---|---|---|
| A. 纯静态多 HTML + CSS | 零依赖、可继续白嫖 GitHub Pages | 卡片实时时钟/日历要手写 JS；以后想加博客要手写模板 | ❌ 只够 v1 |
| B. Astro 静态生成 | 组件化、支持 Markdown 博客、构建后仍是纯静态 → 继续免费托管 | 需学 Astro 组件语法 | ✅ 推荐：静态起步 + 渐进动态化，完美契合路线 C |
| C. Next.js（lvy010 同款）| 功能最强、以后可加 SSR/API | 部署要 Vercel（或 Pages 适配）；对纯静态站偏重 | ⏸️ 等真有动态需求（表单/评论/AI）再迁移 |

**推荐 B（Astro）**：构建产物仍是纯 HTML/CSS/JS → 继续用现有 GitHub Pages 免费托管 → push 即上线，零迁移成本。以后要动态化时，Astro 可局部加 Server Islands 或迁 Next.js。

## 二、Dashboard 区块拆解（参考 lvyovo-wiki，去 Live2D）

```
/home 页面布局（桌面 1440px 网格，卡片错落摆放）
├─ [左栏 用户卡] 头像 + "Erius" + 一句话简介 + 侧边菜单
│    菜单项：近期文章 / 我的项目 / 关于 / 友链
├─ [顶部宽卡]   状态横幅（时间问候语："Good Morning, Erius"）+ 可替换背景
├─ [中部 Greeting 卡] 手写体大标题问候语（沿用首页风格）
├─ [右栏 时钟卡] 实时数字时钟（7-segment 风格）
├─ [右栏 日历卡] 当月日历，今日高亮
├─ [底部 最新动态卡] 最近文章/动态列表（先放静态示例数据）
├─ [底部 社交矩阵] GitHub / Bilibili / 邮箱 链接
└─ [全局] 响应式（<600px 单列堆叠）+ 暗色模式开关（可选）
```

**去掉的**：Live2D 看板娘（用户明确不需要）、音乐播放器（版权与性能考虑，可选后加）、隐藏 .pem 上传、canvas 装饰背景（保留可选）。

## 三、配色令牌（沿用 lvy010 调研成果，微调成 Erius 色）

```css
:root {
  --color-brand: #35bfab;          /* 主青绿 */
  --color-primary: #334f52;        /* 主文字深灰绿 */
  --color-secondary: #7b888e;      /* 次文字灰青 */
  --color-brand-secondary: #1fc9e7;/* hover 亮青 */
  --color-bg: #eeeeee;             /* 页面底 */
  --color-border: #ffffff;
  --color-card: #ffffff66;         /* 卡片半透明白 */
  --color-article: #ffffffcc;
}
```
字体：标题手写体（沿用 Caveat），正文 Kalam → 如需中文字体另配。

## 四、多 Agent 分工任务卡（四 agent 并行）

> 纪律：接口先行 → 一人一块 → 交接文档流转（写 docs/handoff/），全部遵循 AGENTS.md 五律。

| 区块 | Agent | 职责 | 产出 | 依赖 |
|---|---|---|---|---|
| 骨架+路由 | 主 Agent(饲主/我) | Astro 项目初始化、`/home` 路由、全局布局、CSS 变量令牌 | 项目骨架 + astro.config + 全局样式 | — |
| 数据契约 | Agent A(结构/内容) | 定义 `src/data/profile.ts`（姓名/简介/社交）、`posts.json`、`projects.json` 字段结构 | 数据文件 + TypeScript 类型 | 主 Agent 骨架 |
| 视觉实现 | Agent B(视觉前端) | 实现全部卡片组件（用户卡/时钟/日历/问候卡/社交矩阵）消费 A 的数据 | .astro 组件 + 样式 | A 的数据契约 |
| 交互 | Agent C(交互/JS) | 实时时钟 JS、日历生成 JS、暗色切换、菜单交互 | 交互脚本 | B 的组件挂载点 |
| 验收部署 | Agent D(测试/部署) | 本地 dev 验证、响应式检查、构建产物验证、写部署文档 | 验收报告 | B/C 完成 |

**执行顺序**：主 Agent 搭骨架 → A 先出数据契约（B 才能开工）→ B 视觉 → C 交互（可并行 B 后部）→ D 验收 → push 上线。每块完成后写交接卡到 docs/handoff/。

## 五、验收标准

- [ ] `/home` 在桌面 1440px 与手机 375px 均正常显示（响应式无横向滚动）
- [ ] 时钟/日历实时可用，时区为本机
- [ ] 数据全部来自 `src/data/`（不硬编码在组件里）→ 将来换真实后端只改数据层
- [ ] `npm run build` 通过，产物为纯静态
- [ ] push 后 GitHub Pages 自动更新，https 访问正常

## 六、里程碑拆分（每步一个 git commit）

1. `feat(init)`: Astro 项目初始化 + /home 空路由 + 全局令牌
2. `feat(data)`: 数据文件 + 类型定义
3. `feat(ui)`: 左栏用户卡 + 问候卡（先做这两个，验证设计语言）
4. `feat(ui)`: 时钟卡 + 日历卡（需 JS）
5. `feat(ui)`: 最新动态卡 + 社交矩阵
6. `feat(ux)`: 暗色模式 + 响应式打磨
7. `docs(deploy)`: 部署验证 + AGENTS.md 更新
8. `feat(build)`: 构建通过，push 上线
