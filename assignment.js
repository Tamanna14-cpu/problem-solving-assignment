// 1st problem : feetToMile
function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}

var result = feetToMile(10570);
console.log('it is: ' + result.toFixed(3) + ' mile');


// 2nd problem : woodCalculator
function woodCalculator(khat, table, chair){
    var  khat = khat * 2;
    var table = table * 2;
    var chair = chair * 4;
    var total = khat + chair + table;
    return total;
 }
 var result = woodCalculator(3, 10, 2);
 console.log('total wood needed: ' + result);


//  3rd problem : brickCalculator



// 4th problem : tinyFriend
var friends = ['lily', 'nitarani', 'shanti', 'fowzia', 'taibullah'];
var min = friends[0];
for (i = 0; i < friends.length; i++){
    var element = friends[i];
    if(element.length < friends[i].length){
        min = element;
    }
}
console.log(min);