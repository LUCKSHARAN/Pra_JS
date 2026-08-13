// console.log("From Consloe Log");

// document.write("From Document Write")

// alert("From Alert") 

// var a=window.prompt("From Prompt")
// document.write(a)

// var c=prompt("What is your Name:")
// document.write("welcome" + c)

// var b=window.prompt("From Prompt")
// console.log(b)

// window.prompt("super pa")

// window.confirm("what is this")

// var lan = "123";

// document.write("<br> "+lan);

// var lan = "1234";

// document.write("<br> "+lan);

// let w = "new";

// let w = "new1";
// document.write(w)

// document.write("<br> "+w);

// const college = "ABC Engineering College"; // cannot change

// let semester = 5; // can change
// semester = 6;

// var language = "JavaScript"; // old way
// language = "Python";

// console.log(college);
// console.log(semester);
// console.log(language);

//  { let age = 20; } 
//  age = 30 
//  console.log(age);

// a=parseInt(prompt("Enter your age: "));
// document.write("Name "+ a);

// a=parseInt(prompt("Enter your age: "));
// b=parseInt(prompt("Enter yout Age: "));

// document.write("The enter output is "+ (a>b) + " good")

// a=parseInt(prompt("Enter the A: "))
// a += 10
// document.write("The value is: "+ a)

// a=parseInt(prompt("enter the value of A: "))
// b=parseInt(prompt("Enter the Value of B: "))
// c=parseInt(prompt("Enter the value of C: "))

// if(a>=b)
// {
//     if(a>=c)
//     {
//         document.write("A is Greater")
//     }
//     else{
//         document.write("C is Greater")
//     }
// }
// else{
//     if (b>=c)
//     {
//         document.write("B is Greater")
//     }
//     else
//     {
//         document.write("C is Greater")
//     }
// }

//  let name=prompt("Enter the Username: ")
//  let password = prompt("Enter the Password: ")

//  if( name == "admin" && password =="User@123")
//  {
//     document.write("Usernmae and password is corrct");
//  }
//  else
// {
//     if(name == "admin")
//     {
//         document.write("UserId is correct but the password is incorrect");
//     }
//     else{
//         document.write("Password is Wrong");
//     }
// }


// let day = parseInt(prompt(
// `Select a Day:

// 1 - Monday
// 2 - Tuesday
// 3 - Wednesday
// 4 - Thursday
// 5 - Friday
// 6 - Saturday
// 7 - Sunday

// Enter your choice (1-7):`
// ));


// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Tuesday");
//         break;

//     case 3:
//         console.log("Wednesday");
//         break;

//     case 4:
//         console.log("Thursday");
//         break;

//     case 5:
//         console.log("Friday");
//         break;

//     case 6:
//         console.log("Saturday");
//         break;

//     case 7:
//         console.log("Sunday");
//         break;

//     default:
//         console.log("Invalid Day");
// }

    
// let num = parseInt(prompt("Enter the Number: "))

// if (num % 2 == 0)
// {
//     document.write("Even Number")
// }
// else{
//     document.write("Nagative Number")
// }

// let num = parseInt(prompt("Enter the Number: "))

// if (num == 0)
// {
//     document.write("Neutral")
// }    
//     else if(num >= 0)
//     {
//         document.write("postive")
//     }
//     else if(num <= 0)
//     {
//         document.write("Nagative")
//     }

// else{
//     document.write("Invalid Input")
// }


// let marks = parseInt(prompt("Enter the Marks: "))

// if (marks <= 50){
//     document.write("Fail")
// }
// else if(marks >= 51 && marks <= 60)
// {
//     document.write("Just pass")
// }
// else if(marks >= 61 && marks <= 70)
// {
//     document.write("Pass")
// }
// else
// {
//     document.write("Passed aboove the marks of 71 ")
// }

// function leapyear()
// {
// year = parseInt(prompt("Enter the Year: "))

// if (year%4 == 0)
// {
//     document.write("Leap Year")
// }
// else {
//     document.write("Not a leap year")
// }
// }

// document.write('<br>')

// document.write('functions <br>')

// function sample(){
//     document.write('calling the sample function <br>')
// }
// sample()

