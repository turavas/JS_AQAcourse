//2. Сделать из "*" в консоли равнобедренный треугольник и ромб

let n = 10;

for (let i = 1; i <= n; i++) {
let spaces = " ".repeat(n - i); 
let stars = "*".repeat(i * 2 - 1);
console.log(spaces + stars);
} 

// ромб
let a = 5;

for (let i = 1; i <= a; i++) {
let spaces = " ".repeat(a - i);
let stars = "*".repeat(i * 2 - 1);
console.log(spaces + stars);
}
for (let i = a - 1; i > 0; i--) {
  let spaces = " ".repeat(a - i);
  let stars = "*".repeat(i * 2 - 1);
console.log(spaces + stars);
}
