// 1. Tables
// var num = +prompt("Please enter your number");
// for (let index = 1; index <= 10; index++) {
//     var multiply = num*index;
//     console.log(`${num} x ${index} = ${multiply}`);
// }

// 2. Array Elements addition
// var user_arr = [];
// var user_sum = 0;
// for (var i = 0; i < 5; i++){
//     var user_input = +prompt("Enter your Element");
//     user_arr.push(user_input);
//     user_sum += user_arr[i];
// }
// console.log(`array: ${user_arr}`);
// console.log(` the sum of element: ${user_sum}`);

// 3. Array ka sab sa bara number show kara
// var num_arr = [];
// var max = 0;
// for (let i = 0; i < 5; i++) {
//     user = +prompt("Enter your number in array");
//     num_arr.push(user);
//     if (num_arr[i] > max) {
//         max = num_arr[i]
//     }
// }
// console.log(num_arr);
// console.log(max);

// 4. User Se string la
// var user = prompt("Enter your String");
// var  reversed = " ";
// for (var i =user.length-1; i >= 0; i--){
//     reversed += user[i];
    
// }
// console.log(reversed);

// 5. Factorial Description
var user = +prompt("Enter your number:");
var total = 1;
for (var i = 0; i < user; i++) {
   total *= (user-i);
} 
console.log (`The ${user} factorial is: ${total}`);
