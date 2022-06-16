# CSVV

Convert CSV to JSON

## Installation

```bash
npm i csvv
```

## Type Definition

```typescript
declare function FromCSV(csv: string, delimiters?: string): any;

export { FromCSV as default };
```

## Example

```typescript
import FromCSV from "csvv";

const data = `name|address|hobby
zen|samarinda|programming
yani|samarinda|cooking
aira|samarinda|writing
maryam|samarinda|playing`;
const delimiters = "|";

console.log(FromCSV(data, delimiters));
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
