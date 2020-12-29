// console.log("test");
//
// document.writeln("hello world");
//
// /*variable names are used for statements, variables, parameters,
// property names, operators, and labels.*/
//
// /*the (&&) or "and" operator produces the value of its first operand
// * if the first operand is falsy. otherwise, it produces the value of
// * the second operand
// *
// * the (||) or (or) operator produces the value of its operand if
// * the first operand is truthy. otherwise, its produces the value of the
// * second operand.*/
//
// // there are 6 object literals that is known right now they as follow
// // number literal, string literal, object literal, array literal,
// // function literal, and regexp literal.
//
//
//
// function d (b, c) {
// 	/*--------*/
// }
//
// a.length
//
//
// function d(a, b) {
// 	//the body of the function
// }
//
// // function object has a length property to the number of parameters.
//
// d.length
//
// // and using the length property i see the outcome to be as expected which is two
// // as in a, b
//
//
// //typeof [1, 2, 3] === "object"
//
//
//
//
//
// var e = 87;
//
// // (typeof variable) by itself will end up being "undefined"
// // but if it has a value then it identify the type of the value
// // stored in the variable.
//
//
// typeof e;  // result "number";
//
// e = true;
//
// typeof e;  // the result "boolean"
//
// e = null;
//
// typeof e;  // the result "object"
//
// e = "win";
//
// typeof e;  // the result "string"
//
// // typeof variable;
//
//
// // var a;
//
// // a;
// // b;
//
// /// "var a" once execute we would expect "undefined"
// /// but b" on the other hand didnt get declared so the brower would
// //  gives a reference error, in order to get rid of the error just
// // declared before being called such as " var b; to get undefined"
// // or "var b = true" would result in boolean for its value.
//
// // typeof a;  // result in "undefined".
// // typeof b;
//
// // // to do a safe check if it exist.
// // if (typeof abc === "undefined") {
// //     abc = function () {
//
// //     }
// // }
//
// if (window) {
// 	///
// }
//
// function dosomething() {
// 	var helper =
// 		(typeof featurexyz !== "undefined");
// 	featurexyz :
// 		function fdfd() {
// 			//// default feature here
// 		}
// 	var val = helper();
// }
//
// //// the function check for a variable called
// //// featurexyz if found use it if not dont use it
//
// /// an iife can be created this function which is called
// // "immediately invoked function expression"
//
// (function() {
// 	function featurexyz() {
//
// 	}
// 	function dosomething() {
// 		var helper =
// 			(typeof featurexyz !== "undefined");
// 		featurexyz :
// 			function drf() {
// 				//// default feature here
// 			}
// 		var val = helper();
// 	}
// 	dosomething();
//
// })();
//
// /* the review for this chapter of understand javascript has seven built in  types boolean, numbers,
// * string, undefined, null, objects and symbol
// * variables dont have types but the value that stored with them do
//
// // the one and only that's true
// *
// *
// number.isnan(nan);
// *
// // numbers
// *
// number.isnan(1);
// number.isnan(-2e-4);
// number.isnan(infinity);
// *
// // values not of type number
// *
// number.isnan(true);
// number.isnan(false);
// number.isnan(null);
// number.isnan("");
// number.isnan(" ");
// number.isnan("45.3");
// number.isnan("1.2e3");
// number.isnan("infinity");
// number.isnan(new date);
// number.isnan("10$");
// number.isnan("hello");
// number.isnan(undefined);
// number.isnan();
// number.isnan(function(){});
// number.isnan({});
// number.isnan([]);
// number.isnan([1]);
// number.isnan([1, 2]);
// number.isnan([true]);
//
// *
// *
// *
// *
// *
// * *
// * undefined is not the same as undeclared. undefined, for example, unassigned variables with no value will give undefined
// * undeclared is a name that was not assigned as a variable which if used typeof you will get a reference error. once
// * the name is assigned it will give "undefined". to get out of that a value would need to be assigned in which case
// * taking the typeof now would give you one of the seven built in types.
// *  */
//
//
// //-------------------------------------------------values-------------------------------------
//
// /* arrays, strings and numbers are the building block of any program there several built in value types lets try to
// * fully understand them and how to correctly use their behavior.
// *
// * javascript arrays are just containers for any type of value from string to number to object to another arrays*/
//
// var a = [1, "2", [3]]
//
//
// a.length;                // which we should end up with 3
//
// a[0] === 1;              // expect true
// a[2][0] === 3;           //expecting true because a[2] index in the array is
//                          // the array at that index and within that array
//                          // at index [0] is 3 hence true
// var j = [ ];
// a.length;
//
// j[0] = 1;
// j[1] = 2;
// a[2] = [3]
//
// a.length
//
// //arrays are numerically indexed and they are also objectd that can have strings
//
// var f = [ ];
// f[0] = 1;
// f["foobar"] = 2;
//
// f.length;
// f["foobar"];
// f.foobar;
//
// //use objects for holding values in keys/properties and use array to store numerically
// // indexed values.
//
// function foo() {
// 	var arr = array.prototype.slice.call( arguments );
// 	var number = arr.push("bam");
// 	console.log( arr );
// }
// foo( "bar", "baz" );
//
// // by using the slice() method/utility y against the value if slice is called without
// // a parameter the default values can end up duplicating an array-like objects
//
// // theres also a built in method/utility called array.from( ) that can do the same thing.
//
// // var arr = array.from(arguments);  // as seen above
// var bigarr = array.from("something");
// console.log(bigarr)                 //expected result breaking down the string "something" into an array-like looking
// 									// like so. ["s", "o", "m", "e", "t", "h", "i", "n", "g"]
//
//
//
//
//
//
// ///strings----------------------
//
// /*javascript strings are immutable which means that it not changeable while arrays are mutable the reason for that is
// * string and array both seems alike both has an indexof() method, a .length property, and the concat() method.
// * immutable string cannot use any of the  string methods to change values in place but instead has to to be created
// * and returned the new string. arrays has many methods that can modify it in place.*/
//
// // many of the array method are not available to strings even though they
// // feel and act alike each other but by using the nonmutation array methods thats available
// // we borrow they effects.
//
//
// a = "good";
// b = "good";
//
// var c = array.prototype.join.call(a, "-")
//
// // console.log(c);
//
// var d = array.prototype.map.call(a, function(x) {
// 	return x.touppercase() + " * ";                  // result ["g,", "o,", "o,", "d,"]
// });                                                 // without using join()
//
//
//
// console.log(d);
//
// var d = array.prototype.map.call(a, function(x) {
// 	return x.touppercase() + " * ";                 //.join() gives you an output of
// }).join();                                          // g * ,o * ,o * ,d *
//
//
// // numbers------------------
//
// // number values can be boxed with the number object wrapper and number values
// // can access built in methods "tofixed()"
//
// var a = 50;
//
// a.tofixed(1); // "50"
// a.tofixed(2); // "50.00" two decimal points.
// a.tofixed(3); // "50.000" three decimal points.
//
//
//
//
// // the output of tofixed() method though has an output of the numbers within string.
//
// var a = 42.59;
// a.toprecision( 1 ); // "4e+1"
// a.toprecision( 2 ); // "43"
// a.toprecision( 3 ); // "42.6"
// a.toprecision( 4 ); // "42.59"
// a.toprecision( 5 ); // "42.590"
// a.toprecision( 6 ); // "42.5900"
//
//
// var a = 29.34;
// a.toprecision( 1 ); // "3e+1"
// a.toprecision( 2 ); // "29"
// a.toprecision( 3 ); // "29.2"        // by using toprecision(3) thats when the value .0 decimal place
// a.toprecision( 4 ); // "29.24"
// a.toprecision( 5 ); // "29.240"
// a.toprecision( 3 ); // "29.2400"
//
// /* tofixed as can see above is similar behavior to toprecision for example both shoots out
// strings for they output*/
//
// // 50.tofixed(3); this would give you a syntaxerror: invalid or unexpected token.
//
// (50).tofixed(3);      // is a valid syntax, the previous code has the number in front " . "
//                       // from ".tofixed()" would gives a token error. by adding parentheses to
//                       // the number would makes it valid so does decimal points and adding
// 50..tofixed(3);           // another " . " in front of " .tofixed() " would also makes it valid
//
// 0.1 + 0.2 === 0.3;  // false because these numbers are not actually equal so when added
//                     // the result is not really 0.3
//
//
// //-----------------------------------------------------------------// data types
//
//
//
//
// // in an example :
// // 	var a = 1;
// // var b = a++;
// // var c = ++a
// //
// // in the first line the variable “ a ” holds  or if you prefer contain a value of “ 1 ” pretty simple enough and
// // variable “ b ” with the value of  “ a++ ” for post increment , the “ ++ “ operator  acts as a counter where “ b ”
// // end up having with a value of  “  1  “   as the initial “  var a = 1  ” keeping  the count in variable “ b “ .
// // even if the number changes.
// //
// // 	var a = 2;        // initial value
// //
// // var b = a++;  // b = 2  and a = 3  for further  clarity  if  “ a++ ”  execute one more time it would
// // results  for   b = 3   and   a = 4.  if this was  going on in a loop 4 would be outside of
// //               // the loop and not be counted.
// //
// // for the variable  “ c “ with the pre increment , it  does not behave the same way as “ b “  by keeping count of the
// // past value of “ a ++“  which was “ 1 “. variable “ c “ becomes evenly match with the same value as pre increment of
// // “ ++a “
// //
// // var c = ++a     //   when log this value we can see  “ c “  would equals the value of “ 3 “.  from the data
// // //  above where “ a = 1  “ post increment . when “ b = a++ “  the variable “ b “ has a new    value of “ 1 “
// // and not  “ 2  “.  in an    another sense, any variable with a post increment (var  name = value ++)  would always
// // end up with  a  gap i think tortoise and hare is a good example the hare is (hare ++) would always
// // leave “ var tortoise ” behind a certain gap, and the platform for that gap is the initial value that was set up
// // before the increment starts.
//
//
// var d = `hello`;
// var e = false;
//
// d++;  // the value that's in the variable " d " is a string since " ++ " is an increment operator of numbers result in
// // (d++)
//
//
// e++; // this interestingly ended being 0 " var e " value is the boolean false which translate in computer language
// // in 1s and 0s so true is " 1 " and false is " 0 "
//
// /// (side notes to me) ;; its amazing how everything that deals with tech bogs down to ones and zeros. all this complex
// /// creation like electronics is just one 1s and 0s. one needs to take a good moment to understand that. we got to this point
// // based on two numbers hahaha one odd one even hahaha true and false, makes me wonder what about the other types that
// // has a counter part such as left and right, up and down , i think it might be possible in the future.
// // left might be "1" and right might be "0", up is "1" and down "0". its not possible now since we still programming
// // as if we not living in 3d but on a flat 2d paper plane. its amusing really. note end
//
//
//
//
//
//
//
//
//
//
//
// var a = 0.1 + 0.2;
// var b = 0.3;
//
// numhercloseenoughtoequal(a, b);
//
//
//
//
//
// function numhercloseenoughtoequal(n1, n2) {
// 	return math.abs(n1 -n2) < number.epsilon;
// }
//
// numhercloseenoughtoequal(0.5, 0.5);    // this end up being true as well.
//
// x = 0.2;
// y = 0.3;
// z = 0.1;
//
// equal = (math.abs(x - y + z) < number.epsilon);    // this code end up being true.
//
// equal = (math.abs(y - z === x) < number.epsilon);  // and this one works as well
//
// // so in order to get decimals,  add the "number.epsilon" property. that property
// //used to compare the two numbers.
//
//
// //to test wether a value is an integer
//
// number.isinteger(36);   // it appears that whole numbers result in true. while number
//                         // with decimals result in false but values like
//                         // "number.isinteger(36.00)" would result to be true.
//
//
// //theres another method called "number.issafeinteger()"";
//
// number.issafeinteger(35.01);     // just like number.isinteger decimal that is above .00
//                                  // will be false.
//
//
// //special values-------
//
// // js also has special values such as "undefined" type which only has one value and thats
// // "undefined". another special value is "null" type were its value is "null".
//
//
// // we can look at "null" is an empty value and "undefined" is a missing value
// // null is a lack of existence and undefined hasn't had a value yet.
//
//
// //-----void operator
// /*"undefined" is a js built in identifier*/
//
//
// var a = 42;
//
// console.log(void a, a);  // by using void it voids out any value and its always undefined
//                          // the existing value doesnt change but ensures that no value
//                          //  comes back from the operator expression
//
//
// // the not number "nan" stands for "not a number" its a very special value in that its never
// // equal to another nan value.
//
// var a = 2 / "hue";
// var b = "hue";
//
// // to safely check nan values
//
// if (!number.isnan) {
// 	number.isnan = function(n) {
// 		return ( typeof n === "number" && window.isnan(n) );
// 	};
// }
//
// number.isnan(b)
//
// //-----------------------------------------if/else/for------------------------------
//
// var hour = 10;
//
// if (hour >= 6 && hour < 12) {
// 	console.log("good morning");
// } else console.log("good afternoon.")
//
//
// // let b = 0;
// // let c = 15;
// //
// //
// // checkbandc:
// // 	while(b < 4) {
// // 		console.log(b);
// // 		b++;
// // 		checkc:
// // 			while (c > 4) {
// // 				console.log(c);
// // 				c--;
// // 				if ( c % 2 === 0) {
// // 					continue checkc;
// // 				}
// // 				console.log(c + " is odd.")
// // 			}
// // 		console.log('b = ' + b);
// // 		console.log('c = ' + c);
// //
// // 	}
//
//
// function cutend(str, num) {
// 	if( typeof str !== "string" && typeof num !== "number") {
// 		return false;
// 	} else {
// 		var nstr = str.substr(0, str.length - num)
// 	}
// 	return nstr;
// }
//
//
// cutend("superman", 0)
//
//
// // function reversesign(num) {
// //     if (typeof num !== "number") {
// // 		return false;
// // 	}
// //     if (math.sign(number(num) === 1)
// // 	    -math.abs(num);
// // 	}
//
//
// // }
//
// //     if (math.sign(number(num) === 1)
// // 	   return -math.abs(num);
// // 	} else {
// // 		return math.abs(num)
//
// // 	}
//
//
// // console.log(reversesign("1"))
//
//
//
//
//
//
//
//
//
//
//
//
//
// //-------------------------------------------------object literal------------------------------
//
// const apartment = {
// 	doornumber: "204",
// 	room: "3",
// 	bath: "2",
// 	address: {
// 		street: "385 main st.",
// 		city: "dinar",
// 		state: "tx",
// 		zip: "76358"
// 	}
// };
//
// // update the value iin an object can be updated by assignment, if the prop name exist.
//
// // document.write(apartment.address.street = "124 money st.");
//
//
// console.log(apartment.room = "5");
//
//
// console.log(apartment.address.city = "austin");
//
// // if the object does not have that property name, that property is added to the
// // object.
//
// // object are passed as reference they never copied.
//
// var x = apartment;
// x.bath = "4";
//
// var bathupdate =  apartment.bath;
//
// document.writeln(bathupdate);
//
//
//
// var a = {}, b = {}, c = {};
// //	      a, b, c each refer to  a different object.
//
// a = b = c = {};
//
// //   a, b, c all refer to the same empty object
//
//
// // ---------------------------------------------function------------------------------
//
// /* functions are objects ::: functions can be stored in variables, objects, and array*
// function can pass as arguments to function and function can be returned from a function.*/
//
// // the function in add is called an anonymous function.
//
// var add = function (a, b) {
// 	return a + b;
// };
//
//
//
// console.log(add(4, 5));
//
// // a method is when a function is stored as a property of an object.
//
// /*the example below the log is showing undefined*/
//
// const myobject = {
// 	value: 0,
// 	increment: function (inc) {
// 		this.value += typeof inc === "number" ? inc : 1;
// 	}
// };
//
//
// myobject.increment(1);
// document.writeln((myobject.increment(1)));    // 1
//
// myobject.increment(2);
// console.log(document.writeln(myobject.increment(2)));     // 3
//
//
// /// arguments
//
// const sum = function () {
// 	let i, sum = 0;
// 	for (i = 0; i  <  arguments.length; i++) {
// 		sum += arguments[i];
// 	}
// 	return sum;
// }
//
// document.writeln(sum(3, 3, 5, 5, 6,)); // 22
//
// /// exceptions
//
// const addfunc = function (a, b) {
// 	if (typeof a !== "number" || typeof b !== "number") {
// 		throw {
// 			name: "type error",         // <----- was missing the comma.
// 			message: "addfunc needs numbers."  /// uncaught syntaxerror: unexpected identifier.
// 		};
// 	}
// 	return a + b;
// }
//
// document.writeln(addfunc(2, 3));
//
//
// var personarr = [
// 	{
// 		"personid": 123,
// 		"name": "jhon",
// 		"city": "melbourne", "phoneno": "1234567890"
// 	},
// 	{
// 		"personid": 124,
// 		"name": "amelia", "city": "sydney", "phoneno": "1234567890"
// 	},
// 	{
// 		"personid": 125,
// 		"name": "emily",
// 		"city": "perth", "phoneno": "1234567890"
// 	},
// 	{
// 		"personid": 126,
// 		"name": "abraham", "city": "perth", "phoneno": "1234567890"
// 	}
// ];
// console.table(personarr, ['name', 'personid']);
//
// // the example above log a table with the property and value in console.
//
// // using instanceof
//
// function sumarg(...arguments)  {
// 	if (arguments === 1) {
// 		const [firstarg] = arguments;
// 		if (firstarg instanceof array) {
// 			return sumarg(...firstarg)
// 		}
// 	}
// 	return arguments.reduce((a, b) => a + b)
// }
//
// sumarg(45, 34, 56)
//
// //null.constructor and undefined.constructor throw an error when accessed
//
// function isnumber(value) {
// 	if (value === null || value === undefined) return false
// 	return value.constructor === number
// }
//
//
// console.log(isnumber(undefined), isnumber([]), isnumber(() => 1), isnumber(0))
//
//
// var objectatring = new string("money is ll i ned in thid momnt=");
//
// typeof objectatring;
//
// typeof objectatring.valueof()
//
// // mentioned that this method does not always works
//
// function reversestring(str) {
// 	return str.split("").reverse().join("");
// }
//
//
// reversestring("something like this works just fine")
//
// //
//
// function reversestring(str) {
// 	return [...string(str)].reverse().join("");
// }
//
//
// reversestring([1, 2, 3, 4, 5])
//
// function reversestring(...arguments) {
// 	return [...string(...arguments)].reverse().join("");
// }
//
// reversestring(157858890, 4858584)
//
// function reverse(something) {
// 	return [...string(something)].reverse().join("");
// }
//
// reversestring("reload devtools");
//
// // another example of reversing strings
//
// function reverse(string) {
// 	var strrev = "";
// 	for(var i = string.length - 1; i >= 0; i--) {
// 		strrev += string[i];
// 	}
// 	return strrev;
// }
//
//
// reverse("something or other");
//
// //to compare strings alphabetically, use localecompare(). this returns a negative
// //value if the reference string is lexicographically (alphabetically) before the
// //compared string (the parameter), a positive value if it comes afterwards, and a
// //value of 0 if they are equal.
//
// function check(a , b) {
// 	if (a === b) {
// 		return 0;
// 	}
// 	if (a > b) {
// 		return 1;
// 	}
// 	return -1
// }
//
//
//
// var arr = ["durie", "bannan", "korosol"];
// arr.sort(function(a,b) {
// 	return a.localecompare(b);
// })
//
// /// rearrange the array in alphabetically.
//
// console.log(arr);
//
//
// // word counter
//
// function wordcount(val) {
// 	var wom = val.match(/\s+/g);
// 	return {
// 		charactersnospace : val.replace(/\s+/g, "").length,
// 		character         : val.length,
// 		words             : wom ? wom.length : 0,
// 		lines             : val.split(/\r*\n/).length
// 	};
// }
//
// wordcount("something did happen",
// 	"the does this works as well") //nope
//
// wordcount("this can be multiple line of text to count the key of the object")
//
//
// console.log("test");
//
// document.writeln("hello world");
//
// /*variable names are used for statements, variables, parameters,
// property names, operators, and labels.*/
//
// /*the (&&) or "and" operator produces the value of its first operand
// * if the first operand is falsy. otherwise, it produces the value of
// * the second operand
// *
// * the (||) or (or) operator produces the value of its operand if
// * the first operand is truthy. otherwise, its produces the value of the
// * second operand.*/
//
// // there are 6 object literals that is known right now they as follow
// // number literal, string literal, object literal, array literal,
// // function literal, and regexp literal.
//
//
//
// function d (b, c) {
// 	/*--------*/
// }
//
// a.length
//
//
// function d(a, b) {
// 	//the body of the function
// }
//
// // function object has a length property to the number of parameters.
//
// d.length
//
// // and using the length property i see the outcome to be as expected which is two
// // as in a, b
//
//
// //typeof [1, 2, 3] === "object"
//
//
//
//
//
// var e = 87;
//
// // (typeof variable) by itself will end up being "undefined"
// // but if it has a value then it identify the type of the value
// // stored in the variable.
//
//
// typeof e;  // result "number";
//
// e = true;
//
// typeof e;  // the result "boolean"
//
// e = null;
//
// typeof e;  // the result "object"
//
// e = "win";
//
// typeof e;  // the result "string"
//
// // typeof variable;
//
//
// // var a;
//
// // a;
// // b;
//
// /// "var a" once execute we would expect "undefined"
// /// but b" on the other hand didnt get declared so the brower would
// //  gives a reference error, in order to get rid of the error just
// // declared before being called such as " var b; to get undefined"
// // or "var b = true" would result in boolean for its value.
//
// // typeof a;  // result in "undefined".
// // typeof b;
//
// // // to do a safe check if it exist.
// // if (typeof abc === "undefined") {
// //     abc = function () {
//
// //     }
// // }
//
// if (window) {
// 	///
// }
//
// function dosomething() {
// 	var helper =
// 		(typeof featurexyz !== "undefined");
// 	featurexyz :
// 		function fdfd() {
// 			//// default feature here
// 		}
// 	var val = helper();
// }
//
// //// the function check for a variable called
// //// featurexyz if found use it if not dont use it
//
// /// an iife can be created this function which is called
// // "immediately invoked function expression"
//
// (function() {
// 	function featurexyz() {
//
// 	}
// 	function dosomething() {
// 		var helper =
// 			(typeof featurexyz !== "undefined");
// 		featurexyz :
// 			function drf() {
// 				//// default feature here
// 			}
// 		var val = helper();
// 	}
// 	dosomething();
//
// })();
//
// /* the review for this chapter of understand javascript has seven built in  types boolean, numbers,
// * string, undefined, null, objects and symbol
// * variables dont have types but the value that stored with them do
//
// // the one and only that's true
// *
// *
// number.isnan(nan);
// *
// // numbers
// *
// number.isnan(1);
// number.isnan(-2e-4);
// number.isnan(infinity);
// *
// // values not of type number
// *
// number.isnan(true);
// number.isnan(false);
// number.isnan(null);
// number.isnan("");
// number.isnan(" ");
// number.isnan("45.3");
// number.isnan("1.2e3");
// number.isnan("infinity");
// number.isnan(new date);
// number.isnan("10$");
// number.isnan("hello");
// number.isnan(undefined);
// number.isnan();
// number.isnan(function(){});
// number.isnan({});
// number.isnan([]);
// number.isnan([1]);
// number.isnan([1, 2]);
// number.isnan([true]);
//
// *
// *
// *
// *
// *
// * *
// * undefined is not the same as undeclared. undefined, for example, unassigned variables with no value will give undefined
// * undeclared is a name that was not assigned as a variable which if used typeof you will get a reference error. once
// * the name is assigned it will give "undefined". to get out of that a value would need to be assigned in which case
// * taking the typeof now would give you one of the seven built in types.
// *  */
//
//
// //-------------------------------------------------values-------------------------------------
//
// /* arrays, strings and numbers are the building block of any program there several built in value types lets try to
// * fully understand them and how to correctly use their behavior.
// *
// * javascript arrays are just containers for any type of value from string to number to object to another arrays*/
//
// var a = [1, "2", [3]]
//
//
// a.length;                // which we should end up with 3
//
// a[0] === 1;              // expect true
// a[2][0] === 3;           //expecting true because a[2] index in the array is
//                          // the array at that index and within that array
//                          // at index [0] is 3 hence true
// var j = [ ];
// a.length;
//
// j[0] = 1;
// j[1] = 2;
// a[2] = [3]
//
// a.length
//
// //arrays are numerically indexed and they are also objectd that can have strings
//
// var f = [ ];
// f[0] = 1;
// f["foobar"] = 2;
//
// f.length;
// f["foobar"];
// f.foobar;
//
// //use objects for holding values in keys/properties and use array to store numerically
// // indexed values.
//
// function foo() {
// 	var arr = array.prototype.slice.call( arguments );
// 	var number = arr.push("bam");
// 	console.log( arr );
// }
// foo( "bar", "baz" );
//
// // by using the slice() method/utility y against the value if slice is called without
// // a parameter the default values can end up duplicating an array-like objects
//
// // theres also a built in method/utility called array.from( ) that can do the same thing.
//
// // var arr = array.from(arguments);  // as seen above
// var bigarr = array.from("something");
// console.log(bigarr)                 //expected result breaking down the string "something" into an array-like looking
//                                     // like so. ["s", "o", "m", "e", "t", "h", "i", "n", "g"]
//
//
//
//
//
//
// ///strings----------------------
//
// /*javascript strings are immutable which means that it not changeable while arrays are mutable the reason for that is
// * string and array both seems alike both has an indexof() method, a .length property, and the concat() method.
// * immutable string cannot use any of the  string methods to change values in place but instead has to to be created
// * and returned the new string. arrays has many methods that can modify it in place.*/
//
// // many of the array method are not available to strings even though they
// // feel and act alike each other but by using the nonmutation array methods thats available
// // we borrow they effects.
//
//
// a = "good";
// b = "good";
//
// var c = array.prototype.join.call(a, "-")
//
// // console.log(c);
//
// var d = array.prototype.map.call(a, function(x) {
// 	return x.touppercase() + " * ";                  // result ["g,", "o,", "o,", "d,"]
// });                                                 // without using join()
//
//
//
// console.log(d);
//
// var d = array.prototype.map.call(a, function(x) {
// 	return x.touppercase() + " * ";                 //.join() gives you an output of
// }).join();                                          // g * ,o * ,o * ,d *
//
//
// // numbers------------------
//
// // number values can be boxed with the number object wrapper and number values
// // can access built in methods "tofixed()"
//
// var a = 50;
//
// a.tofixed(1); // "50"
// a.tofixed(2); // "50.00" two decimal points.
// a.tofixed(3); // "50.000" three decimal points.
//
//
//
//
// // the output of tofixed() method though has an output of the numbers within string.
//
// var a = 42.59;
// a.toprecision( 1 ); // "4e+1"
// a.toprecision( 2 ); // "43"
// a.toprecision( 3 ); // "42.6"
// a.toprecision( 4 ); // "42.59"
// a.toprecision( 5 ); // "42.590"
// a.toprecision( 6 ); // "42.5900"
//
//
// var a = 29.34;
// a.toprecision( 1 ); // "3e+1"
// a.toprecision( 2 ); // "29"
// a.toprecision( 3 ); // "29.2"        // by using toprecision(3) thats when the value .0 decimal place
// a.toprecision( 4 ); // "29.24"
// a.toprecision( 5 ); // "29.240"
// a.toprecision( 3 ); // "29.2400"
//
// /* tofixed as can see above is similar behavior to toprecision for example both shoots out
// strings for they output*/
//
// // 50.tofixed(3); this would give you a syntaxerror: invalid or unexpected token.
//
// (50).tofixed(3);      // is a valid syntax, the previous code has the number in front " . "
//                       // from ".tofixed()" would gives a token error. by adding parentheses to
//                       // the number would makes it valid so does decimal points and adding
// 50..tofixed(3);           // another " . " in front of " .tofixed() " would also makes it valid
//
// 0.1 + 0.2 === 0.3;  // false because these numbers are not actually equal so when added
//                     // the result is not really 0.3
//
//
// //-----------------------------------------------------------------// data types
//
//
//
//
// // in an example :
// // 	var a = 1;
// // var b = a++;
// // var c = ++a
// //
// // in the first line the variable “ a ” holds  or if you prefer contain a value of “ 1 ” pretty simple enough and
// // variable “ b ” with the value of  “ a++ ” for post increment , the “ ++ “ operator  acts as a counter where “ b ”
// // end up having with a value of  “  1  “   as the initial “  var a = 1  ” keeping  the count in variable “ b “ .
// // even if the number changes.
// //
// // 	var a = 2;        // initial value
// //
// // var b = a++;  // b = 2  and a = 3  for further  clarity  if  “ a++ ”  execute one more time it would
// // results  for   b = 3   and   a = 4.  if this was  going on in a loop 4 would be outside of
// //               // the loop and not be counted.
// //
// // for the variable  “ c “ with the pre increment , it  does not behave the same way as “ b “  by keeping count of the
// // past value of “ a ++“  which was “ 1 “. variable “ c “ becomes evenly match with the same value as pre increment of
// // “ ++a “
// //
// // var c = ++a     //   when log this value we can see  “ c “  would equals the value of “ 3 “.  from the data
// // //  above where “ a = 1  “ post increment . when “ b = a++ “  the variable “ b “ has a new    value of “ 1 “
// // and not  “ 2  “.  in an    another sense, any variable with a post increment (var  name = value ++)  would always
// // end up with  a  gap i think tortoise and hare is a good example the hare is (hare ++) would always
// // leave “ var tortoise ” behind a certain gap, and the platform for that gap is the initial value that was set up
// // before the increment starts.
//
//
// var d = `hello`;
// var e = false;
//
// d++;  // the value that's in the variable " d " is a string since " ++ " is an increment operator of numbers result in
// // (d++)
//
//
// e++; // this interestingly ended being 0 " var e " value is the boolean false which translate in computer language
// // in 1s and 0s so true is " 1 " and false is " 0 "
//
// /// (side notes to me) ;; its amazing how everything that deals with tech bogs down to ones and zeros. all this complex
// /// creation like electronics is just one 1s and 0s. one needs to take a good moment to understand that. we got to this point
// // based on two numbers hahaha one odd one even hahaha true and false, makes me wonder what about the other types that
// // has a counter part such as left and right, up and down , i think it might be possible in the future.
// // left might be "1" and right might be "0", up is "1" and down "0". its not possible now since we still programming
// // as if we not living in 3d but on a flat 2d paper plane. its amusing really. note end
//
//
//
//
//
//
//
//
//
//
//
// var a = 0.1 + 0.2;
// var b = 0.3;
//
// numhercloseenoughtoequal(a, b);
//
//
//
//
//
// function numhercloseenoughtoequal(n1, n2) {
// 	return math.abs(n1 -n2) < number.epsilon;
// }
//
// numhercloseenoughtoequal(0.5, 0.5);    // this end up being true as well.
//
// x = 0.2;
// y = 0.3;
// z = 0.1;
//
// equal = (math.abs(x - y + z) < number.epsilon);    // this code end up being true.
//
// equal = (math.abs(y - z === x) < number.epsilon);  // and this one works as well
//
// // so in order to get decimals,  add the "number.epsilon" property. that property
// //used to compare the two numbers.
//
//
// //to test wether a value is an integer
//
// number.isinteger(36);   // it appears that whole numbers result in true. while number
//                         // with decimals result in false but values like
//                         // "number.isinteger(36.00)" would result to be true.
//
//
// //theres another method called "number.issafeinteger()"";
//
// number.issafeinteger(35.01);     // just like number.isinteger decimal that is above .00
//                                  // will be false.
//
//
// //special values-------
//
// // js also has special values such as "undefined" type which only has one value and thats
// // "undefined". another special value is "null" type were its value is "null".
//
//
// // we can look at "null" is an empty value and "undefined" is a missing value
// // null is a lack of existence and undefined hasn't had a value yet.
//
//
// //-----void operator
// /*"undefined" is a js built in identifier*/
//
//
// var a = 42;
//
// console.log(void a, a);  // by using void it voids out any value and its always undefined
//                          // the existing value doesnt change but ensures that no value
//                          //  comes back from the operator expression
//
//
// // the not number "nan" stands for "not a number" its a very special value in that its never
// // equal to another nan value.
//
// var a = 2 / "hue";
// var b = "hue";
//
// // to safely check nan values
//
// if (!number.isnan) {
// 	number.isnan = function(n) {
// 		return ( typeof n === "number" && window.isnan(n) );
// 	};
// }
//
// number.isnan(b)
//
// //-----------------------------------------if/else/for------------------------------
//
// var hour = 10;
//
// if (hour >= 6 && hour < 12) {
// 	console.log("good morning");
// } else console.log("good afternoon.")
//
//
// // let b = 0;
// // let c = 15;
// //
// //
// // checkbandc:
// // 	while(b < 4) {
// // 		console.log(b);
// // 		b++;
// // 		checkc:
// // 			while (c > 4) {
// // 				console.log(c);
// // 				c--;
// // 				if ( c % 2 === 0) {
// // 					continue checkc;
// // 				}
// // 				console.log(c + " is odd.")
// // 			}
// // 		console.log('b = ' + b);
// // 		console.log('c = ' + c);
// //
// // 	}
//
//
// function cutend(str, num) {
// 	if( typeof str !== "string" && typeof num !== "number") {
// 		return false;
// 	} else {
// 		var nstr = str.substr(0, str.length - num)
// 	}
// 	return nstr;
// }
//
//
// cutend("superman", 0)
//
//
// // function reversesign(num) {
// //     if (typeof num !== "number") {
// // 		return false;
// // 	}
// //     if (math.sign(number(num) === 1)
// // 	    -math.abs(num);
// // 	}
//
//
// // }
//
// //     if (math.sign(number(num) === 1)
// // 	   return -math.abs(num);
// // 	} else {
// // 		return math.abs(num)
//
// // 	}
//
//
// // console.log(reversesign("1"))
//
//
//
//
//
//
//
//
//
//
//
//
//
// //-------------------------------------------------object literal------------------------------
//
// const apartment = {
// 	doornumber: "204",
// 	room: "3",
// 	bath: "2",
// 	address: {
// 		street: "385 main st.",
// 		city: "dinar",
// 		state: "tx",
// 		zip: "76358"
// 	}
// };
//
// // update the value iin an object can be updated by assignment, if the prop name exist.
//
// // document.write(apartment.address.street = "124 money st.");
//
//
// console.log(apartment.room = "5");
//
//
// console.log(apartment.address.city = "austin");
//
// // if the object does not have that property name, that property is added to the
// // object.
//
// // object are passed as reference they never copied.
//
// var x = apartment;
// x.bath = "4";
//
// var bathupdate =  apartment.bath;
//
// document.writeln(bathupdate);
//
//
//
// var a = {}, b = {}, c = {};
// //	      a, b, c each refer to  a different object.
//
// a = b = c = {};
//
// //   a, b, c all refer to the same empty object
//
//
// // ---------------------------------------------function------------------------------
//
// /* functions are objects ::: functions can be stored in variables, objects, and array*
// function can pass as arguments to function and function can be returned from a function.*/
//
// // the function in add is called an anonymous function.
//
// var add = function (a, b) {
// 	return a + b;
// };
//
//
//
// console.log(add(4, 5));
//
// // a method is when a function is stored as a property of an object.
//
// /*the example below the log is showing undefined*/
//
// const myobject = {
// 	value: 0,
// 	increment: function (inc) {
// 		this.value += typeof inc === "number" ? inc : 1;
// 	}
// };
//
//
// myobject.increment(1);
// document.writeln((myobject.increment(1)));    // 1
//
// myobject.increment(2);
// console.log(document.writeln(myobject.increment(2)));     // 3
//
//
// /// arguments
//
// const sum = function () {
// 	let i, sum = 0;
// 	for (i = 0; i  <  arguments.length; i++) {
// 		sum += arguments[i];
// 	}
// 	return sum;
// }
//
// document.writeln(sum(3, 3, 5, 5, 6,)); // 22
//
// /// exceptions
//
// const addfunc = function (a, b) {
// 	if (typeof a !== "number" || typeof b !== "number") {
// 		throw {
// 			name: "type error",         // <----- was missing the comma.
// 			message: "addfunc needs numbers."  /// uncaught syntaxerror: unexpected identifier.
// 		};
// 	}
// 	return a + b;
// }
//
// document.writeln(addfunc(2, 3));
//
//
// var personarr = [
// 	{
// 		"personid": 123,
// 		"name": "jhon",
// 		"city": "melbourne", "phoneno": "1234567890"
// 	},
// 	{
// 		"personid": 124,
// 		"name": "amelia", "city": "sydney", "phoneno": "1234567890"
// 	},
// 	{
// 		"personid": 125,
// 		"name": "emily",
// 		"city": "perth", "phoneno": "1234567890"
// 	},
// 	{
// 		"personid": 126,
// 		"name": "abraham", "city": "perth", "phoneno": "1234567890"
// 	}
// ];
// console.table(personarr, ['name', 'personid']);
//
// // the example above log a table with the property and value in console.
//
// // using instanceof
//
// function sumarg(...arguments)  {
// 	if (arguments === 1) {
// 		const [firstarg] = arguments;
// 		if (firstarg instanceof array) {
// 			return sumarg(...firstarg)
// 		}
// 	}
// 	return arguments.reduce((a, b) => a + b)
// }
//
// sumarg(45, 34, 56)
//
// //null.constructor and undefined.constructor throw an error when accessed
//
// function isnumber(value) {
// 	if (value === null || value === undefined) return false
// 	return value.constructor === number
// }
//
//
// console.log(isnumber(undefined), isnumber([]), isnumber(() => 1), isnumber(0))
//
//
// var objectatring = new string("money is ll i ned in thid momnt=");
//
// typeof objectatring;
//
// typeof objectatring.valueof()
//
// // mentioned that this method does not always works
//
// function reversestring(str) {
// 	return str.split("").reverse().join("");
// }
//
//
// reversestring("something like this works just fine")
//
// //
//
// function reversestring(str) {
// 	return [...string(str)].reverse().join("");
// }
//
//
// reversestring([1, 2, 3, 4, 5])
//
// function reversestring(...arguments) {
// 	return [...string(...arguments)].reverse().join("");
// }
//
// reversestring(157858890, 4858584)
//
// function reverse(something) {
// 	return [...string(something)].reverse().join("");
// }
//
// reversestring("reload devtools");
//
// // another example of reversing strings
//
// function reverse(string) {
// 	var strrev = "";
// 	for(var i = string.length - 1; i >= 0; i--) {
// 		strrev += string[i];
// 	}
// 	return strrev;
// }
//
//
// reverse("something or other");
//
// //to compare strings alphabetically, use localecompare(). this returns a negative
// //value if the reference string is lexicographically (alphabetically) before the
// //compared string (the parameter), a positive value if it comes afterwards, and a
// //value of 0 if they are equal.
//
// function check(a , b) {
// 	if (a === b) {
// 		return 0;
// 	}
// 	if (a > b) {
// 		return 1;
// 	}
// 	return -1
// }
//
//
//
// var arr = ["durie", "bannan", "korosol"];
// arr.sort(function(a,b) {
// 	return a.localecompare(b);
// })
//
// /// rearrange the array in alphabetically.
//
// console.log(arr);
//
//
// // word counter
//
// function wordcount(val) {
// 	var wom = val.match(/\s+/g);
// 	return {
// 		charactersnospace : val.replace(/\s+/g, "").length,
// 		character         : val.length,
// 		words             : wom ? wom.length : 0,
// 		lines             : val.split(/\r*\n/).length
// 	};
// }
//
// wordcount("something did happen",
// 	"the does this works as well") //nope
//
// wordcount("this can be multiple line of text to count the key of the object");
//


