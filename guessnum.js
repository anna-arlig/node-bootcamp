const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

process.stdin.setEncoding('utf8')

let numbers = []
let guesses = 10

let startGame = function(){

    rl.question("This game will let you guess a number between 1 and ?. Choose difficulty by entering the highest number... ", (answer) => {
        numbers.push(answer) 
        let randomNum = Math.floor(Math.random() * answer)
        numbers.push(randomNum)
        guesses = 10
        guess()
        } )
}


let guess = function(){

    rl.question(`Guess a number between 1 and ${numbers[0]}, you have ${guesses} guesses left! `, (answer) =>
    {
        if(guesses > 1){
            if(answer == numbers[1]){
                console.log("Yeeeey!!")
                rl.question("Play again? (y/n) ", (answer) => {
                    if(answer == 'y'){
                        startGame()
                    }else{
                        return rl.close()
                    }
                })
            }else if (answer < numbers[1]){
                console.log("To low! :(")
                guesses--
                guess()
            }else{
                console.log("To high! :(")
                guesses--
                guess()
            }
        }else{
            console.log("You ran out off guesses! :(")
            console.log(`The correct number was ${numbers[1]}`)
            rl.question("Play again? (y/n) ", (answer) => {
                if(answer == 'y'){
                    startGame()
                }else{
                    return rl.close()
                }
            })
        } 
    }
    )
}

function main(){
startGame()
}

main()
