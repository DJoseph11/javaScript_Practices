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

// function object has a length property to the number of parameters.

d.length

// and using the length property I see the outcome to be as expected which is two
// as in a, b


//typeof [1, 2, 3] === "object"





var e = 87;

// (typeof variable) by itself will end up being "undefined"
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
		function fdfd() {
			//// default feature here
		}
	var val = helper();
}

//// the function check for a variable called
//// FeatureXYZ if found use it if not dont use it

/// an IIfE can be created this function which is called
// "Immediately Invoked Function Expression"

(function() {
	function FeatureXYZ() {

	}
	function doSomething() {
		var helper =
			(typeof FeatureXYZ !== "undefined");
		FeatureXYZ :
			function drf() {
				//// default feature here
			}
		var val = helper();
	}
	doSomething();

})();

/* The review for this chapter of understand javaScript has seven built in  types boolean, numbers,
* string, undefined, null, objects and symbol
* variables dont have types but the value that stored with them do

// The one and only that's true
*
*
Number.isNaN(NaN);
*
// Numbers
*
Number.isNaN(1);
Number.isNaN(-2e-4);
Number.isNaN(Infinity);
*
// Values not of type number
*
Number.isNaN(true);
Number.isNaN(false);
Number.isNaN(null);
Number.isNaN("");
Number.isNaN(" ");
Number.isNaN("45.3");
Number.isNaN("1.2e3");
Number.isNaN("Infinity");
Number.isNaN(new Date);
Number.isNaN("10$");
Number.isNaN("hello");
Number.isNaN(undefined);
Number.isNaN();
Number.isNaN(function(){});
Number.isNaN({});
Number.isNaN([]);
Number.isNaN([1]);
Number.isNaN([1, 2]);
Number.isNaN([true]);

*
*
*
*
*
* *
* undefined is not the same as undeclared. Undefined, for example, unassigned variables with no value will give undefined
* undeclared is a name that was not assigned as a variable which if used typeof you will get a reference error. Once
* the name is assigned it will give "undefined". To get out of that a value would need to be assigned in which case
* taking the typeof now would give you one of the seven built in types.
*  */


//-------------------------------------------------Values-------------------------------------

/* Arrays, strings and numbers are the building block of any program there several built in value types lets try to
* fully understand them and how to correctly use their behavior.
*
* JavaScript arrays are just containers for any type of value from string to number to object to another arrays*/

var a = [1, "2", [3]]


a.length;                // which we should end up with 3

a[0] === 1;              // expect true
a[2][0] === 3;           //expecting true because a[2] index in the array is
                         // the array at that index and within that array
                         // at index [0] is 3 hence true
var j = [ ];
a.length;

j[0] = 1;
j[1] = 2;
a[2] = [3]

a.length

//arrays are numerically indexed and they are also objectd that can have strings

var f = [ ];
f[0] = 1;
f["foobar"] = 2;

f.length;
f["foobar"];
f.foobar;

//use objects for holding values in keys/properties and use array to store numerically
// indexed values.

function foo() {
	var arr = Array.prototype.slice.call( arguments );
	var number = arr.push("bam");
	console.log( arr );
}
foo( "bar", "baz" );

// by using the slice() method/utility y against the value if slice is called without
// a parameter the default values can end up duplicating an array-like objects

// theres also a built in method/utility called Array.from( ) that can do the same thing.

// var arr = Array.from(arguments);  // as seen above
var bigArr = Array.from("something");
console.log(bigArr)                 //expected result breaking down the string "something" into an array-like looking
									// like so. ["s", "o", "m", "e", "t", "h", "i", "n", "g"]






///Strings----------------------

/*javaScript strings are immutable which means that it not changeable while arrays are mutable the reason for that is
* string and array both seems alike both has an indexOf() method, a .length property, and the concat() method.
* immutable string cannot use any of the  string methods to change values in place but instead has to to be created
* and returned the new string. Arrays has many methods that can modify it in place.*/

// many of the array method are not available to strings even though they
// feel and act alike each other but by using the nonmutation array methods thats available
// we borrow they effects.


a = "good";
b = "GOOD";

var c = Array.prototype.join.call(a, "-")

// console.log(c);

var d = Array.prototype.map.call(a, function(x) {
	return x.toUpperCase() + " * ";                  // result ["G,", "O,", "O,", "D,"]
});                                                 // without using join()



console.log(d);

var d = Array.prototype.map.call(a, function(x) {
	return x.toUpperCase() + " * ";                 //.join() gives you an output of
}).join();                                          // G * ,O * ,O * ,D *


// numbers------------------

// number values can be boxed with the number object wrapper and number values
// can access built in methods "toFixed()"

var a = 50;

a.toFixed(1); // "50"
a.toFixed(2); // "50.00" two decimal points.
a.toFixed(3); // "50.000" three decimal points.




// the output of toFixed() method though has an output of the numbers within string.

