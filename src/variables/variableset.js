//variable sorting and organizing file

//main json file that contains variable names
var names = require("./names.json");

var randSelect = function(arr){
	return arr[Math.floor((Math.random() * arr.length-1) + 0)];
};

var VariableSet = (function(){
	function VariableSet(){
		
	}
	return VariableSet;
})();

exports.VariableSet = VariableSet;