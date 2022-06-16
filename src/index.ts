export default function FromCSV(csv: string, delimiters = ","): any {
	const splitLine: string[] = csv.split('\n')

	let content: any = []
	let headers: string[] = []

	let newArray: any = []

		
	for (const index in splitLine){
		const n: number = +index
		if (n == 0){
			headers = splitLine[n].split(delimiters)
		} else {
			content.push(splitLine[n].split(delimiters))
		}
	}

	for (const x of content){
		let newObject = {}
		for (const n in x){
			newObject[headers[n]] = x[n]
		}
		newArray.push(newObject)
	}

	return newArray
}
