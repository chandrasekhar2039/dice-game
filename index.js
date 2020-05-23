
function game(){
var d1=(Math.floor(Math.random()*6)+1);
var imgin1="img/dice"+d1+".png";
document.querySelectorAll("img")[0].setAttribute("src",imgin1);

var d2=(Math.floor(Math.random()*6)+1);
var imgin2="img/dice"+d2+".png";
document.querySelectorAll("img")[1].setAttribute("src",imgin2);

if(d2>d1){
  document.querySelector("h1").textContent="🎉Player 2 is the winner 🏆";
}else if (d2==d1) {
  document.querySelector("h1").textContent=" Draw ";

}else{
  document.querySelector("h1").textContent="🎉Player 1 is the winner 🏆";
}

document.querySelector(".mgi").innerHTML='<a class="btn stop" href="index.html"> Stop </a>';
document.querySelector("a").textContent="play Again";



}
