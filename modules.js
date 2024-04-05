const xyz = require('./people');
console.log(xyz.people, xyz.ages);
// you can also do this and using the . notation
const { people, ages } = require('./people');

console.log(people, ages)
const os = require('os');
console.log(os.platform(), os.homedir());


