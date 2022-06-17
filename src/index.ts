export default function csvv(csv: string, delimiters = ","): any {
  const splitLine = csv.split("\n").filter((x) => x);

  let content: any = [];
  let headers: string[] = [];

  let newArray: any = [];

  for (const index in splitLine) {
    const n = +index;
    if (n == 0) {
      headers = splitLine[n].split(delimiters).filter((x) => x);
    } else {
      content.push(splitLine[n].split(delimiters).filter((x) => x));
    }
  }

  for (const x of content) {
    let newObject = {};
    for (const n in x) {
      newObject[headers[n]] = x[n];
    }
    newArray.push(newObject);
  }

  return newArray;
}
