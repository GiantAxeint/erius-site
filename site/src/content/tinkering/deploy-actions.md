---
title: '把个人站部署到 GitHub Pages + Actions 全自动'
date: 2026-09-04
summary: '记录从零搭 Astro 站点、绑定自定义域名、配置 CI 自动部署全过程，以及踩过的 Jekyll 吞目录、Cloudflare DNS 劫持等坑。'
tags: ['Astro', 'GitHub Pages', 'CI']
---

# 把个人站部署到 GitHub Pages + Actions 全自动

今天给 erius.dpdns.org 配好了全自动部署，记录一下过程和踩的坑，方便以后查。

## 技术栈

- **Astro 7**：静态站点生成，纯 HTML/CSS/JS 输出
- **GitHub Pages**：免费托管
- **GitHub Actions**：push 后自动 `npm run build` 并发布

## 踩过的坑

### 1. GitHub Pages 的 Jekyll 会吞 `_astro/` 目录

Astro 构建产物里有 `_astro/`（下划线开头）目录，而 Pages 默认跑 Jekyll，会把这类目录当"源文件"忽略 → 页面 CSS 全部 404。

**解法**：仓库根放一个空的 `.nojekyll` 文件。

### 2. Watt Toolkit 的假 DNS

本机装过加速工具，它的虚拟网卡会劫持所有 DNS 查询（任何域名都解析到 198.18.x.x），导致 curl 全挂。

**解法**：把 GitHub 真实 IP 写进 hosts；根治要关掉该工具的虚拟网卡。

### 3. Astro scoped CSS 与动态 DOM

用 JS `innerHTML` 拼出来的元素**没有** `data-astro-cid` 作用域属性，scoped 样式匹配不上。

**解法**：让 Astro 静态渲染结构，JS 只负责填内容/加类名。

## 现在的发布流程

改 `profile.ts` 或加一篇 Markdown → `git push` → 等 1 分钟 → 网站自动更新。

以后写文章再也不用碰构建流程了。


### 哈哈，全是AI写的，我在旁边提要求都累个半死（甲方你睡了吗，我睡不着.jpg）
