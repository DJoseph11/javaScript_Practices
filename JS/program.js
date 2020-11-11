console.log("test");

document.writeln("Hello World");

/*variable names are used for statements, variables, parameters,
property names, operators, and labels.*/

/*THe (&&) or and operator produces the value of its first operand
* if the first opeand is falsy. Otherwise, it produces the value of
* the second operand
*
* The (||) or (or) operator produces the value of its operand if
* the first operand is truthy. Otherwise, its produces the value of the
* second operand.*/

// There are 6 object literals tha is known right now they as follow
// number literal, string literal, object lilteral, array literal,
// function literal, and regexp literal.


//Object literal

const apartment = {
	doorNumber: "204",
	room: "3",
	bath: "2",
	address: {
		street: "385 Main St.",
		city: "Montvill",
		state: "Tx",
		zip: "76358"
	}
};

document.write(apartment.address.street);





