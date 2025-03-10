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