function findCharCount (superString, char) {
	let charCount = 0;
    for (let i = 0; i < superString.length; i++) {
        if (superString[i] === char) {
            charCount = charCount + 1;
        }	
	}
	return charCount;
 
}

//Test
findCharCount("KeBaB","B"); //2

findCharCount("Spartan","a"); //2

findCharCount("SpartAn","a"); //1

findCharCount("Spartan","f"); //0