// function para(name,age){
//     document.write("parameter funtion <br>")
//     document.write(name,age)
// }
// para("lucksharan","21",'<br>')

// function add(a,b){
//     return(a+b)
// }
// a=parseInt(prompt("Enter the value of A : "))
// b=parseFloat(prompt("Enter the value of B : "))
// z=add(a,b)
// document.write("<br> " +z)

// function checkAge(age) {
//     if (age < 18) {
//         return "Minor";
//     }

//     return "Adult";
// }

// console.log(checkAge(15));
// console.log(checkAge(25));

// let con = function(a,b){
//     document.write(a+b)
// }
// a=parseInt(prompt("Enter the value of A : "))
// b=parseFloat(prompt("Enter the value of B : "))
// con(a,b)

// function numbers(initial,end){

//     for(i=initial; i<=end; i--)
//     {
//         document.write(i + "<br>");
//     }
// }
// initial=parseInt(prompt("Tell the Strting No: "));
// end=parseInt(prompt("Tell the ending No: "));
// numbers(initial,end);

// document.write('<br>')

// for(i = 10; i >= 5; i--)
// {
//     document.write(i+"<br>");
// }

// for(i = 25;i >= 5; i -= 5){
//     document.write(i+"<br>")
// }

// let stu = ["Rahul","Mano","varun"]

// document.write(stu[0])

// for (let i=0;i <= 2;i++){
//     document.write(stu[i])
// }

// let arr=["vimal","nandish","lokesh"]

// for(let i=0;i<=arr.length;i++){
//     document.write("<br>"+ arr[i])
// }

// let arr=[]

// function pra(input){

// input=prompt("Enter the Input : ")

// for (let i=0;i<=input.lenght;i++){
//     input.push(input[i]+"<br>")
// }

// document.write(input)
// }

// let arr = ["HTML", "CSS", "JS"];

// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }   


// arr.push("ko")

// document.write(arr)

// arr.pop()


// document.write("<br>"+ arr)

// arr.shift()

// document.write("<br>"+ arr)

// arr.unshift("Enter ")

// document.write("<br>"+ arr)

// num=[10,20,30]

// num.forEach(function(num1)
// {
//     document.write(num1+"<br>")
// })

// let fun=num.map(function(num2)
// {
//     return num2 * 5
// })

// document.write("<br>"+fun+"<br>")

// let fil=num.filter(function(num3)
// {
//     return num3 >= 21
// })

// document.write("<br>"+fil)


// name1=["lucky","dinesh","muruga"]

// let name2= name1.map(function(name)
// {
//     return name.toUpperCase()
// })

// document.write("<br>" +name2)

// let student = {
//     name:"lucky",
//     reg:"32",
//     course:"B.Tech",
//     bus_no:"12"
// }


// document.write(student.bus_no)

// student.bus_no = 11

// document.write("<br>"+student.bus_no)

// student.city = "Rasipuram"

// document.write(student.city)

// console.log(student)

// delete student.city

// console.log(student)


// let student = {
//     name : 'lucky',
//     reg:22,
//     marks:{
//         math: 12,
//         scince: 23
//     }
// }

// document.write(student.marks.math)

// student.marks.math = 34

// document.write(student.marks.math)

// console.log(student)

// student.marks.it = 66

// document.write(student.marks.it+"<br>")


// for (let key in student){
//     document.write(key+ ":" +student[key]+"<br>")
// }

// for (let i = 0;i <= student.lenght;i++){
//     document.write(student[i])
// }


// for (key in marks){
//     document.write(key+":"+marks[key])
// }

// let person = new Object()

// person.name = "lucky"
// person.age = 22

// console.log(person)

// person.dep = "B.Tech - I.T"

// document.write(person.dep)

// console.log(Object.keys(person))
// document.write(Object.values(person))
// document.write(Object.entries(person))


// let obj={
//     name :'LUCKY',
//     age: 22,
//     greet : function(){
//         document.write("Hello")
//     }
// }
// obj.gen = "male"

// for (key in obj){
//     document.write(key+":"+obj[key] + "<br>")
// }


// let bus = {
//     opename:"KPN",
//     operoute:{
//         form : "Salem",
//         to : "Bangalore"
//     }
// }

