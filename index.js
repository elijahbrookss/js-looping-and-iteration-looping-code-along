
function writeCards(stringNames, eventName){
  let newArray = [];
  for (let i = 0; i < stringNames.length; i++){
    newArray[i] = `Thank you, ${stringNames[i]}, for the wonderful ${eventName} gift!`;
  }
  return newArray
}

function countDown(num){
  while(num > -1){
    console.log(num--);
  }
}
