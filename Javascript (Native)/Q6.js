// Q6. Explain the concept of prototypes in JS. How is it related to Classes in ES6
1. Prototypes are the mechanism by which JavaScript objects inherit features from one another.
2. Prototypes is a simple way to share behaviour and data between multiple objects.
3. The prototypes are property of the Object constructor and can be seen from the code below -
        Object.prototype
4. Why do you need prototypes? - Sometimes you want to add new properties (or methods) to all
the existing objects of a given type. This is possible only by adding the new method to the
prototype function.

5. Example:
function Student(name, age) {
this.name = name;
this.age = age;
}
var stu1 = new Student("John", 50);
var stu2 = new Student("Sally", 48);
Student.prototype.getName = function() {
return this.name;
}

The below statement will work and produce the name of the object like -
stu1.getName(); // Return “John”

6. Before ECMAScript 2015, there wasn't officially a way to access an object's prototype directly — 
the "links" between the items in the chain are defined in an internal property,
 referred to as [[prototype]] in the specification for the JavaScript language (see ECMAScript).

 7. Since ECMAScript 2015, you can access an object's prototype object indirectly via Object.getPrototypeOf(obj).