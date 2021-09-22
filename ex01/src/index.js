// Only change code above this line
console.log(myFunction()); //Change this line
module.exports = [myPet, myFunction ];

// Only change code below this line
function myFunction(myObj) {
    return myObj;
}
var myPet = {
    species: "Tornjak",
    name: "Orga",
    legs: 4,
    friends: ["Mina", "Babo"]
};
// Only change the code above this line
console.log(myFunction(myPet)); // Change this line
module.exports = { myPet, myFunction };