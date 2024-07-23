export default function appendToEachArrayValue(array, appendString) {
	const arr = []; // construct a new array
	for (const value of array) {
		arr.push(appendString + value);
	}

	return arr;
}