//
//
//
//
//




/// The object person has properties and methods inside the function code

function person(firstname, lastname, make, model, year, miles) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.make = make;
    this.model = model;
    this.year = year;
    this,miles = miles;
    console.log("yes");

}

// Using prototype we can add new properties to the person prototype

person.prototype.getFullName = function() {
    return this.firstname + " " + this.lastname;
}

// The variable Mark creates a new object that pass the arguments of the original function of person

var mark = new person(
    "Mark",
    "Luke", 
    "Chevrolet", 
    "Silverado", 
    "2015", 
    "50,000"
    );

 console.log(mark);
 console.log(mark.getFullName())

 // By logging line 1605 we get the properties of using this.(property)


 // and below we have the new property added the prototype of person with getFormalName
 person.prototype.getFormalName = function () {
     return this.lastname + ", " + this.firstname;
 }

 console.log(mark.getFormalName());

person.prototype.getMakeAndModel = function () {
    return this.make + " and the model is a " + this.model
}

var male = person.prototype.sex = function (sex) {
   return "male";
}

console.log(mark.getMakeAndModel(), mark.sex(" is also a male") )

person.prototype.DOB = function (DOB) {
    return "Mr " + mark.getFormalName() + " is a " + mark.sex(male) + ", was born on " + DOB + " and owns a " + this.getMakeAndModel()+ ".";
}


