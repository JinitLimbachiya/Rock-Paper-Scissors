const playGame = (playerChoice) => {
    
    const choices = ['Rock', 'Paper', 'Scissors'];
    const rock = `<button><h1>✊</h1></button>`;
    const paper = `<button><h1>🤚</h1></button>`
    const scissors = `<button><h1>✌</h1></button>`

    
    let userSelectionDiv = document.getElementById('userChoice');
    let computerSelectionDiv = document.getElementById('computerChoice');
    let resultDiv = document.getElementById('result');

    const randomChoice = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomChoice];

    computerSelectionDiv.innerHTML = `${computerChoice}`;

    let result = '';
    

    // WHEN IT'S A DRAW
    if(playerChoice == computerChoice) {    
        result = `<h3>IT'S A DRAW!</h3>
                  <br>
                  <p>Both choses ${playerChoice}</p>`;

        resultDiv.style.color = 'white';

        if(playerChoice == 'Rock') {
            userSelectionDiv.innerHTML = rock;
            computerSelectionDiv.innerHTML = rock;
        }

        else if(playerChoice == 'Paper') {
            userSelectionDiv.innerHTML = paper;
            computerSelectionDiv.innerHTML = paper;
        }

        else {
            userSelectionDiv.innerHTML = scissors;
            computerSelectionDiv.innerHTML = scissors;
        }
    }  


    // WHEN USER WINS
    else if( (playerChoice == 'Rock' && computerChoice == 'Scissors') ||
            (playerChoice == 'Paper' && computerChoice == 'Rock') || 
            (playerChoice == 'Scissors' && computerChoice == 'Paper') ) {  

        result = `<h3>YOU WIN!</h3>
                  <br>
                  <p>${playerChoice} beats ${computerChoice}</p>`;

        resultDiv.style.color = 'green';

        if(playerChoice == 'Rock') {
            userSelectionDiv.innerHTML = rock;
            computerSelectionDiv.innerHTML = scissors;    
        }

        else if(playerChoice == 'Paper') {
            userSelectionDiv.innerHTML = paper;
            computerSelectionDiv.innerHTML = rock;
        }

        else {
            userSelectionDiv.innerHTML = scissors;
            computerSelectionDiv.innerHTML = paper;
        }
    }


    // WHEN USER LOSES
    else {  
        result = `<h3>YOU LOSE!</h3>
                  <br>
                  <p>${computerChoice} beats ${playerChoice}</p>`;
        
        resultDiv.style.color = 'red';

        if(playerChoice == 'Rock') {
            userSelectionDiv.innerHTML = rock;
            computerSelectionDiv.innerHTML = paper;
        }

        else if(playerChoice == 'Paper') {
            userSelectionDiv.innerHTML = paper;
            computerSelectionDiv.innerHTML = scissors;
        }

        else {
            userSelectionDiv.innerHTML = scissors;
            computerSelectionDiv.innerHTML = rock;
        }
        
    }

    resultDiv.innerHTML = result;
}