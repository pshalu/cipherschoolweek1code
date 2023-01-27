// .map()
/*let arr = [1,2,3,4,5];
let newarr=[];
for (let i = 0; i < arr.length; i++) {

    newarr[i] = arr[i] * arr[i];

}
console.log(newarr);
*/

/*let arr = [5,10,15,20];
function functformap(elem){
    return elem * elem;
}*/
/*let newarr = arr.map((element,index) => {
    console.log(index);
return element * element;
});
console.log(newarr);
*/
/*let arr = [5,10,15,20];
arr.forEach((element, index) =>
{
    console.log(element);
});
*/
/*let arr = [5,10,15,20];
arr.forEach((element, index) =>
{ element *= element
    console.log(element);

})
console.log("Array is : ", arr);
*/
/*
let arr = [5,10,15,20,30,40];
let newarr = arr.filter((element) => element >= 30);
console.log(newarr);
*/
/*let arr = [5,10,15,20,30,40];
let temp = arr.find((value) =>{
    return value >20;
});
console.log(temp);
*/

/*let array = [50,4,40,30,26]
let sortedarray = array.sort((el1,el2)=>{
    el1 = Number(el1);
    el2 = Number(el2);

});
console.log(sortedarray)
*/

/*let myobject= {
    name : "Alex",
    age: 24,
    address: {
        street : "Booklyn",
        city: "New York",
        state: "NN",
        country: "USA",
    },

};
console.log(myobject.address);
*/



// if arr1 = arr2
/*let obj1 = {name: "shantanu"};
let obj2 = {name: "shantanu"};
function areEqual(obj1,obj2){
    if (obj1 === obj2){
        return true;
    }
    if (Object.keys(obj1).length !== Object.keys(obj2).length ){
        return false;
    }
    for (let key of Object.keys(obj1)){
        if (typeof obj2[key] === "undefined"){
             return false ; 
        }
        if (obj2[key] != obj1[key]){
            return false;
        }
    }
    return true;
}
console.log(areEqual(obj1));
*/

// Map and set 
/*let map = new Map();
map.set(1, "Shantanu");
map.set(2,"Alex");
console.log(map);
map.values();
*/


/*
let set = new Set();
set.add(1);
let arr = [... set]
console.log(set);
*/
/*
class Animal{
    noOfLegs;
    color;
    family;
    sound;
    constructor(noOfLegs,color,family,sound) {
        this.noOfLegs = noOfLegs;
        this.color = color;
        this.family = family;
        this.sound = sound;

    }

    showAnimal() {
        console.log('The animal belongs to family: ${this.family}');
    }
}
let animal = new Animal(4,"brown","rodent","Phew Phew");
animal.showAnimal();

*/







