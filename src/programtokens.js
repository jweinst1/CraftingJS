//Token tree file

var startTokens = ["print", "var", "func", "forin", "for", "while", "if", "switch"];

exports.startTokens = startTokens;

var tokenTree = {
	"var":[".num", ".str", ".bool", ".func", "func.num", "func.str", "func.bool"],
	"print":[".num", ".str"]
};

exports.tokenTree = tokenTree;