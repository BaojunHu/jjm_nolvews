import sys
with open(sys.argv[1], 'r') as f:
    content = f.read()
chinese_chars = sum(1 for c in content if '\u4e00' <= c <= '\u9fff')
total_chars = len(content.strip())
print(f'中文字数: {chinese_chars}')
print(f'总字符数(含标点空格): {total_chars}')