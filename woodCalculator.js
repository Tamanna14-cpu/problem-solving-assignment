function woodCalculator(khat, table, chair){
   var  khat = khat * 2;
   var table = table * 2;
   var chair = chair * 4;
   var total = khat + chair + table;
   return total;
}
var result = woodCalculator(3, 10, 2);
console.log('total wood needed: ' + result);