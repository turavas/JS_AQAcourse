/*2. Написать скрипт, который выведет 5 строк в консоль 
таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
  Пример в консоли:
  :)
  :):)
  :):):)
  :):):):)
  :):):):):)
*/
let smile = 5;
let i = 1; 

console.log("Implemented by the loop WHILE:");
while (smile >= i) {
  console.log(":)".repeat(i));
  i++; 
}

console.log("\nImplemented by the loop FOR:");

for (i = 1; i <= smile; i++) {
  console.log(":)".repeat(i));
}
