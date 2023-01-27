/*function addTwonum(num1, num2) {
    return num1 + num2;
}
console.log(addTwonum(1,2));
*/

// arrow funct(for arrow fun always  use let var keyword)
/*let addTwonum = (num1,num2) => {
    return num1 + num2;
}
console.log(addTwonum(1,2));
or let addTwonum = (num1,num2) =>  num1 + num2;

console.log(addTwonum(1,2));
*/
/*let addTwonum = (num1,num2 =5) => {
    console.log(num1);
    console.log(num2);

    return num1 + num2;
}
console.log(addTwonum(1,10));
*/



//Rest and spread operator a9applicable in arrays and objects in js)

/*let arr = [5,10,20,30,40,25];
// spread  -> ...  as well as rest -> ...operator
let newarr = [...arr, 15,25,35];

console.log(arr);
*/
// rest funct
/*let maxOfnum = (...nums) =>{
    let maximum = Number.MIN_VALUE;
    for (let num of nums ) {
        maximum = Math.max(maximum, num);
    }
     return maximum;
};
console.log(maxOfnum(1,4,5,7));


*/

// for object
let object = {
    name:"John",
    age: 14,
    address : {
        city :"New York",
        country: "USA",
    },
    

};

let object2 = JSON.parse(JSON.stringify(object));
object2.address.city = "Newark";

console.log(object2);