console.table(mark.DOB("09/11/1986"));

//Have the basic understand of having using a function to call a function that acts as a factory

// function whendone(callback) {
//     callback()
// }


// whendone(function() {
//     console.log("dine");
// })

// whendone(function() {
//     console.log("All done");
// })

// whendone(function() {
//     console.log("Loki");
// })



var person = {
    firstname: "May",
    lastname: "kay",
    getFullName: function() {
        var fullname = this.firstname + " " + this.lastname;
        return fullname;
    }
}

var logName = function(lang1,lang2) {
    console.log("Logged: " + this.getFullName())
}.bind(person)


logName()

// Funtional Programming

// first calss functions are functions that behave like object

var arr1 = [1, 2, 3];

var arr2 = [];

for (var i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i] * 2);
}

console.log(arr2)


function mapForEach(arr, func) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        newArray.push(
            func(arr[i])
        );
    }
    return newArray;
}


var arr3 = mapForEach( arr1, function(item) {
    return item * 2;
});

console.log(arr3)

var arr4 = ["dvarlot", "lucas", "Mandy" , "Joek"];

function mapForEach2(arr, func) {
    var newArray = [];
    for(var i = 0; i < arr.length; i++) {
        newArray.push(
            func(arr[i])
        )
    }
    return newArray;
}

var arr5 = mapForEach2(arr4, function(item) {
    return item.toUpperCase().slice(0, 1)
})


var checkPastLiimit = function(limiter, item) {
    return item > limiter;
}

console.log(arr5);

var limit = function(limiter) {
    return function(limiter, item) {
        return item > limiter;
}.bind(this, limiter)

}; 

var array = [
    {
        key: "one",
        value: 1
    }, {
        key: "two",
        value: 2
    }, {
        key: "three",
        value: 3
    }
];


array.reduce(function(obj, current) {
    obj[current.key] = current.value;
    return obj;
}, [])

console.logo(obj)












