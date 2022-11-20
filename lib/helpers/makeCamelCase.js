
const makeCamelCase = (string) => {
    
    var toks = string.split(" ");
    toks[0] = toks[0].toString().charAt(0).toLowerCase() + toks[0].slice(1);
    var ccString = toks[0];

    for (var i = 1; i < toks.length; i++) {
        toks[i] = toks[i].charAt(0).toUpperCase() + toks[i].slice(1);
        ccString +=toks[i];
    }

    return ccString;

}

module.exports = {makeCamelCase};