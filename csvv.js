export default function (csv, delimiters = ",") {
  const splitLine = csv.split("\n").filter((x) => x);
  let content = [];
  let headers = [];
  let newArray = [];
  for (const index in splitLine) {
    const n = +index;
    if (n == 0) {
      headers = splitLine[n]
        .split(delimiters)
        // .filter((x) => x)
        .map((x) => x.replace("\r", ""));
    } else {
      content.push(
        splitLine[n]
          .split(delimiters)
          //   .filter((x) => x)
          .map((x) => x.replace("\r", ""))
      );
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
