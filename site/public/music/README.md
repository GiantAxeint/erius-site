# site/public/music/ —— 播放器歌曲目录

把下载好的歌曲文件放进**本目录**（`site/public/music/`）即可，无需任何额外配置。
本地完整路径：`C:\Users\28903\WorkBuddy\调试\erius-site\site\public\music\`
（即 GitHub 仓库 `GiantAxeint/erius-site` 的 `site/public/music/`）

## 用法

- 支持的格式：`.mp3`、`.m4a`、`.ogg`、`.wav`、`.aac`、`.flac`
- **文件名（不含后缀）就是歌名**，播放器会直接显示
  例：`Starry Sky.mp3` → 播放器显示「Starry Sky」
- 放入文件后 commit + push（或网页端上传），GitHub Actions 自动重新部署，约 1 分钟生效
- 播放器 build 时自动扫描本目录生成曲目列表，**无需改任何代码**
- 推荐体积：单首 ≤ 8 MB，目录总大小 ≤ 50 MB（GitHub 单文件 100 MB 限制）

## 播放逻辑（无需配置）

- 主页（/home）：播放器以内嵌模块展示在右列，固定不可拖
- 子页（/about /projects /tinkering /journal）：自动变成右下角悬浮小条
  - 用 `⠿` 手柄拖拽移动位置，用右下角 `↘` 手柄拖拽调整大小（宽 150~420px，宽:高 = 1:0.6）
  - 位置与大小会记住（localStorage）
- 切页不断播：audio 由布局层常驻管理（View Transitions + transition:persist）
- 点 ▶ 随机播放；单曲结束自动随机切下一首（不重复当前）；⏮ 顺序回退

## 当前歌曲（9 首）

| 歌名 | 文件 |
|---|---|
| 祈り、終われば | 中岛美嘉 - 祈り、終われば.mp3 |
| 旅人の唄 | 大原ゆい子 - 旅人の唄.mp3 |
| 決意の唄 | 大原ゆい子 - 決意の唄.mp3 |
| 風と行く道 | 大原ゆい子 - 風と行く道.mp3 |
| spiral | LONGMAN - spiral.mp3 |
| 天气先生 | 方大同 - 天气先生.m4a |
| 爱不来 (feat. Miss Ko葛仲珊) | 方大同 - 爱不来 (feat. Miss Ko葛仲珊).m4a |
| 苏丽珍 | 方大同 - 苏丽珍.mp3 |
| 吉他手 | 陈绮贞 - 吉他手.mp3 |

## 注意事项

- 确认拥有版权再上传到公开仓库
- 如果用 Git LFS 跟踪大文件，本目录的 audio 会从 LFS 取
