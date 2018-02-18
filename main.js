var Person = function(name) {
  this.name = name;
};

Person.prototype.greet = function() {
  console.log('Hello, my name is '+this.name);
};

var Developer = function(name, skills) {
  Person.apply(this, arguments);
  this.skills = skills || [];
};

Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

var skills = [
  "html5",
  "css3",
  "js",
  "jq",
  "react",
  "angular",
  "vue",
  "nodejs",
  "express",
  "mongodb"
];
var person = new Developer("Rakhim", skills);

person.greet();
console.log(person.name);
console.log(person.skills);
