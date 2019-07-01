/*Write an 8*8 grid that displays a chess-board structure like this (alternating space and #):

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 

Once the 8*8 grid is achieved, bind the grid size to binding so that it can work for any sizing.

*/


/*
----------------------------------------THE LONG VERSION---------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------------
*/

//Code for row 1 (can be extended to any odd row later on with an outer-level condition that checks whether the row is odd or even)
var row = ""; //Row has nothing to begin with
for (var col = 1; col <= 8; col++) {
	
	if (col % 2 === 0) {
		row = row + " ";  //Even column = Print existing value + "#" on the row
    } else {
		row = row + "#";  //Odd column = Print existing value + " " on the row
    }
}
console.log(row); //Display the entire row

//Output: # # # #    (<space><Hash><space><Hash><space><Hash><space><Hash>)


//Code above extended and rewritten to display all rows (the full grid) for any number of rows

var size = 8;
for (var rows = 1; rows <= size ; rows++){
	var row = ""; //Row has nothing to begin with
	for (var col = 1; col <= size; col++) {
		
		//Check if the row is an even row
		if (rows % 2 === 0) {
			if (col % 2 === 0) {
				row = row + " ";  //Odd column = Existing value + "#" on the row
			} else {
				row = row + "#";  //Even column = Existing value + " " on the row
			}
		}//If the row isn't even row, it's obviously an odd row
		else{
			if (col % 2 === 0) {
				row = row + "#";  
			} else {
				row = row + " "; 
			}
			
        }
	}	
    console.log (row); //Display the entire row
    //console.log (rows); //Uncomment this if you'd ever have to debug to check what row you are on
	
}//Go back to check if there's going to be another row


/*
----------------------------------------THE CLEVER VERSION-------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------------
*/

/*This logic slightly differently, whether a "position" is even or add is decided by adding up the outer loop counter and inner loop counter and doing %2 on the remainder */


var size = 8;

for (var rows = 0; rows < size; rows++){
	var row = "";
	for (var position = 0; position < size; position++){
		if ((rows + position) % 2 === 0){
			//even
			row = row + " ";
		} else {
			//odd
			row = row + "#";
		}
	}//1 full row ready when the loop terminates
	console.log(row);
}
//This gives the same output as before but the code is just less crude and has less number of lines


//A SLIGHTLY ALTERNATE way: Save the printing part for the end outside both the fors, in which case instead of starting a new string at every row we'll need to have one giant string that carries the entire grid. 1) The empty string needs to be set only once before the loops starts instead of being reset at the beginning of every row (inner loop) 2) At the end of every inner loop, append the string with a new line character instead of simply displaying and discarding it 3)At the end of the outer for, display the full grid at once

var size = 8;
var grid = "";

for (var rows = 0; rows < size; rows++){

	for (var position = 0; position < size; position++){
		if ((rows + position) % 2 === 0){
			//even
			grid = grid + " ";
		} else {
			//odd
			grid = grid + "#";
		}
		
	}
	
	grid = grid + "\n";
	
}
console.log(grid);