//Challege: Write a function that accepts a list and a position and returns the element (value) at the given position

function getElementInList (position, list) {

	var listIndex;
	listIndex = 0;
	
	for (var node = list; node; node = node.rest) {
		
		if (listIndex === position) { //If current index is supplied position the return the node.value (element)
			return node.value;
		} else {					//else increment the index just in time when the node is about to point to list.next for 								next iteration
			listIndex++; 
		}
		
	}
	
	//At this point we know the position does not exists and so does not the value. So, return an error message.
	return "Cannot find a value. Supplied position is outside of list bounds.";

}

//----------------------------------------------------------------------------------------------------------------------

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


//Pass the desired position and list to the function invocation as arguments
getElementInList (1, list); //O.P: 1
getElementInList (2, list); //O.P: 2
getElementInList (3, list); //O.P: 3
getElementInList (4, list); //O.P: undefined (nothing is returned)



//********Alternate way to do the function without needing the node variable yet yields the same result. 

function getElementInList (position, list) {

	var listIndex;
	listIndex = 0;
	
	for (list; list; list = list.rest) {
		
		if (listIndex === position) { //If current index is supplied position the return the node.value (element)
			return list.value;
		} else {					//else increment the index just in time when the node is about to point to list.next for 								next iteration
			listIndex++; 
		}
		
	}
	//Note: At each iteration the "list" grows smaller and smaller as it points to the next sub-list but we aren't returning a manipulated list anywhere, therefore the "list" is presevered when you access it outside the for-loop
	
	//At this point we know the position does not exists and so does not the value. So, return an error message.
	return "Cannot find a value. Supplied position is outside of list bounds.";

}



