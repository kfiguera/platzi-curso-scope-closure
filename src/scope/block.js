const fruits = () => {
    if (true) {
        let fruits1 = 'apple';
        var fruits2 = 'banana';
        var fruits3 = 'kiwi';

        console.log(fruits1);
    }
    console.log(fruits2);
    console.log(fruits3);
}
fruits();

let x = 1;
{
    let x = 2;
    console.log(x);
}
console.log(x);

const anotherFunction = () => {
    for (var i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        },1000);
    }
    for (let j = 0; j < 10; j++) {
        setTimeout(() => {
            console.log(j);
        },1000);
    }
};
anotherFunction();