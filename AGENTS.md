# AGENTS.md — erius-site 项目公约

> 每个会话/每个 agent 启动时自动加载，杜绝环境假设错误。改真实值后持续维护。

## 本机环境（每次开发前必须核对，禁止假设）

- OS：Windows 10.0.22631（中文系统，GBK 控制台输出）
- Shell：Git Bash（WorkBuddy 会话默认）；用户双击 .cmd 走 cmd.exe
- 项目根路径：`C:\Users\28903\WorkBuddy\调试\erius-site`（含中文目录，命令里必须加引号）
- 线上仓库：`github.com/GiantAxeint/erius-site`（main 分支，GitHub Pages 托管）
- 路径规范：一律使用相对路径；禁止硬编码用户目录；Windows 脚本用 ASCII + CRLF
- Python（本机可用）：managed `C:\Users\28903\.workbuddy\binaries\python\versions\3.13.12\python.exe`；系统 Python310 在 `C:\Users\28903\AppData\Local\Programs\Python\Python310\`
- Node（本机可用）：managed v22.22.2 @ `C:\Users\28903\.workbuddy\binaries\node\`；系统 node 24.19 @ `C:\Program Files\nodejs\`。全局 npm 包必须用系统 npm `C:\Program Files\nodejs\npm.cmd`，禁止会话内 `npm install -g`（沙箱拦截）
- GitHub CLI：`E:\DeepseekHome\gh-cli\bin\gh.exe`（已认证 GiantAxeint，token 存系统 keyring）
- git：2.55.0，身份 Erius / 2890386344@qq.com

## 常用命令（实测可用的为准）

| 操作 | 命令 |
|---|---|
| 本地预览 | 直接双击 index.html，或用 Edge 无头截图验收 |
| 提交 | `git add <文件> && git commit -m "<区块>: <说明>"` |
| 推送上线 | `git push origin main`（GitHub Pages 自动重新构建，约 1 分钟生效） |
| 查 Pages 状态 | `E:\DeepseekHome\gh-cli\bin\gh.exe api repos/GiantAxeint/erius-site/pages` |
| Edge 截图验收 | `"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless --screenshot=out.png <url>`（须脱离沙箱授权） |

## 项目结构

```
erius-site/
├── index.html     个人主页 v1（极简手写风单页名片，根路径访问）
├── .gitignore     排除预览截图等临时产物
├── AGENTS.md      本文件
└── docs/          文档（规划中，含 handoff/ 交接文档目录）
```

## 开发纪律（五条铁律）

1. 装任何依赖前，先读官方文档确认版本，禁止凭记忆/凭空填版本号。
2. 写码前先核对本文件"本机环境"，不确定就跑命令实测。
3. 一次只解决一个技术区块；解决完立即 `git commit` 保留版本。
4. 每完成一个区块，通读代码并补注释（解释为什么）。
5. 多 agent 协作：接手别人区块前，先读 `docs/handoff/` 下对应交接文档；完成自己的区块后写交接文档再上传 git。

## 路线图（路线 C：首页 + /home dashboard）

- [x] 任务 1：index.html 上线（GitHub Pages https://giantaxeint.github.io/erius-site/）
- [ ] 任务 3：AGENTS.md 纪律文件（本文件）
- [ ] 任务 2：/home 多卡片 dashboard 门户规划（仿 lvyovo-wiki，**去 Live2D**），参考 `_lvy_research/` 调研产物
- [ ] 待办：买域名（Cloudflare Registrar，.com 约 ¥80/年）→ 绑定 Pages 自定义域名

## 已知坑（踩过就记，防止再犯）

- WorkBuddy 会话沙箱拦截：GUI 子进程（Edge/浏览器）、全局 npm install、交互式 CLI（gh auth login）——需 `dangerouslyDisableSandbox=true` 授权或写 .cmd 让用户双击
- 会话 bash 不继承注册表用户环境变量；沙箱内 /tmp 对 Windows Python 不可见（要用真实路径）
- GitHub 下载大文件（gh.zip 15MB）易截断：用 `curl -L -C -`（断点续传）+ 校验期望字节数
- 页面字体走 fonts.googleapis.cn（国内镜像），不要改回 .com（国内打不开）
