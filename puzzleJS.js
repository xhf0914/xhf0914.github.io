var ans=["D","E","A","D","E"];
var score=0;
var curi=0;
var obj=["img0","img1","img2","img3","img4"];
var x=1;
var name = prompt("What's your name?");

function playerName(){
  alert("Hello " + name + ", welcome to this game!");
}
playerName()

function enterAnswer(){
    while (x===1) {
      var answer=prompt("Your answer is（Please input an uppercase letter）：");
      if(answer===ans[curi]){
        alert("Congradulations! Your answer is correct!");
        score++;
        x=0
        }
      else{
        alert("Sorry, " + answer + " is not the correct answer，Have another try！");
          }
        }
    }

function getAnswer(){
  alert("The correct answer is ："+ans[curi]);
}

function next(){
  document.getElementById(obj[curi]).style.display="none";
  curi++;
  document.getElementById(obj[curi]).style.display="block";
  x=1;
}

function finish(){
   alert("Game over "+ name +", your score is "+score+".");
}
