console.log("test");

document.writeln("Hello World");

/*variable names are used for statements, variables, parameters,
property names, operators, and labels.*/

/*THe (&&) or "and" operator produces the value of its first operand
* if the first operand is falsy. Otherwise, it produces the value of
* the second operand
*
* The (||) or (or) operator produces the value of its operand if
* the first operand is truthy. Otherwise, its produces the value of the
* second operand.*/

// There are 6 object literals that is known right now they as follow
// number literal, string literal, object literal, array literal,
// function literal, and regexp literal.



function d (b, c) {
	/*--------*/
}

a.length


function d(a, b) {
	//the body of the function
}

// function object has a length property to the number og parameters.

d.length

// and using the length property I see the outcome to be as expected which is two


typeof [1, 2, 3] === "object"


;


var e = 87;

// (typeof variable) by itself will endup being "undefined"
// but if it has a value then it identify the type of the value
// stored in the variable.


typeof e;  // result "number";

e = true;

typeof e;  // the result "boolean"

e = null;

typeof e;  // the result "object"

e = "Win";

typeof e;  // the result "string"

// typeof variable;


// var a;

// a;
// b;

/// "var a" once execute we would expect "undefined"
/// but b" on the other hand didnt get declared so the brower would
//  gives a reference error, in order to get rid of the error just
// declared before being called such as " var b; to get undefined"
// or "var b = true" would result in boolean for its value.

// typeof a;  // result in "undefined".
// typeof b;

// // to do a safe check if it exist.
// if (typeof abc === "undefined") {
//     abc = function () {

//     }
// }

if (window) {
	///
}

function doSomething() {
	var helper =
		(typeof FeatureXYZ !== "undefined");
	FeatureXYZ :
		function() {
			//// default feature here
		}
	var val = helper();
}

//// the function check for a variable called
//// FeatureXYZ if found use it if not dont use it

/// an IIfE can be created this function which is called
// "Immediatly Invoked Function Expression"

(function() {
	function FeatureXYZ() {

	}
	function doSomething() {
		var helper =
			(typeof FeatureXYZ !== "undefined");
		FeatureXYZ :
			function() {
				//// default feature here
			}
		var val = helper();
	}
	doSomething();

})();








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


/// Arguments

const sum = function () {
	let i, sum = 0;
	for (i = 0; i  <  arguments.length; i++) {
		sum += arguments[i];
	}
	return sum;
}

document.writeln(sum(3, 3, 5, 5, 6,)); // 22

/// Exceptions

const addFunc = function (a, b) {
	if (typeof a !== "number" || typeof b !== "number") {
		throw {
			name: "Type error",         // <----- was missing the comma.
			message: "AddFunc needs numbers."  /// Uncaught SyntaxError: Unexpected identifier.
		};
	}
	return a + b;
}

document.writeln(addFunc(2, 3));




