//variable sorting and organizing file

//main json file that contains variable names
var names = require("./names.json");


var VariableSet = (function(){
	//private function to randomly select from array
	var randSelect = function(arr){
		return arr[Math.floor((Math.random() * arr.length-1) + 1)];
	};
	function VariableSet(name){
		this.name = name || ""
		this.set = {};
		this.list = [];
		this.title = false;
	}
	VariableSet.prototype.contains = function(variable) {
		return variable in this.set;
	};
	//creates an entirely new randomly chosen variable name
	VariableSet.prototype.newVar = function() {
		var newvariable = randSelect(names.names);
		while (newvariable in this.set) {
			newvariable = randSelect(names.names);
		}
		this.set[newvariable] = 1;
		this.list.push(newvariable);
		return newvariable;
 	};
 	//picks a randomly existing variable
 	VariableSet.prototype.pickVar = function() {
 		var picked = randSelect(this.list);
 		this.set[picked] += 1;
 		return picked;
 	};
 	//decreases the reference count of a variable
 	VariableSet.prototype.decRef = function(variable){
 		if(variable in this.set) {
 			if(this.set[variable] === 1) {
 				delete this.set[variable];
 				for (var i = this.list.length - 1; i >= 0; i--) {
 					if(this.list[i] === variable) {
 						this.list.splice(i, 0);
 					}
 				}
 			}
 			else {
 				this.set[variable] -= 1;
 			}
 		}
 	};
	return VariableSet;
})();

exports.VariableSet = VariableSet;