/////////////////2//////////////////////

// var color = prompt("enter a color of traffic light!");
// switch (color.toLowerCase()) {
//   case "green":
//     alert("go!");
//     break;
//   case "red":
//     alert("wait green color!");
//     break;
//   case "yellow":
//     alert("wait!");
//     break;
//   default:
//     alert("underfined!");
// }

//////////////////////////////1//////////////////////////
var arr1 = [
  "Bishkek",
  "LosAngeles",
  "Chicago",
  "NewYork",
  "Houston",
  "Dallas",
  "Philadelphia",
  "Seattle",
  "Tokyo",
  "Rum",
];
console.log(arr1);

var arr2 = [];

for (var i = 0; i < arr1.length; i++) {
  if (arr1[i].includes("S") || arr1[i].includes("s")) {
    arr2.push(arr1[i]);
  }
}
console.log(arr2);


var arr3 =[]

for (var i = 0 ; i < arr1.length ; i++){
    if(arr1[i].length > 6){
        arr3.push(arr1[i])
    }
}
console.log(arr3);