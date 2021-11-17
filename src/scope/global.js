var hello = "Hello";
let world = "World";
const helloWorld = "Hello World";

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}
anotherFunction();

function newHelloWorld() {
    globalVar = 'Hello World!';
}
newHelloWorld();
console.log(globalVar);

const anotherFunction2 = () => {
    var localVar = globalVar = "I'm Global"
}
anotherFunction2();
console.log(globalVar);