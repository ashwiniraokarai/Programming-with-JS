/*Challenge: Write a function that accepts an array such as [1,2,3] and creates a list out of it like this:

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

*/



//Trying to visualize the array values in a list (this is NOT the code)
var array = [1,2,3];
var newList = {
	value: array[0],
	rest: {
		value: array[1],
		rest: {
			value: array[2],
			rest: null
			}
    	}
};



//Starting from the end of the array seems to be the simplest way to do lists
//Start with the last element with the "rest" value preset to null
//As you navigate backwards to the array for each element, the "rest" value is set to the previous list value that holds the part of the list built so far!
function arrayToList (array) {

    var list = null;

    for(var i = array.length-1; i >= 0; i--) {
        list = {value: array[i], rest: list};
	}
	
	return list;
}

arrayToList([1,2,3]);





