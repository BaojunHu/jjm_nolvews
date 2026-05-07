---
name: "analyze"
description: "质量检查：对比概要与正文，检测一致性和AI味。Invoke when user asks to analyze chapter quality or check consistency between synopsis and content."
---

# Analyze

## 目标

对已扩写的章节进行质量检查，输出分析报告到终端。

## 参数解析

- 章节号：分析单章
- `--range start-end`：批量分析章节范围（如 `--range 1-20`）

## 卷定位

根据章节号和 `stories/<story>/creative-plan.md` 确定目标章节所属卷（如 `vol-001`）。

## 资源加载

- 目标章节正文：`stories/<story>/volumes/vol-XXX/content/chapter-YYY.md`
- 对应概要：`stories/<story>/volumes/vol-XXX/content/chapter-YYY-synopsis.md`
- 卷级 tracking：`stories/<story>/volumes/vol-XXX/tracking/character-state.json`、`stories/<story>/volumes/vol-XXX/tracking/plot-tracker.json`

## 检查项（5项）

### 1. 概要符合度
对比正文与概要，检查核心事件、出场角色、情感走向、章末钩子是否一致。

### 2. 角色一致性
对比正文中角色行为与 tracking 中的角色状态，检查性格、位置、关系互动是否一致。

### 3. 伏笔完整性
对比 plot-tracker 中标记的伏笔，检查应埋设和应回收的伏笔是否已处理。

### 4. 连贯性
检查与前后章的衔接、时间线连续性、场景转换合理性。

### 5. AI味检测
读取禁用词表，检查AI高频词使用、句式重复度、空洞描写比例、段落结构单一性。

## 输出格式

直接输出到终端，包含评分表格和问题建议。