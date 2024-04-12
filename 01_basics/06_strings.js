// we can assign a string using two way

//1.first method
let userName ="shUBHham";
//2.second method
let userRole = new String('UI DEVELOPER');

console.log(userName);
console.log(userRole);
/**
 * There are too many string methods that are being used 
 * in string modifications few of them are as follows
 * 
 */
console.log(userName.length);
console.log(userName.charAt(2));
console.log(userName.indexOf('a'));
console.log(userName.includes('h'));
console.log(userName.toLowerCase());
console.log(userName.toUpperCase());
console.log(userRole.split(" "));
console.log(userRole.replace(' ','-' ));
console.log(userRole.trim());
console.log(userRole.substring(3,));
console.log(userName.slice(-5,-2));