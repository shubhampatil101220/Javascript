//There are two types of datatype
/*
1.Primitive Types
  -primitive have 7 types are as follows:
  Number, Boolean, string, null, undefined, Symbol, Bigint

  */
 let value=132;
 let isloogedIn =true;
 let Ename ="shubham";
 let salary =null;
 let joined =undefined;
 let id = Symbol('123'); //Symbol('123')
 let bignumber =1313213n

  /*
2.Reference Types
  -reference have 3 types are as follows:
  Array, Object, Functions
 */
let fruits=["apple","mango","banana","orange"];
let details={
    id:1,
    color:"red",
    build:"metal",
    size:"oversized"
}
let myFunction = function(){
    console.log("Hello vro");
}
console.log(typeof bignumber);