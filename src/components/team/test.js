var twoDArrayOfObjects = [
 [{ name: 'John', age: 30 }, { name: 'Alice', age: 25 }],
 [{ name: 'Bob', age: 35 }, { name: 'Eve', age: 28 }]
];


var objectWithKeys = {};
twoDArrayOfObjects.forEach(function(innerArray) {
 innerArray.forEach(function(obj) {
  objectWithKeys[obj.name] = obj;
 });
});

console.log(objectWithKeys)