import FromCSV from './index'

const data = `name|address|hobby
zen|samarinda|programming
yani|samarinda|cooking
aira|samarinda|writing
maryam|samarinda|playing`
const delimiters = '|'

console.log(FromCSV(data, delimiters))