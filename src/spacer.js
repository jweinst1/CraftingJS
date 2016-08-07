//spacer for pretty writing code


//closure sealed spacer function
var Spacer = function(){
	var indent = "";
	var increment = " ";
	function Spacer(inc){
		if(inc) {
			indent += increment;
			return indent;
		}
		else {
			return indent;
		}
	}
	return Spacer;
};

exports.Spacer = Spacer;