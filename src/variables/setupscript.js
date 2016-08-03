//json writing script for variable names

var fs = require('fs');

fs.readFile("Tagineer-master/tagineer/Adjectives.txt", 'utf-8', function (err, data) {
    if (err) throw err;
    data = data.split("\n");
    var jsonobj = {names:data};
    jsonobj = JSON.stringify(jsonobj);
    fs.writeFile("names.json", jsonobj, function (err) {
        if (err) throw err;
        console.log('setup complete');
    });
});