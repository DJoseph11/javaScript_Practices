// Object.assign() function can be used to copy all of the enumerable properties from an existing Object instance to a new one.

var obj = {
    charName: "David",
    charLevel: "20",
    charHealth: "100",
    items: {
        items_1: "knife + 1"
    }
}

var shadowClone = Object.assign({}, obj);

console.log(shadowClone);




var user = {
    firstName: "John",
}

// Just as it mentioned below it assign a new property to the object

Object.assign(user, {lasName: "Elves", age:39} );

console.log(user)


// below is an example of using the object.assign() method.

var user_2 = Object.assign({}, user);

console.log(user_2);


/// To access each property that belong to an object with the loop below

for (let property in obj) {
    // Always check if an object has a property
    if (obj.hasOwnProperty(property)) {
        // do studd
    }
}

var firstObject = {
    a: 1
}

var secondObject = {
    b: 2
}

var thirdObject = {
    c: 3
}
 /*
 this little block of code merge all the key value pair thats in each object into a single one 
 but the targets themselves is also change

 */

var merge = Object.assign(firstObject, secondObject, thirdObject);

console.log(merge);

