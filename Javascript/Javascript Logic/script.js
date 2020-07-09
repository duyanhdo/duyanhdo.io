let array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

function countDup(item){
	let count = 0;
	array.forEach(t => {
		if (t === item) {
			count++;
		}
	});
	return count;
}

function getNumberIdentity(arr){
	arr = arr.sort(function(a, b){return a - b});
	let arrRs = [];
	//let arrTemp = [...arr]; //clone an array
	do{
		const item = arr[0];
		const count = countDup(item);
		if (count === 1) {
			arrRs.push(item);
		} else {
			let arrrrrr = [];
			for(let i = 0 ; i < count ; i++){
				arrrrrr.push(item);
			}
			arrRs.push(arrrrrr);
		}
		arr = arr.filter( t => t !== item);
	} while (arr.length > 0);
	return arrRs;
}

getNumberIdentity(array);