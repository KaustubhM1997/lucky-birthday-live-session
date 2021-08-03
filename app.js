const birthDate = document.querySelector("#birth-date");

const luckyNumber = document.querySelector("#lucky-number");

const checkButton = document.querySelector("#check-button");

const outputBox = document.querySelector("#output");



function checkHandler() {

   let dob = birthDate.value;

  var sum = calculateSum(dob);

  if(sum && dob)

  compareValues(sum, luckyNumber.value);

  else

  outputBox.innerText = "Please enter values in both fields 😡"

}

function calculateSum(dob){

    dob = dob.replaceAll("-","");

    let sum = 0;

    for(var i = 0; i < dob.length; i++){

        sum = sum + Number(dob.charAt(i));

    }

    return sum;

}

function compareValues(sum, luckyNumber) {

    if(sum % luckyNumber === 0){

    outputBox.innerText = "Yay, your birthday is lucky 🚀!"

        
    }

    else {

        outputBox.innerText = "Sorry, your birthday is not lucky 😢"

    }


}


checkButton.addEventListener("click", checkHandler)