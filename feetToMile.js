function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}

var result = feetToMile(10560);
console.log(result);