// BAI 7:operators
// 1. Arithmetic Operators
let x;
x = 5 + 5;
x = 5 - 5;
x = 5 * 5;
x = 5 / 5;
x = 7 % 5;
// Concatenation
x = 'Hello' + ' ' + 'World';

//  so mu
x = 2 ** 3;

//Tang
x = 1;
// x = x + 1;
x++;

// giam
// x = x - 1;
x--;

// 2. Assignment Operators

x = 10;
x += 5;
x -= 5;
x *= 5;
x /= 5;
x %= 5;
x **= 5;

// 3. Comparison Operators

// Bằng (Chỉ giá trị, không phải loại)
x = 2 == '2';

//Bằng (Loại và giá trị)
x = 2 === '2';

//Không bằng (Chỉ giá trị, không phải loại)
x = 2 != '2';

//Không bằng (Loại và giá trị)
x = 2 !== 2;

// Lớn hơn và nhỏ hơn
x = 10 > 5;
x = 10 < 5;
x = 10 <= 5;
x = 10 >= 5;

console.log(x);

// BAI 8: type-coercion
let y;

//Buộc vào một chuỗi
y = 5 + '5';

y = 5 + Number('5');

// Bị ép buộc vào một con số
y = 5 * '5';

// null is coerced to 0 as it is a `falsy` value
y = 5 + null;

y = Number(null);

y = Number(true);
y = Number(false);

// true is coerced to a 1
y = 5 + true;

// false is coerced to 0 (falsy)
y = 5 + false;

// Undefined is coerced to 0 (falsy)
y = 5 + undefined;

console.log(x, typeof x);

//BAI 9: strings
let v;

const name = 'John';
const age = 31;

// Concatenation
v = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// mẫu chữ
v = `Hello, my name is ${name} and I am ${age} years old`;

// Thuộc tính và phương thức chuỗi

// Tạo một "đối tượng chuỗi" (JS tự động thực hiện việc này khi sử dụng thuộc tính hoặc phương thức trên chuỗi nguyên thủy)
const s = new String('Hello World');

v = typeof s;

v = s.length;

// Truy cập giá trị bằng khóa
v = s[0];

v = s.__proto__;

// Trường hợp thay đổi
v = s.toUpperCase();
v = s.toLowerCase();
v = s.charAt(0);
v = s.indexOf('d');
v = s.substring(2, 5);
v = s.substring(7);
v = s.slice(-11, -6);
v = 'Hello World';
v = x.trim();
v = s.replace('World', 'John');
v = s.includes('Hell');
v = s.valueOf();
v = s.split('');
console.log(x);