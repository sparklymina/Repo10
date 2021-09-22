// Only change code below this line
function myFunction(myObj) {
    var playerNumber = 10;
    var player = myObj[playerNumber];
    return player;
}

var players = {
    7: 'Muhamed Besic',
    10: 'Miralem Pjanic',
    11: 'Edin Dzeko'
};

console.log(myFunction(players));
// Only change the code above this line
module.exports = { players, myFunction};