// for(let i = 0; i >= bus.length; i++){
//     document.write(bus[i])
// }
// document.write(bus.operoute.form)   

// console.log("Write")

// setTimeout(function(){
//     console.log("Delay")
// }, 2500);
// console.log("End")

// let car = {
//     name:"Hyundai",
//     age:2,
//     condition:{
//         tyre:"bad",
//         engine:"good"
//     }
// }

//  document.write(car.condition.tyre)

//  car.condition.body = "incident occured"

//  document.write(car.condition.body)

//  car.age = 3

//  document.write(car.age)


//  delete car.condition.tyre

// document.write(Object.keys(car))
// document.write("<br> "+Object.entries(car.condition))

// function greet (name,callback){
//     console.log("Hello " + name)
//     callback()
// }

// greet("veen",function(){
//     console.log("Greet from Hello")   
// })

// let pro = new Promise(function(resolve,reject)
// {
//     resolve("Payment is Completed")
// })

// Promise.then(function(result)
// {
//     console.log(result)
// })

// let car = {
//     name:"Hyundai",
//     age:2,
//     condition:{
//         tyre:"bad",
//         engine:"good"
//     }
// }


// for ( k in car){
//     console.log(k +'-' +car[k])
// }

// let bus = ["kpn",'a1','srm']

// for(i=0;i<=bus.length;i++){
//     document.write(bus[i]+"<br>")
// }


// let data = [
//     ["Apple", "Banana"],
//     ["Red", "Green"],
//     ["Car", "Bike"]
// ];

// for(i=0;i<=data.length;i++) {
//     for(j=0;i<=data.length;j++) {
//         console.log([i][j])
//     }
// }


// let promise = new Promise(function(resolve,reject){

//     let success = false;

//     if(success){
//         resolve("Data loded");
//     }
//     else{
//         reject("Data incomplete");
//     } 
// });

// promise.then(function(result){
//     console.log(result)
// });

// promise.catch(function(result)
// {
//     console.log(result)
// });

// let set = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve("Data completed")
//     }, 5000);
// })

// set.then(function(result){
//     console.log(result)
// });

// function downloadfile(val){
//     return new Promise(function(resolve,reject){
//         if(val%2==0){
//             resolve("Even")
//         }
//         else{
//             reject("Odd")
//         }
//     })
// }

// downloadfile(2)
// .then(function(result){
//     console.log(result)
// })

// .catch(function(error){
//     console.log(error)
// })

// function file(){
//     return new Promise(function(resolve,reject){
//         downloadfile = true;

//         if(true){
//             resolve("File Completed")
//         }
//         else{
//             reject("File Not Completed")
//         }
//     })
// };

// file()
// .then(function(result)
// {
//     console.log(result)
// })
// .catch(function(error)
// {
//     console.log(error)
// })

// function sam(a,b){

//     console.log(a+b)
// }

// let sum = sam(10,8)

// console.log(sum)


// function def(){
//     return new Promise(function(resolve,reject){
//         let vari = true

//         if(vari){
//             resolve(3)
//         }
//         else{
//             reject("download failed")
//         }
//     })
// }

// def()
// .then(function(r1)
// {
//     return r1 + 3
// })
// .then(function(r2){
//     return r2 *2 
// })
// .then(function(r3){
//     console.log(r3)
// })

// console.log("Start");

// setTimeout(function () {
//     console.log("Downloaded");
// }, 3000);

// console.log("End");

// function delay(){
//     return new Promise(function(resolve)
// {
//     setTimeout(function(){
//         resolve("Task Completed")
//     },3000)
// })
// }   

// async function name() {
//     let result = await delay();
//     console.log(result)
    
// }
// name()

// async function delay() {
//   let rp = new Promise(function(resolve) {
//     setTimeout(function() {
//       resolve("Food is prepared");
//     }, 5000);
//   });
  
//   let result = await rp;
//   console.log(result);
// }


// async function gu() {
//   try{
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await response.json
//     console.log(data)
//   }
//   catch(error){
//     console.log(error)
//   }
// }

// gu()

// async function add() {
//   let a = await Promise.resolve(10);
//   let b= await Promise.resolve(10);
//   console.log(a+b);
// }

// add()

