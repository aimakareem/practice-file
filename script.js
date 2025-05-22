{
let myname=("Aima_kareem");
let age=22;
const MYNAME="AimaKareem";
console.log(myname);
console.log(age);
console.log("My name is:",MYNAME);
}

{
let name,age,degree,religion;
name="Aima";
age=25;
degree="Bs";
religion="Islam";

console.log("name is:",name,"Age:",age,"degree:",degree,"Religion:",religion);
console.log(typeof name);
console.log(typeof age);
console.log(typeof degree);
console.log(typeof religion);

}
// practice
let keyboard={
    productname:"keyboard",
    rating:4.5,
    scale:1000,
    price:270,
    return:true,
    color:"black",
};
console.log(keyboard);

// arithematic operators
let a=46;
let b=53;
console.log("a+b=",a+b); 
console.log("a-b=",a-b); 
console.log("a*b=",a*b); 
console.log("a/b=",a/b); 
console.log("a%b=",a%b); 
console.log("a**b=",a**b); 
console.log("value of a",a++);
console.log("value of a",a++);
// assignment operator
let c=5;
let d=4;
let e=4;
let f=4;
let g=4;
console.log(c+=2);
console.log(d-=2);
console.log(e*=2);
console.log(f%=2);
console.log(f**=2);
// comparison operator
let h=35;
let i="35";
console.log(h==i);
console.log(h===i);
console.log(h!=i);
console.log(h!==i);
console.log(h>i);
console.log(h>=i);
// logical operator
{
let age=60;
let job="govt-employ";
console.log("age>=60",age>=60);
console.log("job",job=="govt-employ");
console.log("free-treatement",age>=60 && job=="govt-employ");
}
{
let age=48;
let job="govt-employ";
console.log("age>=60",age>=60);
console.log("job",job=="govt-employ");
console.log("free-treatement",age>=60 && job=="govt-employ");
}
{
    let age=60;
    let job="govt-employ";
    console.log("age>=60",age>=60);
    console.log("job",job=="govt-employ");
    console.log("free-treatement",age>=60 || job=="govt-employ");
    }
    {
        let age=45;
        let job="govt-employ";
        console.log("age>=60",age>=60);
        console.log("job",job=="govt-employ");
        console.log("free-treatement",age>=60 || job=="govt-employ");
        }
        {
            let age=60;
            // let job="govt-employ";
            console.log("age<=60",!(age>=60));
            }
//ternary operators
let marks,status;
marks=40;
marks>=33 ? sstatus="Pass":sstatus="Fail";
console.log("student-status:",sstatus);

let age,liscence;
age=13;
age>=18 ? liscence="allow":liscence="not-allow";
console.log("liscence:",liscence)

// let employname,salary;
// employname="Aima";
// salary=5000;
// tax=0;
// salary>=10000 ? tax="tax-applied":tax="not-applied";
// console.log("employname:",employname);
// console.log("salary:",salary);
// console.log("tax",tax);

// if....else
let eemployname="Aima";
let ssalary=35000;
let tax=0;
let netssalary=0;
if(ssalary>=25000)
{
    tax=5/1000*ssalary;
}
else
{
    tax=5/100*salary;
}
console.log("eemployname",eemployname);
console.log("ssalary",ssalary);
console.log("tax on salary",tax);
netssalary=ssalary-tax;
console.log("net-salary :",netssalary);

// switch statement
{
let eemployname = "Aima";
let ssalary = 35000;
let tax = 0;
let netssalary = 0;

switch (true) {
    case (ssalary >= 25000):
    tax = 5 / 1000 * ssalary;
    break;

default:
    tax = 5 / 100 * ssalary;
}

console.log("eemployname:", eemployname);
console.log("ssalary:", ssalary);
console.log("tax on salary:", tax);
netssalary = ssalary - tax;
console.log("net-salary:", netssalary);
}


// for loop
// Zara wants to print numbers 1 to 5 with a smile 🙂
for (let number = 1; number <= 5; number++) {
    console.log("Zara's number: " + number + " 🙂");
}


