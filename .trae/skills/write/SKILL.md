---
name: "write"
description: "逐章生成剧情概要（200-500字），严格控制字数，同步更新 tracking。Invoke when user wants to generate chapter synopses."
---

# Write

## 目标

为指定章节生成 200-500 字的纯剧情概要（严格控制字数），同步生成 tracking 骨架数据。

## 参数解析

- 章节号：从参数提取，如 `1`、`42`
- `--batch N`：批量生成 N 章概要（最大 20），从指定章节号开始

## 卷定位

根据章节号和 `stories/<story>/creative-plan.md` 确定目标章节所属的卷目录。

## 首次写入某卷时的初始化

如果卷目录不存在，自动创建目录结构和初始化 tracking 文件。

## 资源加载

- specification.md 摘要（100字）
- 当前卷大纲
- volume-summary.md（跨卷上下文）
- 本卷前序概要标题列表
- 前一章概要全文

## 执行步骤

1. 确定故事目录、章节号和所属卷
2. 确保卷目录存在（如不存在则初始化）
3. 加载上下文
4. 生成概要（含标题、核心事件、出场角色、情感走向、章末钩子）
5. 更新卷级 tracking（character-state.json、relationships.json、plot-tracker.json、timeline.json）
6. 批量模式：重复生成 N 次

## 输出

写入 `stories/<story>/volumes/vol-XXX/content/chapter-YYY-synopsis.md`。