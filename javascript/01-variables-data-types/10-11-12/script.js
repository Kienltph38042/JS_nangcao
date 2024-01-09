//BAI 10: capitalize-challenge
const myString = 'developer';

let myNewString;

// Solution 1:
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
// Solution 2:
myNewString = myString[0].toUpperCase() + myString.substring(1);
// Solution 3:
myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;

console.log(myNewString);

//BAI 11: numbers
let x;

const num = new Number(5);

// toString() - returns a string representation of the number
x = num.toString();
// To get the length
x = num.toString().length;

x = num.toFixed(2);

x = num.toPrecision(3);

x = num.toExponential(2);

x = num.toLocaleString('en-US');

x = num.valueOf();

x = Number.MAX_VALUE;
x = Number.MIN_VALUE;

console.log(x);

//BAI 12: 
let y;

// Căn bậc hai
y = Math.sqrt(9);

// Giá trị tuyệt đối
y = Math.abs(-5);

// làm tròn
y = Math.round(4.2);

// làm tròn lên
y = Math.ceil(4.2);

// làm tròn  xuống
y = Math.floor(4.9);

// Số mũ
y = Math.pow(2, 3);

// Số lượng tối thiểu
y = Math.min(4, 5, 3);

// Số lớn nhất
y = Math.max(4, 5, 3);

// Nhận số/thập phân ngẫu nhiên trong khoảng từ 0 đến 1
y = Math.random();

// Nhận một số ngẫu nhiên từ 1 đến 100
y = Math.floor(Math.random() * 100 + 1);

console.log(x);