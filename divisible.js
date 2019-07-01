/*Print numbers 1 thro 100, with 3 exceptions. 
When a number is divisible by 3, should display the word "fizz" instead of the actual number and when a number is divisible by 5 (and not by 3) it should display the word "buzz" instead
When a number is divisible by both 3 and 5 it should display the word "FizzBuzz" instead of the actual number while continuing to display Fizz and Buzz for numbers divisible by only one of those
*/

//The usual if-else version
for (var i=1; i<=100; i++){
	if(!(i%3) && !(i%5)){   //Equivalent to: if (i % 3 == 0) && if (i % 3 == 0)
		console.log("FizzBuzz");
    }else if(!(i%3)){
		console.log("Fizz");
    } else if(!(i%5)){
		console.log("Buzz");
    }
	else{
  		console.log(i);
    }
}


//The clever version
for(var j=1;j<=100;j++){
	var output = ""; //EVERY loop begins with an empty string
	if(j % 3 == 0) {
		output = "Fizz";
	}
	if(j % 5 == 0){
		output += "Buzz"; //Note the use of += such that if "Fizz" was ouput as a result of the first "if", the Buzz gets appended if the second "if" evaluates true, thus forming "Fizz"+"Buzz" = "FizzBuzz". 
		//On the other hand if the first "if" did not eveluate to true, then the output did not receive any "Fizz" but remained an empty string. If the second "if" evaluates to true, it forms ""+"Buzz" = "Buzz". If both "if"s resulted false, then output would just remain "".
	}
	console.log (output || j); //if output is true (rememeber: 0 Nan and EMPTY STRINGS evaluate to false) then display "Fizz"/"Buzz"/"FizzBuzz" whatever output has stored. If output is false (i.e, in this case empty) then display the actual number!
	//This is based on the concept of "short-circuiting" of logical operators. The logical && and || operators convert the value on their LEFT to BOOLEAN in order to decide what to do when the values are of DIFFERENT TYPES. The || operator will return the ORIGINAL VALUE on LEFT when it can be CONVERTED to TRUE and will return the ORIGINAL VALUE on RIGHT OTHERWISE!
}


/*Program Output: (Ignore the VM124:5 part)
VM124:5 1
VM124:5 2
VM124:5 Fizz
VM124:5 4
VM124:5 Buzz
VM124:5 Fizz
VM124:5 7
VM124:5 8
VM124:5 Fizz
VM124:5 Buzz
VM124:5 11
VM124:5 Fizz
VM124:5 13
VM124:5 14
VM124:5 FizzBuzz
VM124:5 16
VM124:5 17
VM124:5 Fizz
VM124:5 19
VM124:5 Buzz
VM124:5 Fizz
VM124:5 22
VM124:5 23
VM124:5 Fizz
VM124:5 Buzz
VM124:5 26
VM124:5 Fizz
VM124:5 28
VM124:5 29
VM124:5 FizzBuzz
VM124:5 31
VM124:5 32
VM124:5 Fizz
VM124:5 34
VM124:5 Buzz
VM124:5 Fizz
VM124:5 37
VM124:5 38
VM124:5 Fizz
VM124:5 Buzz
VM124:5 41
VM124:5 Fizz
VM124:5 43
VM124:5 44
VM124:5 FizzBuzz
VM124:5 46
VM124:5 47
VM124:5 Fizz
VM124:5 49
VM124:5 Buzz
VM124:5 Fizz
VM124:5 52
VM124:5 53
VM124:5 Fizz
VM124:5 Buzz
VM124:5 56
VM124:5 Fizz
VM124:5 58
VM124:5 59
VM124:5 FizzBuzz
VM124:5 61
VM124:5 62
VM124:5 Fizz
VM124:5 64
VM124:5 Buzz
VM124:5 Fizz
VM124:5 67
VM124:5 68
VM124:5 Fizz
VM124:5 Buzz
VM124:5 71
VM124:5 Fizz
VM124:5 73
VM124:5 74
VM124:5 FizzBuzz
VM124:5 76
VM124:5 77
VM124:5 Fizz
VM124:5 79
VM124:5 Buzz
VM124:5 Fizz
VM124:5 82
VM124:5 83
VM124:5 Fizz
VM124:5 Buzz
VM124:5 86
VM124:5 Fizz
VM124:5 88
VM124:5 89
VM124:5 FizzBuzz
VM124:5 91
VM124:5 92
VM124:5 Fizz
VM124:5 94
VM124:5 Buzz
VM124:5 Fizz
VM124:5 97
VM124:5 98
VM124:5 Fizz
VM124:5 Buzz
*/