//  Use of Break and Continue
// Zara is skipping number 3 and stopping at 6 while printing 1 to 10
for (let step = 1; step <= 10; step++) {
    if (step === 3) {
    console.log("Skipping 3... ❌");
    continue;
    }
    
    if (step === 6) {
    console.log("Reached 6, stopping here! 🛑");
    break;
    }

    console.log("Step number: " + step);
}




//  While Loop
let mangoes = 1;

while (mangoes <= 4) {
    console.log("Eating mango number " + mangoes + " 🥭");
    mangoes++;
}

// console.log("No more mangoes left!");
// const P =3.14;
// P =3.14159
// console.log(P);


// Arrays and Objects
// Array of student object
let student = [
    {nam:"Aima",marks:54},
    {nam:"Saba",marks:76},
    {nam:"kalsoom",marks:64},
];
// Step 2: Add new student using push()
student.push({nam:"hina",marks:88});
console.log(student);
// step 3: Remove from end using pop
student.pop();
console.log(student);
// step 4: Remove from start using shift
student.shift();
console.log(student);
// step 5: Add to start using unshift
student.unshift({nam:"ammara",marks:92});
console.log(student);

// Step 6: Filter students with marks r(student=> student.marks > 75);
let highScorers = student.filter(student => student.marks > 75);
console.log("High Scorers:");
highScorers.forEach(s => console.log(s.nam));

// Step 7: Calculate average marks using reduce()
let total = student.reduce((sum, s) => sum + s.marks, 0);
let average = total / student.length;
console.log("Average Marks:", average);

// Step 8: Use Object.keys and Object.values
let firstStudent = student[0];
console.log("Keys:", Object.keys(firstStudent));   
console.log("Values:", Object.values(firstStudent));




// DOM manipulation
window.onload = function () {}
var k = document.getElementById ("main-heading");
var j = document.querySelector (".content");
// k.innerHTML = "hcbhrf"
// k.addEventListener("click",function(){
//     k.innerHTML ="paragraph has been changed"
// });
// };
// k.addEventListener("mouseover",function(){
//     k.style.backgroundColor = "orange";
//     k.style.color = "gray-600";
// })


console.log("Customer: Pizza order kiya");

setTimeout(() => {
    console.log("Chef: Pizza bana raha hoon");

    setTimeout(() => {
    console.log("Chef: Pizza oven mein dal diya");

    setTimeout(() => {
        console.log("Chef: Pizza tayyar hai, deliver kar diya");
    }, 2000); // Pizza baking time

  }, 1000); // Oven mein dalne ka time

}, 1000); // Pizza preparation time

console.log("Customer: Tab tak main YouTube dekh leta hoon");

function fetchUser(callback) {
    setTimeout(() => {
    console.log("User data fetched");
    callback({ id: 1, name: "Ali" });
    }, 1000);
}

function fetchPosts(userId, callback) {
    setTimeout(() => {
    console.log(`Posts for user ${userId} fetched`);
    callback(["post1", "post2"]);
    }, 1000);
}

function fetchComments(post, callback) {
    setTimeout(() => {
    console.log(`Comments for ${post} fetched`);
    callback(["comment1", "comment2"]);
    }, 1000);
}

  // Callback hell 👇
fetchUser((user) => {
    fetchPosts(user.id, (posts) => {
    fetchComments(posts[0], (comments) => {
        console.log("Final Comments:", comments);
});
    });
});


console.log("Start");

function greeting(name, callback) {
    console.log("Hello, " + name);
  callback();  // Callback function will be called after greeting
}

greeting("John", function() {
    console.log("Goodbye!");
});

console.log("End");



// 1. Ek promise banaya
let chaiBanana = new Promise(function(resolve, reject) {
    let sugarAvailable = true;

    if (sugarAvailable) {
    resolve("Chai ban gayi! ☕");
    } else {
    reject("Chini khatam ho gayi 😓");
    }
});

// 2. .then() aur .catch() ka use
chaiBanana
    .then(function(successMessage) {
    console.log("Success:", successMessage);
    })
    .catch(function(errorMessage) {
    console.log("Error:", errorMessage);
    });

