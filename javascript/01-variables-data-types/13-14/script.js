//BAI 13: number-challenge
const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

//Nhận số tiền
const sum = x + y;
const sumOutput = `${x} + ${y} = ${sum}`;
console.log(sumOutput);

// Nhận sự khác biệt
const diff = x - y;
const diffOutput = `${x} - ${y} = ${diff}`;
console.log(diffOutput);

//Nhận sản phẩm
const prod = x * y;
const prodOutput = `${x} * ${y} = ${prod}`;
console.log(prodOutput);

// Get the quotient
const quot = x / y;
const quotOutput = `${x} / ${y} = ${quot}`;
console.log(quotOutput);

// Get the remainder
const rm = x % y;
const rmOutput = `${x} % ${y} = ${rm}`;
console.log(rmOutput);

//BAI 14: dates-and-times
let d;

// Nhận ngày và giờ hôm nay
d = new Date();

// Đặt thành một chuỗi
d = d.toString();

// Nhận một ngày cụ thể
d = new Date(2021, 0, 10, 12, 30, 0);

//Truyền vào một chuỗi
d = new Date('2021-07-10T12:30:00');
d = new Date('07/10/2021 12:30:00');
d = new Date('2022-07-10');
d = new Date('07-10-2022');

// https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
// Nhận dấu thời gian hiện tại
d = Date.now();

// Lấy dấu thời gian của một ngày cụ thể
d = new Date();
d = d.getTime();
d = d.valueOf();

// Tạo ngày từ dấu thời gian
d = new Date(1666962049745);

// Chuyển đổi từ mili giây sang giây
d = Math.floor(Date.now() / 1000);

console.log(d);


