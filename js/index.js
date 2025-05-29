// 1
let result = 5 + 5 + '5';
console.log(result);
console.log(typeof result);

// 2
let email = 'example@email.com';
let containsAt = email.includes('@');
let emailLength = email.length;
console.log("Містить '@':", containsAt);
console.log("Кількість символів у email:", emailLength);

// 3
let word1 = 'My';
let word2 = 'name';
let word3 = 'is';
let fullName = `${word1} ${word2} ${word3}`;
fullName += ' Viktor';
console.log("Повне ім’я:", fullName);

// 4
let userName = 'Олександр';
let payment = 300;
alert(`Дякуємо, ${userName}o! До сплати ${payment} гривень`);