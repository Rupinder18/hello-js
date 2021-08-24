//document.write("what are you want")

let output = '';
for (let i=0; i<=5; i++) {
    output += 'Hello '
    console.log(output)
    document.getElementById("root").innerHTML=(`${output}`)

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let xyz = '';
let x = 1;
while(x<=5){
    if (
        x <=4
    ){
        xyz+= "Hello "
    }
    else{
        xyz+= "hi "
    }
    x++
}
console.log(xyz)
document.getElementById("root1").innerHTML=(`${xyz}`)
////////////////////////////////////While-loop////////////////////////////////////////////////////////////////////////////
 let abc = '';
 let b= 2;
 while(b<=12){
     //let c =2;
     //while(c<=b){
     abc+='*'
     b +=2
     console.log(abc)
document.getElementById("root2").innerHTML=(`${abc}`)

 }
 
 //////////////////////////////////////DO_WHILE-LOOP/////////////////////////////////////////////////////////////
 let vic = ''
 let g  = 0;
 do{
     if(g<=2){
     vic+= `${g} ,`}
     else{
         vic+= `${g}`
     }
     g++
 }
 while(g<=3);
 console.log(vic)
document.getElementById("root3").innerHTML=(`${vic}`)

 ////////////////////////////////////////////////JAVASCRIPT-OBJECTS///////////////////////////////////////////////
 let employee = {
     name : "John",
     age : 27,
     salary : 20000,
     designation: "Developer",
 };
 document.getElementById("root4").innerHTML=(`${employee.name}`)
 console.log(employee)
 ///////////////////////////////////////// add extra property ////////////////////////////////////////////////
 employee.LastName ="Singh"
 console.log(employee)
 document.getElementById("root5").innerHTML=(`${employee.name} ${employee.LastName}`)
 /////////////////////////////////////////////////////////////
 let prop = "age"
 
 console.log(`age:${employee.age}`)
 console.log(`age:${employee[prop]}`)
 //////////CRUD Operations/////////////////////////////
 let student ={}
 student.name = "Rupinder"
 student.age = 27
 student.name = "Vicky"////update-property - of - an- objt////////////////////
 delete student.age ;///delete-an-property-/////////////
 console.log(student)

 document.getElementById('root6').innerHTML=(student.name)
//////////////////////////////////////ARRAY///////////////////////////////////////
let day =[
    'monday','tuesday','thrusday','friday'
]

console.log(day)
document.getElementById('root7').innerHTML=(day)
////////unshift ///[remove first element of an array]
day.shift()
console.log(day)
document.getElementById('root8').innerHTML=(day)

//////shift////////[add]
day.unshift('monday')
console.log(day)
document.getElementById('root9').innerHTML=(day)

///push///[to add last element]
day.push('Saturday')
console.log(day)
document.getElementById('root10').innerHTML=(day)

day.push('sunday') 
console.log(day)
document.getElementById('root11').innerHTML=(day)

///////////pop///-----to remove last elemet
day.pop()
console.log(day)
day.sort()//////to -sort - the -elements//
console.log(day)
document.getElementById('root12').innerHTML=(day)

day.reverse()
console.log(day)
document.getElementById('root13').innerHTML=(day)
day.splice(4,1,'funday')///////to replace -----4th elelment of arrry 1///
console.log(day)
document.getElementById('root14').innerHTML=(day)
////////join///////
let hey = day.join(' + ')
console.log(hey)





  