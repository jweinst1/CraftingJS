//file for random functions

//random number between x and y
var randNumber = function(x, y){
	return Math.floor((Math.random() * y) + x);
};

exports.randNumber = randNumber;

//returns random element of array
var randSelect = function(arr){
	return arr[Math.floor((Math.random() * arr.length-1) + 1)];
};

exports.randSelect = randSelect;

//returns a randomly sized slice of an array
var randArrayElements = function(arr){
	return arr.slice(0, Math.floor((Math.random() * arr.length-1) + 1));
};

exports.randArrayElements = randArrayElements;