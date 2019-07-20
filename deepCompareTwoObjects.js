//Compare two objects and return if their properties (keys) and value pairs match. NOTE: The comparison is expected to be sequential. If object1 has fruit: "banana" as its first key-value pair and if object2 has fruit: "banana" as its first key-value pair then return true. This keeps the comparison simple. If we were to compare key-value pairs that occur at differing positions then that will possibly complicate the code enormously.




/****************************************************************************************
THE LONGER VERSION
****************************************************************************************/

function deepCompareTwoObjects(elem1, elem2){
	
	//If arguments are not objects (simple data-types such as string/ numbers, then deep compare 
	if (typeof(elem1) != "object" && typeof(elem2) != "object") {
		 if (elem1 === elem2) {
			return true; //deep compare 1 value each belonging to identical keys extracted from 2 different objects in the for loop later below
		 } else {
			 return false;
		 }
	}
	
	
	//If arguments are objects:call deepCompareTwoObjects again with keys

	//Easiest way to rule out that the object match is by comparing the count of properties. If that doesn't match it's evident that one object has more properties than the other so the properties can never match. There's isn't a reason to run a loop to compare any further. Terminate
	
	var keysObj1 = Object.keys(elem1), keysObj2 = Object.keys(elem2);
	

	if (keysObj1.length != keysObj2.length) {
		return false;   //terminate
	}

	//If the highest level keys match (which is true of length above returned true) check if a key's value is again an object. Call deepcompare on VALUES if they evaluate yes to is-an-object check (IMPORTANT: keys are STRINGS whereas values can be basic data types or objects. E.g.: In obj = {here: {is: "an"}, object: 2}, "here" is a string whereas obj["here"] = is: "an", is an object. "object" is a string whereas obj["object"] = 2, is a number
		
	for (var key of keysObj1) {
	
		//If obj2 has the same key as obj1's first key somewhere (irrespective of the position) then navigate to THAT key's value in BOTH the objects by leveraging the bracket notation! Thus we point to a key at a specific position sequentially on Obj1 but look for THAT key wherever it is positioned in Obj2 and grab their respective values.
		if (keysObj2.includes(key)) { 

			//Keep calling recursively until you satisy enters first if-condition that compares non-objects. Recusion ensures every key's value that may be an object is drilled down until a simple data-type such as string/ number is found.
			if (deepCompareTwoObjects(elem1[key], elem2[key]) === false) {
			
				return false; //values don't match
            }
			
		} else {
			return false; //keys don't match
		}
		
	}
	
	return true; //eventually return true after the loop ends if none of the checks inside the for failed
	
}//end function


var elem1 = {here: {is: "a"}, object: 2};
var elem2 = {here: {is: "an"}, object: 2};

deepCompareTwoObjects(elem1, elem1); //O.P: true
deepCompareTwoObjects(elem1, elem2); //O.P: false
deepCompareTwoObjects(elem1, {here: {is: "a"}, object: 2}); //O.P: true
deepCompareTwoObjects(elem1, {here: {is: 1}, object: 2}); //O.P: false
deepCompareTwoObjects("iamNotAnObject","iamNotAnObject"); //O.P: true
deepCompareTwoObjects("iamNotAnObjects","iamNotAnObject"); //O.P: false
deepCompareTwoObjects("iamNotAnObjecT","iamNotAnObject"); //O.P: false


/***************************************************************************************
THE SHORTER VERSION
****************************************************************************************/

function deepCompareTwoObjects(elem1, elem2) {
	
	//if simple data type values. If equal return true.
	if (elem1 === elem2) { 	//if === evaluates to true....
		return true; 	//return true to caller. If false, keep calm and keep moving. Do nothing yet.
	}


	/*If that did not return true, program control will go here
	//The previous if could have evaluated to false (note EVALUATED to false, NOT returned false) for more than 1 reason i) if the values actually did not match ii) if the values were objects that could not be compared directly 
	So before jumping into reading object keys, return false if they aren't objects
	*/
	if (typeof(elem1) != "object" || typeof(elem2) != "object") { 	//not objects.
		return false; 			// This means the === if check prior to this failed because they actually did not match, not because they were objects. Time to return false now.
	}


	//If program control got here it automatically means the inputs are objects. Compare the key: value pairs inside the objects

	var keysObj1 = Object.keys(elem1), keysObj2 = Object.keys(elem2);	

	for (var key of keysObj1) {
		if (!keysObj2.includes(key) || !deepCompareTwoObjects(elem1[key], elem2[key])) { //same as saying 
			return false;
		}
	}

	return true;
}


var elem1 = {here: {is: "a"}, object: 2};
var elem2 = {here: {is: "an"}, object: 2};

deepCompareTwoObjects(elem1, elem1); //O.P: true
deepCompareTwoObjects(elem1, elem2); //O.P: false
deepCompareTwoObjects(elem1, {here: {is: "a"}, object: 2}); //O.P: true
deepCompareTwoObjects(elem1, {here: {is: 1}, object: 2}); //O.P: false
deepCompareTwoObjects("iamNotAnObject","iamNotAnObject"); //O.P: true
deepCompareTwoObjects("iamNotAnObjects","iamNotAnObject"); //O.P: false
deepCompareTwoObjects("iamNotAnObjecT","iamNotAnObject"); //O.P: false

