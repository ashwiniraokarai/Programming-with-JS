//Function accepts an array of objects and an event (should be an from a pool of events in the array of objects) and populates a "table" array based on 2 conditions
//table can be visualized this: 00 01
//						 10 11
//00 (table index 0) : event = false, squirrelness = false
//01 (table index 1) : event = false, squirrelness = true
//10 (table index 2) : event = true, squirrelness = false
//11 (table index 3) : event = true, squirrelness = true

//For more context: http://eloquentjavascript.net/04_data.html#p_Px7nduaW01

function tableForAnEvent (event, journal) {

    var table = [0, 0, 0, 0];  //table is array into which we will populate values. Values are determined by the looping thro the journal array and matching events and squirrelness.
   

    for (var i = 0; i < JOURNAL.length; i++){

        var tableIndex = 0; //Start at index 0 each time

        if(journal[i].events.includes(event)) {
            tableIndex = tableIndex + 1; //Note: Only index is being incremented. The array element itself isn't being referenced yet
        }

        if(journal[i].squirrel) {
            tableIndex = tableIndex + 2; //Note: Only index is being incremented. The array element itself isn't being referenced yet
        }

        table[tableIndex] = table[tableIndex] + 1; //Value of array element at the index we determined is incremented 
       }
    return table;

}

//Test the function
tableForAnEvent ("pizza", JOURNAL); //OP: [76, 9, 4, 1]
tableForAnEvent ("peanuts", JOURNAL); //OP: [77, 8, 0, 5]

