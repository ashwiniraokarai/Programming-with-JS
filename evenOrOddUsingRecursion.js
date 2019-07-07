function evenOrOdd (n){
	if (n === 0) {
		res = "even";
    } else if (n === 1) {
		res = "odd";
    } else if(n < 0) { //Only negative inputs will satisfy this, that too the first time. Once they are here they get converted to positive and in future recusrsion they automatically enter the final else.
		evenOrOdd (-n);
    } else {
		evenOrOdd (n - 2); //Keep calling the function with 2 subtracted from it's previous value until the value reaches either 0 or 1
    }
	return res;
}

//Test
evenOrOdd(5); //Odd
evenOrOdd(2); //Even
evenOrOdd(-1); //Odd
evenOrOdd(0); //Even

