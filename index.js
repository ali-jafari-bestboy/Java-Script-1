//1
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString.length)
var mystring =( myString.replace(/,/g, '')) ;
console.log(mystring);
// 2
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals)
let arr = favoriteAnimals.splice(1, 0, "meerket");
console.log(favoriteAnimals)
console.log('The array has a length of: ' + favoriteAnimals.length)
let arr2 = favoriteAnimals.splice(3, 1,);
console.log(favoriteAnimals)
var index = favoriteAnimals.indexOf("meerket")
console.log('The item you are looking for is at index: '+ index)
//More JavaScript
//1
function adding(a, l, i){
 after=a+l+i;
 }
adding(2,3,4);
console.log(after);
//2
// function colorCar(what){
//     console.log(what)
// }
// colorCar('a oreng car')
function colorCar(color){
   console.log('a '+color ,'car')
}
colorCar('red')
//3
const car={
nombeR:1,
made:"China",
f: 300
}
function Countbitch(car){
 console.log(car)
}
Countbitch(car)
//4
function vehicleType(color, car){
 if(car===1){console.log('a '+color+"car")
 console.log('a '+color+"car")}else{console.log(+color+ ("+2"))}
 }
 vehicleType("red")
//5
console.log(3 === 3 ? "yes" : "no")
//6
function vehicle(color,car,age){
if(age===5){ console.log('a'+color+'car')
 console.log('a'+color+'car')
 }else{console.log('a ' +color+ ' used car ')}
}
vehicle('red',)
//7
var Array1 = ["motorbike", "caravan", "bike"];
console.log(Array1)
//8
console.log(Array1[2])
//9
function getVehicleName(type) {
	return type === 1 ? 'car' : 'vehicle';
}
function ageName(age) {
	if (age > 5) {
		return 'used';
	} else {
		return 'new';
	}
}
function vehicle(color, myArray, age) {
	return 'a ' + ageName(age) + ' ' + color + ' ' + getVehicleName(type);
}
console.log(vehicleType('red', 1, 6));
/*function vehicle1(motorbike, caravan, bike){
 if(motorbike===1){console.log('a ' +color+'new bike')
console.log('a '+color+'bike')
}else{console.log('a '+color+'new bike')}
}
vehicle1('blue')*/
//10
const cars = ["motorbikes", "caravans", "bikes", "Ford"];
const i = 2;
const len = cars.length;
const text = "Amazing Joe's Garage, we service cars,";
console.log(text + cars)
// 11
cars.push("Pear")
console.log(text + cars)
//12
let object = {}
//13
const AlisTeachers={
 zohear:'',
 mohammad:''
} ;
console.log(AlisTeachers)
//14
const Teachers={
 zohear:'aaa',
 mohammad:'bbbb'
} ;
console.log(Teachers);
//15
let x = [1,2,3];
let y = [1,2,3];
let z = y;
console.log(x==y);
console.log(x===y);
console.log(z==y);
console.log(z==x);
//all them  is false,just 'console.log(z==y)' is true
//16
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;


o2 = { ssss: 'seeee uuuu' };
o1 = { bbbbb : 'ccccccc' };

console.log(o1);

console.log(o2);

console.log(o3);

alert('The o1 and o2 changes dont matter apparently ')
//17
let bar = 42;
typeof typeof  bar;
console.log(typeof typeof bar)
// nothing, because we didnt do console.log(bar);


I WROTE IT LIKE THAT
but i am not sure its true