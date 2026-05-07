---
name: "expand"
description: "将章节概要扩写为 3000-5000 字正文。Invoke when user wants to expand a synopsis to full chapter content."
---

# Expand

## 目标

将已生成的章节概要扩写为 3000-5000 字的完整正文。

## 参数解析

- 章节号：从参数提取
- `--batch N`：批量扩写 N 章（最大 10），从指定章节号开始

## 卷定位

根据章节号和 `stories/<story>/creative-plan.md` 中每卷的章节范围，确定目标章节所属的卷目录。

## 资源加载（3层结构）

### 第 1 层 — 全局视角
- specification.md 摘要（100字）
- 当前卷大纲
- volume-summary.md（500-1000字）

### 第 2 层 — 章节核心
- 当前章概要（200-500字）
- 前一章正文末尾（500-800字）

### 第 3 层 — 细节支撑
- 本章出场角色状态
- 本章活跃伏笔
- 本章相关角色关系
- 风格参考
- 反AI规范

## 执行步骤

1. 前置检查：确认 synopsis.md 存在，正文不存在或确认覆盖
2. 加载上下文
3. 扩写正文：忠实于概要，保持全局一致性，遵循风格规范
4. 补充卷级 tracking 细节
5. 批量模式：重复扩写 N 次

## 输出

写入 `stories/<story>/volumes/vol-XXX/content/chapter-YYY.md`。