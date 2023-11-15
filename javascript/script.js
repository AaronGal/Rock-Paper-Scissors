function game(){
    const array = ["rock","paper","scissors"];
    var botanswer;
    botanswer = array[Math.floor(Math.random()*array.length)];
    var input;
    input = prompt("Rock, paper, scissors?").toLowerCase;
    if (input === botanswer){
        document.getElementById("Rock,paper,scissors").innerHTML=("It is a draw, you both selected "+ input)
    }
    else if(input === "rock" && (botanswer ==="scissors")){
        document.getElementById("Rock,paper,scissors").innerHTML="You win, opponent selected scissors"
    }
    else if(input === "rock"&& (botanswer === "paper")){
        document.getElementById("Rock,paper,scissors").innerHTML="You lose, opponent selected paper"
    }
    else if(input === "paper"&& (botanswer === "rock")){
        document.getElementById("Rock,paper,scissors").innerHTML="You win opponent selected rock"
    }
    else if(input === "paper"&& (botanswer === "scissors")){
        document.getElementById("Rock,paper,scissors").innerHTML="You lose opponent selected scissors"
    }
    else if(input === "scissors"&& (botanswer === "paper")){
        document.getElementById("Rock,paper,scissors").innerHTML="You win opponent selected paper"
    }
    else if(input === "scissors"&& (botanswer === "rock")){
        document.getElementById("Rock,paper,scissors").innerHTML="You lose opponent selected rock"
    }
}