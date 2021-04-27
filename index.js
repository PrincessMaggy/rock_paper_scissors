document.write("Welcome to my Space!!!");



let choice = ["rock", "paper", "scissors"];
let comp = choice[Math.floor(Math.random() * choice.length)];

function computerPlay(){
  return comp;
}




function playRound(playerSelection,computerSelection){

  if ( playerSelection.toLowerCase() == computerSelection) {
    alert("YOU WIN!!!");
        console.log("You win!!" + " "+ playerSelection + " is same as " + "computerSelection - " + computerSelection);
    }
    //   else if(playerSelection === "null"){
    //      alert("You did not input any value!!!");
    //  }
    else{
    console.log( "You Lose!" +" "+ computerSelection + " beats " + playerSelection);

}
};






function game(){
   alert("Lets go for 5 rounds streak!!! Rock, paper or scissors, What\'s your guess? ARE YOU READY????");
    for(let i=0; i<5; i++){
      playRound(prompt("Whats your guess?"), computerPlay());
       
    }
     };
      
    game();
