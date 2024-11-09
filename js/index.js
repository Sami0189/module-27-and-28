/**
 * step-1:hide the home screen. to hide the screen add the class hidden to the home section
 * 
 * step-2:show the playground
 */


// function buttonPlay(){
//   const homeScreen = document.getElementById('home-screen');
//   homeScreen.classList.add('hidden');

//   const playgroundSection = document.getElementById('playground-section');
//   playgroundSection.classList.remove('hidden');
// }


//we can also do it by function


function buttonPlay(){
  //hide everything show only the playground
hideElementById('home-screen');
hideElementById('score');
showElementById('playground-section');

//reset score and life
setTextElementValueById('current-life',5)
setTextElementValueById('current-score',0)
continueGame();

}


function gameOver(){
  hideElementById('playground-section');
  showElementById('score');
//update final score
//1.get the final score
 const lastScore = getElementValueById('current-score')
 setTextElementValueById('last-score',lastScore);

 //clear the last selected alphabet highlight
  const currentAlphabet= getElementTextById('current-alphabet');
  removeBackgroundColor(currentAlphabet);
}




function hideElementById(elementId){
  const element = document.getElementById(elementId);
  element.classList.add('hidden');
}

function showElementById(elementRemove){
  const remove = document.getElementById(elementRemove);
  remove.classList.remove('hidden');
}

function addBackgroundColor(elementId){
  const element = document.getElementById(elementId);
  element.classList.add('bg-orange-400');
}
function removeBackgroundColor(elementId){
  const element = document.getElementById(elementId);
  element.classList.remove('bg-orange-400');
}

function getElementValueById(elementId){
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const value = parseInt(elementValueText);
  return value;
}

function setTextElementValueById(elementId,value){
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function getElementTextById(elementId){
 const element = document.getElementById(elementId);
 const text = element.innerText;
 return text;
}

function handleKeyboardButtonPress(sami){             //ai line
  const playerPressed = sami.key;
  console.log('player pressed',playerPressed)

  //stop the game if pressed 'Esc'
if(playerPressed==='Escape'){
  gameOver();
}


  //console.log('player pressed',playerPressed);

  //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
   const currentAlphabet = currentAlphabetElement.innerText;
   const expectedAlphabet = currentAlphabet.toLowerCase();
   //console.log(playerPressed,expectedAlphabet);


  //check matched or not
  if(playerPressed===expectedAlphabet){
    console.log('you got a point');

    const currentScore = getElementValueById('current-score');
    const updatedScore= currentScore + 1;
    setTextElementValueById('current-score',updatedScore);
    

    //update score:
    //1.get the current score
  //  const currentScoreElement = document.getElementById('current-score');
  //   const currentScoreText = currentScoreElement.innerText;
  //   const currentScore =parseInt(currentScoreText)
  //   console.log(currentScore);

  //   //2.increase the score by 1
    //const newScore = currentScore + 1 ;

  //   //3.show the updated score
  //  currentScoreElement.innerText= newScore;

   //start a new round 
    removeBackgroundColor(expectedAlphabet);
    continueGame();
  }
  else{
    console.log('you missed.you lost a life');

    const currentLife =getElementValueById('current-life');
    const updatedLife = currentLife - 1;
    setTextElementValueById('current-life',updatedLife);
    if(updatedLife===0){
      gameOver();
    }
    // //step-1:get the current life number
    // const currentLifeElement = document.getElementById('current-life');
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    // console.log(currentLife);
    // //step-2:reduce the life count
    // const reduceLife = currentLife - 1 ;
    // //step-3:display the updated life count 
    // currentLifeElement.innerText = reduceLife;
  }
}
//capture keyboard key press
document.addEventListener('keyup',handleKeyboardButtonPress)         //ai line

function continueGame(){
//step-1:generate a random alphabet
const alphabet =getARandomAlphabet();
//console.log('your random alphabet',alphabet);
//set randomly generated alphabet to the screen (show it) 
const currentAlphabet = document.getElementById('current-alphabet');
currentAlphabet.innerText = alphabet;
//set background color
addBackgroundColor(alphabet);
}
function getARandomAlphabet(){
  //get or create an alphabet array by using string.
  //then get a random index between 0-25.
  const alphabetString = 'abcdefghijklnmopqrstuvwxyz';
  const alphabets = alphabetString.split('');
  //console.log(alphabets);
  const randomNumber = Math.random()*25;
  const index = Math.round(randomNumber);
  //console.log(index);
  const alphabet = alphabets[index];
  //console.log(index,alphabet);
  return alphabet;
}

//alphabets[randomNumber] অ্যারের randomNumber ইনডেক্সে থাকা অক্ষরটি বের করে।
//উদাহরণস্বরূপ, যদি randomNumber = 3 হয়, তবে alphabets[3] হবে 'd'।
//এই অক্ষরটি পরে গেমের স্ক্রীনে বা অন্যান্য কাজে ব্যবহৃত হবে।