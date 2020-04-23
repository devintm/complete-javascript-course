// Advanced JS - Section 5
// 2020 JavaScript Course


// "Ojbect literal"
var dev = {
    name: 'Devin',
    yearOfBirth: 1992,
    job: 'programmer'
};


// NOTE - A Constructor or Prototype is JavaScript is the same thing as a Python class.

// NOTE - Person prototype attribute points to Object. The Object prototype eventually points to null which has no prototype object and is the end of the "Prototype chain".

// NOTE - The prototype attribute which is an "object" is basically where the parent's and parent's parent's methods exist.




// Instansiation - Create an instance of the Person Prototype
// NOTE - it has the argument
// "function Constructor (prototype)"
var Person = function(name, yearOfBirth, job) {
    // NOTE - the end is a semi-colon and not a commas as with the literal style object above
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

// Add a function to the Prototype (Class) object
// NOTE - you must add it to the "prototype" attribute
Person.prototype.calculateAge = function() {
    console.log(2020 - this.yearOfBirth);    
}

// Set the attribute "lastName" for all of the Person prototypes
Person.prototype.lastName = 'Miller';

var john = new Person('John', 1990, 'runner');
var mary = new Person('Mary', 1971, 'teacher');
var mark = new Person('Mark', 1930, 'retired');

john.calculateAge();
mary.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(mary.lastName);
console.log(mark.lastName);

// ----------------------------------------------------------------------------
// Object.create

var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var dev = Object.create(personProto);
dev.name = 'Devin';
dev.yearOfBirth = 1991;
dev.job = 'motorcycle racer';

// NOTE - the syntax here is a little different for using Object.create(),
//   notice the "{ value: 'Mary' }," syntax
//
var jane = Object.create(personProto, {
    name: { value: 'Mary' },
    yearOfBirth: { value: 1940 },
    job: { value: 'gardener' }
});




// ----------------------------------------------------------------------------
// Primitives vs. objects

// Primitives
// NOTE - it makes a true? copy, it's not a pointer or reference
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);


// Objects
var obj1 = {
    name: 'Dev',
    city: 'Bengaluru'
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);


// Functions
var age = 21;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};
function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}
change(age, obj);

console.log(age);
console.log(obj.city);



// ----------------------------------------------------------------------------
// Lecture: Passing functions as arguments

var years = [1997, 1993, 1920, 1945, 1932];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2020 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(rates);



// ----------------------------------------------------------------------------
// Lecture: Functions returning functions


function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
// What subject do you teach, John?

designerQuestion('John');
// John, can you please explain what UX design is?

designerQuestion('jane');
// jane, can you please explain what UX design is?

designerQuestion('Mark');
// Mark, can you please explain what UX design is?

designerQuestion('Mike');
// Mike, can you please explain what UX design is?

interviewQuestion('teacher')('Mark');
// What subject do you teach, Mark?





// ----------------------------------------------------------------------------
// Lecture: IIFE

function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();


(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();
//console.log(score);

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);




// ----------------------------------------------------------------------------
// Lecture: Closures

var year = 1992;

function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(year);
retirementUS(year);
retirementIceland(year);

//retirement(66)(1990);




function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('John');


// ----------------------------------------------------------------------------
// Lecture: Bind, call and apply