var a = 42.59;
a.toPrecision( 1 ); // "4e+1"
a.toPrecision( 2 ); // "43"
a.toPrecision( 3 ); // "42.6"
a.toPrecision( 4 ); // "42.59"
a.toPrecision( 5 ); // "42.590"
a.toPrecision( 6 ); // "42.5900"


var a = 29.34;
a.toPrecision( 1 ); // "3e+1"
a.toPrecision( 2 ); // "29"
a.toPrecision( 3 ); // "29.2"        // by using toPrecision(3) thats when the value .0 decimal place
a.toPrecision( 4 ); // "29.24"
a.toPrecision( 5 ); // "29.240"
a.toPrecision( 3 ); // "29.2400"

/* toFixed as can see above is similar behavior to toPrecision for example both shoots out
strings for they output*/

// 50.toFixed(3); this would give you a SyntaxError: Invalid or unexpected token.

(50).toFixed(3);      // is a valid syntax, the previous code has the number in front " . "
                      // from ".toFixed()" would gives a token error. by adding parentheses to
                      // the number would makes it valid so does decimal points and adding
50..toFixed(3);           // another " . " in front of " .toFixed() " would also makes it valid

0.1 + 0.2 === 0.3;  // False because these numbers are not actually equal so when added
                    // the result is not really 0.3


//-----------------------------------------------------------------// Data Types




// In an example :
// 	Var a = 1;
// Var b = a++;
// Var c = ++a
//
// In the first line the variable “ a ” holds  or if you prefer contain a value of “ 1 ” pretty simple enough and
// variable “ b ” with the value of  “ a++ ” for post increment , the “ ++ “ operator  acts as a counter where “ b ”
// end up having with a value of  “  1  “   as the initial “  var a = 1  ” keeping  the count in variable “ b “ .
// Even if the number changes.
//
// 	Var a = 2;        // initial value
//
// Var b = a++;  // b = 2  and a = 3  for further  clarity  if  “ a++ ”  execute one more time it would
// results  for   b = 3   and   a = 4.  If this was  going on in a loop 4 would be outside of
//               // the loop and not be counted.
//
// For the variable  “ c “ with the pre increment , it  does not behave the same way as “ b “  by keeping count of the
// past value of “ a ++“  which was “ 1 “. variable “ c “ becomes evenly match with the same value as pre increment of
// “ ++a “
//
// Var c = ++a     //   when log this value we can see  “ c “  would equals the value of “ 3 “.  From the data
// //  above where “ a = 1  “ post increment . When “ b = a++ “  the variable “ b “ has a new    value of “ 1 “
// and not  “ 2  “.  In an    another sense, any variable with a post increment (var  name = value ++)  would always
// end up with  a  gap I think tortoise and hare is a good example the hare is (hare ++) would always
// leave “ var tortoise ” behind a certain gap, and the platform for that gap is the initial value that was set up
// before the increment starts.


var d = `hello`;
var e = false;

d++;  // the value that's in the variable " d " is a string since " ++ " is an increment operator of numbers result in
// (d++)


e++; // this interestingly ended being 0 " var e " value is the boolean false which translate in computer language
// in 1s and 0s so true is " 1 " and false is " 0 "

/// (side notes to me) ;; its amazing how everything that deals with tech bogs down to ones and zeros. all this complex
/// creation like electronics is just one 1s and 0s. One needs to take a good moment to understand that. we got to this point
// based on two numbers hahaha one odd one even hahaha true and false, makes me wonder what about the other types that
// has a counter part such as left and right, up and down , I think it might be possible in the future.
// Left might be "1" and Right might be "0", UP is "1" and Down "0". Its not possible now since we still programming
// as if we not living in 3d but on a flat 2d paper plane. its amusing really. Note end











var a = 0.1 + 0.2;
var b = 0.3;

numherCloseEnoughToEqual(a, b);





function numherCloseEnoughToEqual(n1, n2) {
	return Math.abs(n1 -n2) < Number.EPSILON;
}

numherCloseEnoughToEqual(0.5, 0.5);    // this end up being true as well.

x = 0.2;
y = 0.3;
z = 0.1;

equal = (Math.abs(x - y + z) < Number.EPSILON);    // this code end up being true.

equal = (Math.abs(y - z === x) < Number.EPSILON);  // and this one works as well

// so in order to get decimals,  add the "Number.EPSILON" property. That property
//used to compare the two numbers.


//to test wether a value is an integer

Number.isInteger(36);   // it appears that whole numbers result in true. while number
                        // with decimals result in false but values like
                        // "Number.isInteger(36.00)" would result to be true.


//theres another method called "Number.isSafeInteger()"";

Number.isSafeInteger(35.01);     // just like Number.isInteger decimal that is above .00
                                 // will be false.


//SPECIAL VALUES-------

// JS also has special values such as "undefined" type which only has one value and thats
// "undefined". another special value is "null" type were its value is "null".


