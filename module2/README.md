# Object vs Map:

>1. The construction is of course different

The object literal syntax is the simplest way to create an object map in JavaScript.
```
const gamesObj = {
  1: 'Citadels',
  2: 'Tzolkin'  
};
```
Maps are created using the built-in Map constructor.
```
const gamesMap = new Map([
  [1, 'Citadels'],
  [2, 'Tzolkin']
]);
```

>2. Keys on objects are strings, on maps keys are of any type

>3. Keys on objects are strings, on maps keys are of any type
Another difference is that objects created with the object literal have a set of unexpected key-value pairs from the Object.prototype.

When we print the Object.prototype you can see it has a few properties like ```hasOwnProperty, isPrototypeOf, toLocaleString, toString```.

An object created with the object’s literal syntax will have all these property keys on it. So the empty object {} is not really empty.

>4. Maps preserve the order of their keys, objects do not

The original order of key-value pairs is preserved in maps, while in objects it is not.
```
const gamesObj = {
  2: 'Tzolkin',
  1: 'Citadels',
};const keys = Object.keys(gamesObj);
console.log(keys);
//["1", "2"];
```
Notice that when the object is created the key 2 comes before the key 1. When retrieving all the keys 2 comes after 1.

Below is a similar collection built with the Map constructor. This time the initial order is preserved.
```
const gamesMap = new Map([
  [2, 'Tzolkin'],
  [1, 'Citadels']
])const keys = gamesMap.keys();
console.log(keys);
//MapIterator {2, 1}
```

>5. JSON offers support for objects but not for maps
