const AccountId=1454541;
let AccoountEmail ="shubham@gmail.com";
var AccountPassword ="shubham@12345";


/*AccountId =165113;  this isNot Allowed in javascript,because in modern javascript 
const variable can not reinitialize once it is initialized.*/

// but we can reinitialize the variable which are declared with the let keywords

AccoountEmail ="updateEmail@gmail.com";

//we can also set variable without any keyword but it is no recommended
currentCity ="Pune";

// LET KEYWORD
/* let keyword we can first intialize the type and then we can assign the value 
like following*/
let AccountState;
AccountState ="blocked"

//CONST KEYWORD
/*but in const keyword we cannot do such like let keyword 
const amount;
amount =123;
this is purely not allowed
*/

// bydefault values of let variable is undefined
let interest;
// we can log the data by two way
console.log(AccountId);

// and
console.table([AccountId , AccoountEmail , AccountPassword, currentCity,AccountState,interest]);