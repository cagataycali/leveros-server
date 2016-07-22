var faker = require('faker');

module.exports.sayHello = function (name, callback) {
  var randomName = faker.name.findName(); 
  callback(null, colors.red.underline(`Hello ${name} ${randomName} !`));
};
