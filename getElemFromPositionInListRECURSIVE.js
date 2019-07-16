//Challege: Write a recursive function that accepts a list and a position and returns the element (value) at the given position (this is the recursive version of getElemFromPositionInList.js)

//Clue: I have found a pattern in recursionl. You start with the value in question and then go backwards. For e.g. in finding factorial of n, we do this: return factorial(n*(n-1)) with a condition when to stop the recursion when n-1 reaches 0

//Let's first try and write a backwards loop version of the forward-looking getElemFromPositionInList.js to see if that helps plan recursion better

function getElementInListCountDown (position, list) {
	
	//We'll count the list starting from position backwards till 1 i.e, we consider 1 is the starting position in the list for our purposes
	
	for(list;;list = list.rest) {
		if(!list) {
			return undefined;//return undefined when supplied position is outside the list bounds E.g: 0, -1
			
        } else if (position == 1) { //you've finished traversing the list until the supplied position
			
			return list.value; //return the value associated with the sub-list the node is currently pointing at. This is the final outcome of a happy path
		}
		else { //keep decremented the position from the supplied value until you traverse the 
	    	position = position - 1;
		}
		
	}
	
}

//----------------------------------------------------------------------------------------------------------------------

var list = {
	value: 10,
	  rest: {
		value: 20,
		rest: {
		  value: 30,
		  rest: null
		}
	  }
};


//Pass the desired position and list to the function invocation as arguments
getElementInListCountDown (-1, list); //O.P: undefined
getElementInListCountDown (0, list); //O.P: undefined
getElementInListCountDown (1, list); //O.P: 10
getElementInListCountDown (2, list); //O.P: 20
getElementInListCountDown (3, list); //O.P: 30
getElementInListCountDown (4, list); //O.P: undefined 


////----------------------------------------------------------------------------------------------------------------------
//Let's now try to translate this into an ACTUAL RECURSIVE function

function getElementInListRecursive (position, list) {
	if (!list) {
		return undefined; 
	} else if (position == 1) {
		return list.value; 
	} else {
		return getElementInListRecursive (position-1, list);
	}
}

var list = {
	value: 10,
	  rest: {
		value: 20,
		rest: {
		  value: 30,
		  rest: null
		}
	  }
};


//Pass the desired position and list to the function invocation as arguments
getElementInListRecursive (1, list); 

