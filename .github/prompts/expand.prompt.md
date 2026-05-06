---
name: Expand Chapter
description: "将章节概要扩写为正文；用于 /expand 单章或批量扩写。"
argument-hint: "章节号，可选 --batch N"
agent: "agent"
---

用户输入：$ARGUMENTS

你正在当前工作区内执行章节扩写任务。

目标：把已存在的 synopsis 扩写为 3000 到 5000 字正文，并在必要时补充卷级 tracking。

强制要求：
- 所有创作上下文必须重新从文件系统加载，不得依赖本次对话里之前生成过的中间内容。
- 始终使用简体中文。
- 从参数中解析章节号，以及可选的 --batch N。

路径规则：
- 概要：stories/<story>/volumes/vol-XXX/content/chapter-YYY-synopsis.md
- 正文：stories/<story>/volumes/vol-XXX/content/chapter-YYY.md
- Tracking：stories/<story>/volumes/vol-XXX/tracking/

加载上下文时，优先按以下顺序读取：
- specification.md 的核心摘要。
- creative-plan.md 中当前卷的片段。
- 当前卷 volume-summary.md。
- 当前章 synopsis。
- 前一章正文末尾；若前一章尚未扩写，则读取前一章概要。
- 当前章涉及角色的 character-state。
- 活跃伏笔与相关关系。
- resources/style-reference.md。
- resources/anti-ai.md。

如果 resources/config.json 启用数据库模式，可调用 scripts/db_context.py 获取精确上下文，并在完成后调用 scripts/db_sync.py 同步。

扩写原则：
- 忠实于概要，不偏离核心事件、角色和情感走向。
- 保持与 specification.md、creative-plan.md 一致。
- 对话与互动要符合 tracking 中的关系状态。
- 遵循 style-reference.md 和 anti-ai.md。
- 与上一章衔接自然，伏笔在正文中落地。

如果正文已存在，先询问是否覆盖。完成后提示用户可运行 /analyze 检查质量。