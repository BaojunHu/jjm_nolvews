---
name: Write Synopsis
description: "生成章节剧情概要并更新 tracking；用于 /write 单章或批量生成概要。"
argument-hint: "章节号，可选 --batch N"
agent: "agent"
---

用户输入：$ARGUMENTS

你正在当前工作区内执行章节概要生成任务。

目标：为目标章节生成 200 到 500 字的剧情概要，并同步更新当前卷的 tracking 数据。

执行要求：
- 始终使用简体中文。
- 从参数中解析章节号，以及可选的 --batch N。
- 根据 stories/<story>/creative-plan.md 的章节范围定位卷目录。
- 路径规则：
  - 概要文件：stories/<story>/volumes/vol-XXX/content/chapter-YYY-synopsis.md
  - Tracking 目录：stories/<story>/volumes/vol-XXX/tracking/
- 首次写入某卷时，自动创建 content 和 tracking 目录，并初始化卷级文件。
- 如果进入新卷，生成或更新 volume-summary.md；若 resources/config.json 启用数据库模式，可调用 scripts/db_volume_switch.py。

最小上下文加载顺序：
- specification.md 的核心摘要。
- creative-plan.md 中当前卷对应片段。
- 当前卷 volume-summary.md。
- 本卷已有概要的标题列表。
- 前一章概要全文。

每章概要必须包含：
- 本章标题。
- 核心事件。
- 出场角色。
- 情感走向。
- 章末钩子。

写完概要后，更新以下 tracking 文件：
- character-state.json
- relationships.json
- plot-tracker.json
- timeline.json

如果启用数据库模式，tracking 更新完成后可运行 scripts/db_sync.py。

单章完成时，提示用户继续 /write 下一章或 /expand 当前章。
批量完成时，报告完成范围，并提示继续 /write 或开始 /expand。