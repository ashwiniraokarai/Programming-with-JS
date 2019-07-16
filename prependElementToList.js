
function prependToList (elem, list) { //Both elem AND existing list are supplied as arguments to the function
	
	var newList; //newList where the supplied element will be prepended to the supplied list
	
	newList = {value: elem, rest: list}; 
	
	return newList; //This can also be achieved without necessarily needing a name or variable for the new list just by doing return {value: elem, rest: list}
}

//--------------------------------------------------


var elem = 0 ;

var list = {
	value: 1,
	  rest: {
		value: 2,
		rest: {
		  value: 3,
		  rest: null
		}
	  }
};

//Invoke the function with elem and list values
prependToList (elem, list);