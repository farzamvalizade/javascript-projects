let num1=20;
let num2=num1;
let student1={
    name:"farzam",
    age:13,
};
// let student2=student1;
console.log(JSON.parse(JSON.stringify(student1)));
let student2=JSON.parse(JSON.stringify(student1));