// we can look at "null" is an empty value and "undefined" is a missing value
// null is a lack of existence and undefined hasn't had a value yet.


//-----VOID OPERATOR
/*"undefined" is a JS built in identifier*/


var a = 42;

console.log(void a, a);  // by using void it voids out any value and its always undefined
                         // the existing value doesnt change but ensures that no value
                         //  comes back from the operator expression


// the not number "NaN" stands for "not a number" its a very special value in that its never
// equal to another NaN value.

var a = 2 / "hue";
var b = "hue";

// to safely check NaN values

if (!Number.isNaN) {
	Number.isNaN = function(n) {
		return ( typeof n === "number" && window.isNaN(n) );
	};
}

Number.isNaN(b)

//-----------------------------------------if/else/for------------------------------

var hour = 10;

if (hour >= 6 && hour < 12) {
	console.log("Good Morning");
} else console.log("Good Afternoon.")


// let b = 0;
// let c = 15;
//
//
// checkbandc:
// 	while(b < 4) {
// 		console.log(b);
// 		b++;
// 		checkc:
// 			while (c > 4) {
// 				console.log(c);
// 				c--;
// 				if ( c % 2 === 0) {
// 					continue checkc;
// 				}
// 				console.log(c + " is odd.")
// 			}
// 		console.log('b = ' + b);
// 		console.log('c = ' + c);
//
// 	}


function cutend(str, num) {
	if( typeof str !== "string" && typeof num !== "number") {
		return false;
	} else {
		var nStr = str.substr(0, str.length - num)
	}
	return nStr;
}


cutend("superman", 0)


// function reverseSign(num) {
//     if (typeof num !== "number") {
// 		return false;
// 	}
//     if (Math.sign(Number(num) === 1)
// 	    -Math.abs(num);
// 	}


// }

//     if (Math.sign(Number(num) === 1)
// 	   return -Math.abs(num);
// 	} else {
// 		return Math.abs(num)

// 	}


// console.log(reverseSign("1"))













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


var personArr = [
	{
		"personId": 123,
		"name": "Jhon",
		"city": "Melbourne", "phoneNo": "1234567890"
	},
	{
		"personId": 124,
		"name": "Amelia", "city": "Sydney", "phoneNo": "1234567890"
	},
	{
		"personId": 125,
		"name": "Emily",
		"city": "Perth", "phoneNo": "1234567890"
	},
	{
		"personId": 126,
		"name": "Abraham", "city": "Perth", "phoneNo": "1234567890"
	}
];
console.table(personArr, ['name', 'personId']);

// the example above log a table with the property and value in console.

// using instanceof

function sumArg(...arguments)  {
	if (arguments === 1) {
		const [firstArg] = arguments;
		if (firstArg instanceof Array) {
			return sumArg(...firstArg)
		}
	}
	return arguments.reduce((a, b) => a + b)
}

sumArg(45, 34, 56)

//null.constructor and undefined.constructor throw an error when accessed

function isNumber(value) {
	if (value === null || value === undefined) return false
	return value.constructor === Number
}


console.log(isNumber(undefined), isNumber([]), isNumber(() => 1), isNumber(0))


var objectAtring = new String("Money is ll i ned in thid momnt=");

typeof objectAtring;

typeof objectAtring.valueOf()

// mentioned that this method does not always works

function reverseString(str) {
	return str.split("").reverse().join("");
}


reverseString("something like this works just fine")

//

function reverseString(str) {
	return [...String(str)].reverse().join("");
}


reverseString([1, 2, 3, 4, 5])

function reverseString(...arguments) {
	return [...String(...arguments)].reverse().join("");
}

reverseString(157858890, 4858584)

function reverse(something) {
	return [...String(something)].reverse().join("");
}

reverseString("reload devtools");

// another example of reversing strings

function reverse(string) {
	var strRev = "";
	for(var i = string.length - 1; i >= 0; i--) {
		strRev += string[i];
	}
	return strRev;
}


reverse("something or other");

//To compare strings alphabetically, use localeCompare(). This returns a negative
//value if the reference string is lexicographically (alphabetically) before the
//compared string (the parameter), a positive value if it comes afterwards, and a
//value of 0 if they are equal.

function check(a , b) {
	if (a === b) {
		return 0;
	}
	if (a > b) {
		return 1;
	}
	return -1
}



var arr = ["Durie", "Bannan", "korosol"];
arr.sort(function(a,b) {
	return a.localeCompare(b);
})

/// rearange the array in alphabetically.

console.log(arr);


// Word counter

function wordCount(val) {
	var wom = val.match(/\S+/g);
	return {
		charactersNoSpace : val.replace(/\s+/g, "").length,
		character         : val.length,
		words             : wom ? wom.length : 0,
		lines             : val.split(/\r*\n/).length
	};
}

wordCount("Something did happen",
	"the does this works as well") //nope

wordCount("this can be multiple line of text to count the key of the object")

