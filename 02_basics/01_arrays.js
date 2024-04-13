//Arrays in javascript
//Array is a collection of similar or different types of datatypes values
//we can declare an by two ways
//1. first method
let myArr1 =[1,2,3,4,5,6];
let myArr2 =["shubham","rushikesh","omkar","shivam"];
console.log(myArr1);
console.log(myArr2);

//2. second method
let myArr3 = new Array(1,2,3,4,5);
let myArr4 = new Array("shubham","rushikesh","omkar","shivam");
console.log(myArr3);
console.log(myArr4);

//Array Methods
myArr1.push(6);  //adds the item at last
console.log(myArr1); //[ 1, 2, 3, 4,5, 6, 6 ]
myArr1.pop();    //remove the last item of array
console.log(myArr1); //[ 1, 2, 3, 4,5, 6]
myArr1.unshift(9); //adds the item at first
console.log(myArr1); //[ 9, 1, 2, 3, 4,5, 6]
myArr1.shift()    //remove the first item of array
console.log(myArr1); //[  1, 2, 3, 4, 5, 6]

console.log(myArr1.includes(9)); //false
console.log(myArr1.indexOf(4));  //3

// binding and converting array into a string
let newArr = myArr1.join();
console.log(newArr);

                //slice and splice
/**
 ============Differnce of them is as follows========= 
1.in slice the last range is not included
  in splice the last range is included
2.in slice the original array is not modified
  in splice the values are excluded from original array 
3. slice(1="starting index",4="last index -1")
   splice(1="starting index", 4="count of numbers to exclude")
 */
let originalArray=[1,2,3,4,5,6];
console.log("originalArray",originalArray); 
//originalArray [ 1, 2, 3, 4, 5, 6 ]
console.log("sliced array",originalArray.slice(1,4));
//sliced array [ 2, 3, 4 ]
console.log("*spliced array",originalArray.splice(1,4));
//*spliced array [ 2, 3, 4, 5 ]
console.log("origianlArray",originalArray);
//origianlArray [ 1, 6 ]
