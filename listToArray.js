//Challenge: Write a function that accepts a list and creates an array out of it


//Logic: The loop points to the biggest list in the first iteration. Just reading the "value" property's value gives the first element. By the end of iteration one, list points to the "rest" property i.e, the sub-list, so reading the "value" property again gives the second element. The loop thus keeps pointing to sub-lists and reading respective "value" property's value until "rest" returns FALSE (null returns false)!

function listToArray(list) {

    var array = [];

    for (var node = list; node; node = node.rest) {
        array.push(node.value);
    }
	
	return array;
}


var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

listToArray(list); //o.p: [1,2,3];
