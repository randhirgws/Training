function diceShuffle(){
   var count_dice1=(Math.floor((Math.random() * 6) + 1));
   var count_dice2=(Math.floor((Math.random() * 6) + 1));
   console.log("<img  src="+"..\\assets\\diceImages\\dice"+count_dice2+".jpg");
   //adding image1
    var img=document.createElement("img");
    img.src = "..\\assets\\diceImages\\dice"+count_dice2+".jpg"
    document.getElementById("disp1").append(img);

    //adding image2
    var img2=document.createElement("img");
    img2.src ="..\\assets\\diceImages\\dice"+count_dice2+".jpg"
    document.getElementById("disp2").append(img2);

    if(count_dice1>count_dice2){
        document.getElementById("result").innerHTML="player 1 Wins!";
    }else
    if(count_dice2>count_dice1){
        document.getElementById("result").innerHTML="player 2 Wins!";
    }else{
        document.getElementById("result").innerHTML="DRAW!";
    }
}