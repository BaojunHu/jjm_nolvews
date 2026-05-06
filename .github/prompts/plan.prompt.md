---
name: Plan Volumes
description: "基于规格书生成卷级大纲；用于把 specification.md 转成全书创作计划。"
argument-hint: "故事目录名"
agent: "agent"
---

用户输入：$ARGUMENTS

你正在当前工作区内执行卷级大纲生成任务。

目标：读取 stories/<story>/specification.md，将其转化为卷级大纲，并写入 stories/<story>/creative-plan.md。

执行要求：
- 始终使用简体中文。
- 优先从参数中识别故事目录名；如果未提供，列出 stories/ 下的候选目录让用户选择。
- 完整读取对应的 specification.md。
- 如果 creative-plan.md 已存在，先询问用户是覆盖还是追加更新。

为每一卷生成以下内容：
- 卷名和核心主题。
- 章节范围。
- 核心冲突。
- 2 到 3 个主要转折点。
- 高潮事件。
- 结尾钩子。
- 角色变动。
- 伏笔规划。

输出文件结构应类似：

# [故事名称] 创作计划

## 全书概览
- 总章数：
- 总卷数：
- 主线概要：

## 第一卷：[卷名]
- 卷目录：vol-001
- 章节范围：第1-XX章
- 核心主题：
- 核心冲突：
- 转折点：
  1. 
  2. 
- 高潮事件：
- 结尾钩子：
- 角色变动：
- 伏笔规划：

完成后明确提示用户下一步可以运行 /write 1 或 /write 1 --batch 20。