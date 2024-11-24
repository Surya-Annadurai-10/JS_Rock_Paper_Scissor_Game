
let result = document.querySelector(".result");
let reason = document.querySelector(".reason");
let comp = document.querySelector(".comp");
let user = document.querySelector(".you");
let restart = document.querySelector(".restart")
let computer = 0;
let you = 0;


restart.addEventListener("click", ()=>{
  computer = 0;
  you = 0;
  comp.innerText = computer;
  user.innerText = you;
  reason.innerText = "Choose Your Move !!";
  result.innerText = "";
})


document.addEventListener("click" , (e) =>{
        game(e.target.className);
});



function game(userValue){
    let arr = ['rock' , 'scissor' , 'paper'];
//    console.log(Math.floor(Math.random() * 3));
    let value = arr[Math.floor(Math.random() * 3)];
  console.log("You : ", userValue , "Computer : ", value);

   if (value == 'rock' && userValue == 'rock'){
     result.innerText = `Draw !!`;
     reason.innerText = "Hand Shake 🤝";
     comp.innerText = computer;
     user.innerText = you;
   }else if(value == 'rock' && userValue == 'paper') {
    result.innerText = `You Win !!`;
    you++;
    comp.innerText = computer;
    user.innerText = you;
    reason.innerText = ` ${userValue} beats ${value}`
   }else if(value == 'rock' && userValue == 'scissor'){
    // console.log(`You Lose !! ,  ${value} beats ${userValue}`);
    result.innerText = `You Lose !!`;
    computer++;
    comp.innerText = computer;
    user.innerText = you;
    reason.innerText = `${value} beats ${userValue}`;
}

   if (value == 'scissor' && userValue == 'scissor'){
    result.innerText = `Draw !!`;
    reason.innerText = "Hand Shake 🤝";

    comp.innerText = computer;
    user.innerText = you;
 }else if(value == 'scissor' && userValue == 'rock') {
//   console.log(` ,  `);
  result.innerText = `You Win !!`;
  you++;
  comp.innerText = computer;
  user.innerText = you;
  reason.innerText = `${userValue} beats ${value}`;
 }else if(value == 'scissor' && userValue == 'paper'){
//   console.log(`You Lose !! ,  ${value} beats ${userValue}`);
  result.innerText = `You Lose !!`;
  computer++;
  comp.innerText = computer;
  user.innerText = you;
  reason.innerText = `${value} beats ${userValue}`;
 }

 if (value == 'paper' && userValue == 'paper'){
    result.innerText = `Draw !!`;
    reason.innerText = "Hand Shake 🤝";

     comp.innerText = computer;
     user.innerText = you;
 }else if(value == 'paper' && userValue == 'scissor') {
//   console.log(`You Win!! ,  ${userValue} beats ${value}`);
  result.innerText = `You Win !!`;
  you++;
  comp.innerText = computer;
  user.innerText = you;
  reason.innerText = `${userValue} beats ${value}`;
 }else if(value == 'paper' && userValue == 'rock'){
//   console.log(`You Lose !! ,  ${value} beats ${userValue}`);
  result.innerText = `You Lose !!`;
  computer++;
  comp.innerText = computer;
  user.innerText = you;
  reason.innerText = `${value} beats ${userValue}`;

}


  
}