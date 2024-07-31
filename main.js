let score = {
  win:0 ,
  lost: 0, 
  tie: 0,
  displayScore : function(){
  return `  Won: ${score.win} Lost: ${score.lost} Tie: ${score.tie}`
  }
 };


function computerChoice(){
let randNum=Math.random()*3;
if(randNum<=1){
  return 'Bat';
}
else if(randNum<=2){
  return 'Ball';
}
else {
  return 'Stump';
}
}

function result(userChoice,compChoice){
if(userChoice==='Bat'){
  if(compChoice==='Bat'){
    score.tie+=1;
    return `it's tie`;
  } 
  else if(compChoice==='Ball'){
    score.win+=1;
    return `user wins`;
  }
  else if(compChoice==='Stump'){
    score.lost+=1;
    return `computer wins`;
  }
}

if(userChoice==='Ball'){
  if(compChoice==='Ball'){
    score.tie+=1;
    return `it's tie`;
    
  } 
  else if(compChoice==='Stump'){
    score.win+=1;
    return `user wins`;
    
  }
  else if(compChoice==='Bat'){
    score.lost+=1;
    return `computer wins`;
  }
}

if(userChoice==='Stump'){
  if(compChoice==='Stump'){
    score.tie+=1;
    return `it's tie`;
   
  } 
  else if(compChoice==='Bat'){
    score.win+=1;
    return `user wins`;
    
  }
  else if(compChoice==='Ball'){
    score.lost+=1;
    return `computer wins`;
  }
}
}

function greetConsole(userChoice,compChoice,resMessage){
// console.log(score);
alert(`User choice is ${userChoice}.Computer choice is ${compChoice} 
here , ${resMessage}
${score.displayScore()}
`)

}