
//Remove the array element at the specified index (push and pop can only remove elements starting at the beginning or end, not at a specified position)

function removeElement(array, index) {
	
	//Array to read the copy of the passed array with the element at the specified index removed 
	var newArray = [];
	
	//the first slice reads the array from beginning and until the specified index but excluding the last
	//the second slice inside concat reads starting at the index after the skipped element until the end of the array
	//thus when you concat them you have a new array with the specified element eliminated
	
	newArray = array.slice(0,index)  
        	.concat(array.slice(index+1));
	return newArray;
}

removeElement(["a","b","c","d","e"],2); //Remove the element at index 2 in the supplied array
