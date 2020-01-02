var x=5;
var y=6	;

console.log(x+y);



function myName(message,world="ello")
{

	message=message+"world"; 
	console.log(message + world);
}


myName("HELLO","SAIITM")

WILL PRINT SAIITM INSTEAD OF ELLO COZ THIS IS A TEMPORARY VARAIBLE

var newValue ="first-message";

function tripleplus(value)
{
	var newValue=value+value+value;
	return newValue;

}


console.log(newValue,tripleplus(4));






NEW THING

*=multiply **=exponent



var answer = 5%5;

console.log(answer);


function SomeThing(info,data){
	console.log("this is infmation which is " + info + "and this is data " + data);
}






var name ="abhijeet";

console.log(name);


POP PUSH OPERATION

var values=[1,2,3,44];

values.pop(3);

values.shift(2);

values.push(5);


values.splice(0);

console.log(values,typeof(values));

console.log(values.length);



OBJECTS DECLARATION AND MORE THINGS

var students={
	name:"abhijeet",
	age:25,
	gender:"male"
}
 
console.log(students.name);  

console.log(students.age);

console.log(students.gender);

 console.log(students.typeof());

Passing object to function

function changeStudent(students) {
	students.name="Hitanshu Singh";
	students.age=12;
}

console.log(students.name);




ARRAYS OF OBJECTS

var students=[
{
	name:"rajnikant",
	age:22
}

// {
// 	name:"abhi",
// 	age:20
// }

{
	name:"govind",
	age:15
}

]

console.log(students(2).name);   willl print the third student name in the object

SOME OF THE BUILT IN JAVASCRIPT FUNCTIONS

var result=Math.random()*12


result = Math.trunc(result);

console.log(result);


result.ToLocaleLowerCase();

result.result.toUpperCase();


console.log("madhav");