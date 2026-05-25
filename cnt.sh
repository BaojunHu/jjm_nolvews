#!/bin/bash
d="stories/your_chance_is_my_chance/volumes/vol-001/novelws"
for f in "$d"/chapter-001.md "$d"/chapter-002.md "$d"/chapter-003.md; do
  name=$(basename "$f")
  # Use perl to count Chinese characters
  count=$(perl -CSD -ne 'while (m/\p{Han}/g) { $c++ } END { print $c }' "$f")
  echo "$name: $count"
done