
//Highest of 3 numbers or how many ever

function getHighestNumber (arrayNum) {

var high = arrayNum[0]; //Rank the first array number as the highest temporarily (to begin with) to begin a comparison

for (var i = 0; i < arrayNum.length; i++) {
    if (arrayNum[i] > high) { 
        high = arrayNum[i]; //update the highest number found so far
    }
}
return high;
}

getHighestNumber ([1,3,2]);

