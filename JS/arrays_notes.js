// REDUCING Values

// The reduce() method applies a function against an accumulator and 
//each value of the array (from left-to-right) to reduce it to a single 
//value.

[1,2,4,4].reduce(function(a, b) {
    return a * b
})

// the above sum up the values in the array into a single value

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


// array.reduce(function(obj, current) {
//     obj[current.key] = current.value;
//     return obj;
// }, [])

// console.logo(obj)



// Map using reduce

function map(list, func) {
    return list.reduce(function(newlist, item) {
        return newlist.concat(func(item));
    },[])
}

map([1,2,3,4],function(a) {
    return a * a;
})





var arr = [1,2,3,4,-5];

arr.reduce((a, b) => { return a < b ? a : b}, Infinity);


// Finding the unique values of an array


var arr2 = ["bug", 1, 1, 2, 4, 6, "bug", 5, 6, 7, 9];

arr2.reduce((a, b) => {
    if (a.indexOf(b) === -1) {
        a.push(b);
    }
    return a;
}, [])


// reducing the array to a single value


arr.reduce((a, b) => { return a + b}, 10);


// Mapping Values

// Returning the length of each string in the array

// Different version of js for doing all mothods on each items

var arrayLength = ["one", "two", "three", "four","bannana"];

arrayLength.map(function(value, index, arr) {
    return value.length;
})

// ----

arrayLength.map(value => value.length);

arrayLength.map(function(a) {
    return a.slice(0, 1);
})



//Below is using the filter() method

// finding all the odds or evens in an array 

//5.1

arr.filter(function(n) {
    return n % 2 !== 0;
});

//6

let odd = arr.filter(n => n % 2 !== 0);

// using filter in an array of objects

var people = [{ 
    id: 1,
    name: "John",
    age: 28 
}, {
    id: 2,
    name: "Jane", 
    age: 31
}, {
    id: 3,
    name: "Peter",
    age: 55 
}];


var young = people.filter(function (person) {
    return person.age < 40;
})

console.log(young);

var searchValue = people.filter(function(obj) {
    var flag = false;
    Object.values(obj).forEach(function(val) {
        if(String(val).indexOf("J") > -1) {
            flag = true;
            return;
        }
    });
    if (flag) return obj;

})


//sorting using .sort() creates a copy of the original

// to sort the array in alphabetical order


arrayLength.sort(function(a, b) {
    return a.toString().localeCompare(b);
})

// sorting string by length the longest is first

var animals = ["zebras", "dogs", "elephants", "penguins"];

animals.sort(function(a, b) {
   return b.length - a.length; // switch to change to shortest first
});


// sorting asscending

var num = [34, 54, 3, 4, 32, 566,3,3445,3];

num.sort(function(a, b) {
    return a - b 
});


// descending order

num.sort(function(a, b) {
    return b - a;
});

// sorting an array by even or odd numbers even numbers are first.

num.sort(function(a, b) {
    return (a & 1) - (b & 1) || a - b;
});

//Array iteration


for (var i = 0;i < num.length; i++) {
    console.log(num[i]);
}

// Destructuring an array

function area(length, height) {
    return length * height / 2;
}



area(15, 57);

// Below is the way of making two array into an object with key value pair

var columns = ["Date", "Number", "Size", "Location", "Age"]; 
var rows = ["2001", "5", "Big", "Sydney", "25"];


var result = rows.reduce(function(result, field, index) {
    result[columns[index]] = field;
    return result;
}, {});

console.log(result);

// below is the same result as the one above just the property change but
// the fundamental is on how to take two arrays and make key and value pair

var gameColumns = ["Title", "Release Date", "Developer", "Console_1", "Console_2"];
var gameRows = ["Final Fantasy VII", "January 31, 1997", "Square", "Playstation", "Default"];

var gameResult = gameRows.reduce(function(gameResult, field, index) {
    gameResult[gameColumns[index]] = field;
    return gameResult;
}, {})

console.log(gameResult);

// using spread

let spreadArr = [..."183949837649"].map(x => parseInt(x)).sort( // turn into array
       // put items in array in accending order
        function(a, b) {
            return a - b;
        }
        // finding out unique values in the array and push them into a new array
    ).reduce(function(a, b) {
        if(a.indexOf(b) === -1) {
            a.push(b);
        }
        return a;
        // the new arra for result
    }, [])


console.log(spreadArr)

// above is experimenting with the spread operator to make an array out of those
// numbers string I made 


// REMOVING ELEMENTS USING SLICE

var values = [-4,-6,-2,1,2,3,4,5,6,7,4];
// the code below defining the function of i
// where the number is located is the indicator 
//of where to start to give ou the output

var i = values.indexOf(1);

// the if statement job is to make sure the items in the array only output the  
// positive numbers

if( i >= 0) {
    // the code below by splicing it that way the output is an array based on 
    // on the number of the second argument or value
    values.splice(i, 2)
}


// ADDING ELEMENTS USING SLICE

// the code below does not work
var i = values.length + 1;
console.log(values.splice(i, 0,6,7,8));

var values = [1, 2, 4, 5, 3]; 
var i = values.length + 1; 
values.splice(i, 0, 6, 7, 8);