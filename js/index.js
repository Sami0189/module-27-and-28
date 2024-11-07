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
hideElementById('home-screen');
removeElementById('playground-section');
continueGame()
}





function hideElementById(elementId){
  const element = document.getElementById(elementId);
  element.classList.add('hidden');
}

function removeElementById(elementRemove){
  const remove = document.getElementById(elementRemove);
  remove.classList.remove('hidden');
}

function addBackgroundColor(elementId){
  const element = document.getElementById(elementId);
  element.classList.add('bg-orange-400');
}

function continueGame(){
//step-1:generate a random alphabet
const alphabet =getARandomAlphabet();
console.log('your random alphabet',alphabet);

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