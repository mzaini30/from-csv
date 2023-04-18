# CSVV

Convert CSV to JSON

## Installation

```bash
pnpm i csvv
```

## Example

```typescript
import csvv from "csvv";

const data = `name|address|hobby
zen|samarinda|programming
yani|samarinda|cooking
aira|samarinda|writing
maryam|samarinda|playing`;
const delimiters = "|";

console.log(csvv(data, delimiters));
```

Result

```json
[
  { "name": "zen", "address": "samarinda", "hobby": "programming" },
  { "name": "yani", "address": "samarinda", "hobby": "cooking" },
  { "name": "aira", "address": "samarinda", "hobby": "writing" },
  { "name": "maryam", "address": "samarinda", "hobby": "playing" }
]
```
