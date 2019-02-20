//*****Loop*****// 
function addNums(array = []) {
	let total = 0;
	for (let num of array) {
		total += num;
	}
	return total;
}

//*****Recursion*****//
// let result;
// function addNums(array = []) {
	
// 	if (array.length === 0) {
// 		return result;
// 	}

// 	let num = array.splice(0, 1)[0];
// 	if(result) { 
// 		result += num;
// 		return addNums(array);
// 	}

// 	result = num;
// 	return addNums(array);
// }

console.log('The total is: ' +addNums([2, 4, 6, 8, 9, 88, 56, 6, 8, 4])); // Can be any number of numbers in this array