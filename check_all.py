import os, glob

base = 'stories/your_chance_is_my_chance/volumes/vol-001/novelws'
files = sorted(glob.glob(os.path.join(base, 'chapter-*.md')))

for f in files:
    with open(f, 'r') as fh:
        content = fh.read()
    chinese = sum(1 for c in content if '\u4e00' <= c <= '\u9fff')
    total = len(content.strip())
    name = os.path.basename(f)
    status = '✅' if chinese >= 2000 else '❌'
    print(f'{name}: 中文字={chinese}, 总字符={total} {status}')

print(f'\n共计 {len(files)} 章')