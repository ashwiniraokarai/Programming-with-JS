//------------Reverse an array in a new array without using using the ready-made .reverse() method

function reverseArrayClever(readArray) {

var newArray = [];
	
for (var entry of readArray) {
	newArray.unshift(entry);
}//end for
	
return newArray;
	
}

reverseArrayClever([1,2,3,4]); //O.P: 4,3,2,1


//-----------The traditional way
function reverseArray(readArray) {

var newArray = [];
for (var i = readArray.length-1; i >= 0; i--) {
	newArray.push(readArray[i]);
}//end for
	
return newArray;
	
}

reverseArray([1,2,3,4]); //O.P: 4,3,2,1


//----------Enhancement: Reverse an array within itself without employing a separat array and without using the .reverse() method
//Logic: Begin at the beginning of the aray. Swap the first number with last number in the first iteration.
//Swap the second number with the number before last in the second iteration
//..and so on until you hit the mid of the array
function reverseArrayInPlace (readArray){
	var old;
	var length = readArray.length;
	var mid = Math.floor(length/2); //Mid is length divided by 2 and then rounded to the larget integer but lower than existing numbeer (E.g.: 5.95 gets converted to 5)
	var end = length-1;
	for (var i = 0; i < mid; i++) {
		old = readArray[i]; 
		readArray[i] = readArray[end-i];
		readArray[end-i] = old;
	}
	return readArray;
}

reverseArrayInPlace([1,2,3,4,5]); //O.P: 5,4,3,2,1
