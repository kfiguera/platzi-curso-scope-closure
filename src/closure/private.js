const person = () => {
    let saveName = 'Name';
    return {
        getName: () => {
            return saveName;
        },
        setName: (value) => {
            saveName = value;
        }
    }
};
let myPerson = person();

console.log(myPerson.getName());
myPerson.setName('Kevin');
console.log(myPerson.getName());

console.log(myPerson.saveName);