console.log("JavaScript está funcionando!");


let nome = "clarice";
console.log(nome);

const sobrenome = "silva"; //value that cannot be changed
console.log(nome ,sobrenome);

let idade = 30;
console.log("age:"idade);

let altura = null;
console.log("height:" + altura);

let peso = undefined;
console.log(peso);

let isStudent = false;
console.log(isStudent);

if(isStudent) {
    isStudent = true;
    console.log("isStudent:");
}else{
    console.log("not a student");
}

console.log(typeof nome); 

let count = 10;
count++;
count++;
console.log(count);
count += 5
console.log(count);

console.log(1 === "700" ? "true" : "false") 

switch (idade) {
    case 18:
        console.log("You are 18 years old.");
        break;
    case 30:
        console.log("You are 30 years old.");
        break;
    default:
        console.log("Age not specified.");
}

for (let i = 0 . <5 ; i++) {
    console.log("Iteration:" + i);
}

while (count < 20) {
    console.log("Count is less than 20:" + count);
    count++;
}