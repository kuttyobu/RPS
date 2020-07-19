const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'lizard' || userInput === 'spock'){
        return userInput
    } else {
        console.log('Error! Select only from rock, paper, scissors, lizard and spock')
    }
}

const getComputerChoice = function (){
    const randomNumber = Math.floor(Math.random()*5)
    switch (randomNumber){
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
        case 3:
            return 'lizard'
        case 4:
            return 'spock'
    }
}

function determineWinner(userChoice, computerChoice){
    if(userChoice === computerChoice){
        return 'Game was tie!!!'
    }
    if (userChoice === 'rock'){
        if(computerChoice==='paper'){
            return 'Sorry! Computer Won!'
        } else {
            return "Congratulations, you won!"
        }
    }
    if (userChoice === 'paper'){
        if(computerChoice==='scissors'){
            return 'Sorry! Computer Won!'
        } else {
            return "Congratulations, you won!"
        }
    }
    if (userChoice === 'scissors'){
        if(computerChoice==='rock'){
            return 'Sorry! Computer Won!'
        } else {
            return "Congratulations, you won!"
        }
    }
    if (userChoice === 'lizard'){
        if(computerChoice==='rock'){
            return 'Sorry! Computer Won!'
        } else {
            return "Congratulations, you won!"
        }
    }
    if (userChoice === 'spock'){
        if(computerChoice==='lizard'){
            return 'Sorry! Computer Won!'
        } else {
            return "Congratulations, you won!"
        }
    }
    if (userChoice === 'scissors'){
        if(computerChoice==='Spock'){
            return 'Sorry! Computer Won!'
        } else {
            return "Congratulations, you won!"
        }
    }
    if (userChoice === 'paper'){
        if(computerChoice==='lizard'){
            return 'Sorry! Computer Won!'
        } else {
            return "Congratulations, you won!"
        }
    }
    if (userChoice === 'spock'){
        if(computerChoice==='paper'){
            return 'Sorry! Computer Won!'
        } else {
            return "Congratulations, you won!"
        }
    }
    if (userChoice === 'lizard'){
        if(computerChoice==='scissors'){
            return 'Sorry! Computer Won!'
        } else {
            return "Congratulations, you won!"
        }
    }
    if (userChoice === 'rock'){
        if(computerChoice==='spock'){
            return 'Sorry! Computer Won!'
        } else {
            return "Congratulations, you won!"
        }
    }
}

const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log('You threw : ' + userChoice)
    console.log('The computer threw: ' + computerChoice)
    console.log(determineWinner(userChoice, computerChoice))
}

