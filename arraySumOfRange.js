
//Form an array of numbers based on a range of numbers AND
//sum them AND
//provide an optional third argument that decides the "step" value when building the array. Default step -> increments of 1

//The traditional harder yet intuitive way:
function sumOfRange(start, end, step = 1) {
	var arrayOfNumbers = [start]; //begin an array with a single element set to the value of "start"
	var sum = start;
	
	for (var i = 1; arrayOfNumbers[i-1] < end; i++) {
         temp = arrayOfNumbers[i-1]  + step;
		if(temp < end) {
		 arrayOfNumbers[i] = temp;
		 sum = sum + arrayOfNumbers[i]
        }
    }
	return [{"array": arrayOfNumbers, "sum": sum}]
}
sumOfRange(1,5,2);

//The clever way which I want to move my thinking process to:
function sumOfRangeClever (start, end, step = 1){
	var array = [];
	var sum = 0;
	for (var i = start; i <= end; i++) {
		array.push(i);
	}
	
	for(var value of array){
		sum = sum + value;
    }
	return ({"array": array, "sum": sum});
}

sumOfRangeClever (1,5);


//Next step: Include checks before accepting or operating the 3 inputs
//check that start is less than end
//check that step is greater than 0
function sumOfRangeClever (start, end, step){
	var array = [];
	var sum = 0;
	
	if (step < 0) {
		step = -step; //This will make sure the for loops do not cause aS stack overflow!
	}
	
	//if start < end, then simply increment until value is less than or equal to the hightest value (end)
	if (start < end) {
		for (let i = start; i <= end; i = i + step) {
			array.push(i);
		}
    } else { //if start > end then simply decrement (instead of incrementing) until value is greater than or equal to the lowest value (end)
		
		for (let i = start; i >= end; i = i - step) {
			array.push(i);
		}
    } else { //=> start = end set the array to start (or end, doesn't matter)
		array = [start];
		
	}
	
	//sum the values in the newly formed array 
    for(var value of array){
        sum = sum + value;
    }
    return ({"array": array, "sum": sum});
	
}


sumOfRangeClever (1,5,1); //start < end
sumOfRangeClever (5,1,1); //start > end with step increment
sumOfRangeClever (5,1,-1); //start > end with step decrement 
sumOfRangeClever (1,5,1); //start < end with step increment
sumOfRangeClever (-1,4,-2);
sumOfRangeClever (-1,-4,-2);



