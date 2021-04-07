var friends = ['lily', 'nitarani', 'shanti', 'fowzia', 'taibullah'];
var min = friends[0];
for (i = 0; i < friends.length; i++){
    var element = friends[i];
    if(element < friends){
        min = element;
    }
}
console.log(min);