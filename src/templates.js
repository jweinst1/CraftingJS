//javascript constructs templates for string building


var templates = {
	//arguments[0] is always indent
	"var":function(){
		return arguments[0] + "var " + arguments[1] + " = " + arguments[2] + ";";
	},
	//arguments[0] is indent
	"print":function(){
		return arguments[0] + "console.log(" + arguments.slice(1).join(", ") + ");";
	}
};

exports.templates = templates;

console.log(templates.var("foo", 6));