for (let i = 1; i <= 10; i++) {
  console.log(i);
}
//=====================================
for (let i = 1; i <= 10; i++) {
    if (i==5) {
        console.log(i,"is better");
    }
  console.log(i);
}
//====================================
for (let i = 1; i <= 10; i++) {
  console.log(`Multiplication Table of ${i} is `);
  for (let j = 1; j <= 10; j++) {
      console.log(`${i} * ${j} =${i*j}`);
  }
}
//iterating values from array
let myArray = ["shubham","Omkar","Shivam","Nikhil"];
console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}
//break: break let you remove from the loop
//continue : continue used to skip that iteration in an loop