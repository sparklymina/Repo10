// Only change code below this line
function myFunction(myObj) {
    var vegetableValue = myObj["vegetable"];
    var fruitValue = myObj["fruit"];
    var drinkValue = myObj["drink"];
    return {vegetableValue, fruitValue, drinkValue};
}

var myFood = {
    vegetable: "carrot",
    fruit: "orange",
    drink: "water"
};
// Only change the code above this line
console.log(myFunction(myFood)); // Change this line
module.exports =  myFunction(myFood);