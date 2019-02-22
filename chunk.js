// chunk([0, 1, 2, 3, 4, 5, 6], 2) --> [[0, 1], [2, 3], [4, 5], [6]]
// chunk([0, 1, 2, 3, 4, 5, 6], 3) --> [[0, 1, 2], [3, 4, 5], [6]]
function chunk(array, n) {
	let newArray = [];
	let smallerArray = [];

	for (let num of array) {
		
		if (smallerArray.length < n) {
			smallerArray.push(num);
		}

		if (smallerArray.length === n || num === array.length - 1) {
			newArray.push(smallerArray);
			smallerArray = [];
		}
	}

	return newArray;
}

console.log(chunk([0, 1, 2, 3, 4, 5, 6], 2))