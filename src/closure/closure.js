//En este ejemplo no se esta generando un clousure
const moneyBox = (coins) => {
    let saveCoins = 0;
    saveCoins += coins
    console.log(`Moneybox: $${saveCoins}`)
}
moneyBox(5);
moneyBox(10);

//En este ejemplo no se esta generando un clousure
const clousureMoneyBox = (coins) => {
    let saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`ClosureMoneybox: $${saveCoins}`);
    }
    return countCoins;
}
let myMoneyBox = clousureMoneyBox();
myMoneyBox(5);
myMoneyBox(10);
myMoneyBox(15);