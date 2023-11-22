function game(){
    const array = ["rock","paper","scissors"];
     
    var input;
    
    for(i=0; i<3; i++){
        var botanswer = array[Math.floor(Math.random() * array.length)];
        input = prompt("Rock, paper, scissors?").toLowerCase();

        if (input === botanswer){
            alert("Game " + (i+1) +": It is a draw, you both selected "+ input)
        }
        else if(input === "rock" && botanswer ==="scissors"){
            alert("Game " + (i+1) +": You win, opponent selected scissors. Congratulations!")
            break;
        }
        else if(input === "rock"&& botanswer === "paper"){
            alert("Game " + (i+1) +": You lose, opponent selected paper")
        }
        else if(input === "paper"&& botanswer === "rock"){
            alert("Game " + (i+1) +": You win opponent selected rock. Congratulations!")
            break;
        }
        else if(input === "paper"&& botanswer === "scissors"){
            alert("Game " + (i+1) +": You lose opponent selected scissors")
        }
        else if(input === "scissors"&& botanswer === "paper"){
            alert("Game " + (i+1) +": You win opponent selected paper. Congratulations!")
            break;
        }
        else if(input === "scissors"&& botanswer === "rock"){
            alert("Game " + (i+1) +": You lose opponent selected rock")
        }
    }
}