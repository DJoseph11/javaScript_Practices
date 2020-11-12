console.log("test");

document.writeln("Hello World");

/*variable names are used for statements, variables, parameters,
property names, operators, and labels.*/

/*THe (&&) or and operator produces the value of its first operand
* if the first operand is falsy. Otherwise, it produces the value of
* the second operand
*
* The (||) or (or) operator produces the value of its operand if
* the first operand is truthy. Otherwise, its produces the value of the
* second operand.*/

// There are 6 object literals tha is known right now they as follow
// number literal, string literal, object literal, array literal,
// function literal, and regexp literal.


//-------------------------------------------------Object literal------------------------------

const apartment = {
	doorNumber: "204",
	room: "3",
	bath: "2",
	address: {
		street: "385 Main St.",
		city: "Dinar",
		state: "Tx",
		zip: "76358"
	}
};

// Update the value iin an object can be updated by assignment, if the prop name exist.

// document.write(apartment.address.street = "124 Money St.");


console.log(apartment.room = "5");


console.log(apartment.address.city = "Austin");

// if the object does not have that property name, that property is added to the
// object.

// Object are passed as reference they never copied.

var x = apartment;
x.bath = "4";

var bathUpdate =  apartment.bath;

document.writeln(bathUpdate);



var a = {}, b = {}, c = {};
//	      a, b, c each refer to  a different object.

a = b = c = {};

//   a, b, c all refer to the same empty object


// ---------------------------------------------Function------------------------------

/* Functions are objects ::: functions can be stored in variables, objects, and array*
function can pass as arguments to function and function can be returned from a function.*/

// The function in add is called an anonymous function.

var add = function (a, b) {
	return a + b;
};



console.log(add(4, 5));

// A method is when a function is stored as a property of an object.

/*The example below the log is showing undefined*/

const myObject = {
	value: 0,
	increment: function (inc) {
		this.value += typeof inc === "number" ? inc : 1;
	}
};


myObject.increment(1);
document.writeln((myObject.increment(1)));    // 1

myObject.increment(2);
console.log(document.writeln(myObject.increment(2)));     // 3



