let dice!: number

function rollDice(){
    dice = (Math.round(Math.random()*6)+1)
}
rollDice()

console.log('Current dice value', dice);
