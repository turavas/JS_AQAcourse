/*
2. Преобразовать написанный код в task 1 так, чтобы сначала проверялся тип данных. 
И если он не number - кидалась ошибка в консоль.
Проверить работу кода на следующих данных 17, 18, 61, "2", "aaa"
*/

const minAge = 10;
const maxAge = 60;
const age = "2"; // 17, 18, 61, "2", "aaa"

if (typeof age !== "number") {
	console.log('Entered value is not a number');
} 
else if(age < minAge){
    console.log(`You don't have access because your age is ${age}. It's less than ${minAge}.`);
} 
else if(age >= minAge && age < maxAge){
        console.log("Welcome!");
} 
else if(age > maxAge){
        console.log("Keep calm and look Culture channel");
} 
else {
        console.log("Technical work");
}

