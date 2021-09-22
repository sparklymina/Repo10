// Only change code below this line
function myFunction(myObj) {
    var hatValue = myObj.hat;
    var shirtValue = myObj.shirt;
    var shoesValue = myObj.shoes;
    return {hatValue, shirtValue, shoesValue};
}

var myClothes = {
    hat: "Fedora",
    shirt: "Nike",
    shoes: "Converse"
};
// Only change the code above this line
console.log(myFunction(myClothes)); // Change this line
module.exports =  myFunction(myClothes);