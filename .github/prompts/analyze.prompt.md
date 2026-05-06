---
name: Analyze Chapter
description: "检查正文与概要、角色、伏笔、连贯性和 AI 味；用于 /analyze 单章或范围分析。"
argument-hint: "章节号，或 --range start-end"
agent: "agent"
---

用户输入：$ARGUMENTS

你正在当前工作区内执行章节质量检查任务。

目标：对目标章节或章节范围做质量分析，输出简洁明确的分析报告。

执行要求：
- 始终使用简体中文。
- 支持单章分析，以及 --range start-end 的批量分析。
- 根据 creative-plan.md 定位章节所属卷。
- 加载当前章正文、对应概要，以及卷级 tracking 文件。
- 读取 resources/anti-ai.md 作为 AI 味检测基准。
- 如果 resources/config.json 启用数据库模式，可调用 scripts/db_context.py 获取分析上下文。

必须检查以下五项：
- 概要符合度。
- 角色一致性。
- 伏笔完整性。
- 连贯性。
- AI 味检测。

输出格式要求：
- 先给出本章或本批次的结论。
- 再给出每个检查项的评分：完全符合、部分偏离、严重偏离，或自然、轻微 AI 味、明显 AI 味。
- 明确列出需要关注的问题和可执行修改建议。
- 不要求写回文件，默认直接在聊天中输出分析结论。