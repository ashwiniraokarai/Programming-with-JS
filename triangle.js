//Display:
/*
Display this triangle:
#
##
###
####
#####
######
#######
*/

//Long version
let hash = "#";
for (let i = 0; i < 7; i++) {
	console.log (hash);
	hash = hash + "#";
}

//Short Version
for (let triangle = "#"; triangle.length < 8; triangle = triangle + "#"){
	console.log(triangle);
}
	
