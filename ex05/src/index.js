// Create school object here
var school = {
    name: 'Arena',
    location: 'Sarajevo',
    established: 2020
};
// End of school object

function myFunction(name) {
// Only change code below this line
    school.name = name
    return school;
// Only change the code above this line
}
myFunction("Paragon"); // Change this line
module.exports = { school, myFunction };