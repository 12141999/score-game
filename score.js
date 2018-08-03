var p1 = document.getElementById("p1score");
var p2 = document.getElementById("p2score");
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var reset = document.getElementById("reset");
var score = document.getElementById("score");
var numscore = document.getElementById("numscore");
var p1score = 0;
var p2score = 0;
var winningScore = 5;
var gameOver = false;
player1.addEventListener("click" , function(){
if(gameOver === false)
{
  p1score++;
}
if(p1score === winningScore)
  {
    gameOver = true;	
    p1.classList.add("winner1");
  }
  p1.textContent = p1score;
  console.log("connected");
});

score.addEventListener("change" , function(){
  var value = score.value;
  numscore.textContent = value;
  winningScore = Number(value);
  p1score = 0;
  p2score = 0;
  p1.textContent = p1score;
  p2.textContent = p2score;
  gameOver = false;
  p1.classList.remove("winner1");
  p2.classList.remove("winner2");
});

player2.addEventListener("click" , function(){
  if(gameOver === false)
  {
  	p2score++;
  }
 if(p2score === winningScore)
  {
  	gameOver = true;
    p2.classList.add("winner2");
  }
  p2.textContent = p2score;
  console.log("connected");
});

reset.addEventListener("click" , function(){
  p1score = 0;
  p2score = 0;
  p1.textContent = p1score;
  p2.textContent = p2score;
  gameOver = false;
  winningScore = 5;
  score.value = 5;
  numscore.textContent = 5;
  p1.classList.remove("winner1");
  p2.classList.remove("winner2");
});


