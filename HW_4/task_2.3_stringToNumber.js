/*3. Преобразовать Task 2 - 2 таким образом, чтобы значение НАПРИМЕР '2' 
(т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, преобразовываясь в number
*/
const minAge = 10;
const maxAge = 60;
let age = "2" // 17, 18, 61, "2", "aaa"
const currentAge = Number(age);

if (isNaN(Number(age))) {
	console.log('Entered value is not a number');
} 
else if(currentAge < minAge){
    console.log(`You don't have access because your age is ${currentAge}. It's less than ${minAge}.`);
} 
else if(currentAge >= minAge && currentAge < maxAge){
        console.log("Welcome!");
} 
else if(acurrentAge > maxAge){
        console.log("Keep calm and look Culture channel");
} 
else {
        console.log("Technical work");
}