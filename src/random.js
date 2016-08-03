//file for random functions

//random number between x and y
var randNumber = function(x, y){
	return Math.floor((Math.random() * y) + x);
};

//returns random element of array
var randSelect = function(arr){
	return arr[Math.floor((Math.random() * arr.length-1) + 0);]
};