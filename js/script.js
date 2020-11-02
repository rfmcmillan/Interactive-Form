// define global variables
const userName = document.querySelector('#name');
const form = document.querySelector("form");
const email = document.querySelector("#mail");
const title = document.querySelector("#title");
const activitiesContainer = document.querySelector(".activities");
const activitiesInputs = document.querySelectorAll(".activities input");
const shirtColorDrop = document.querySelector('#color');
const shirtColorDiv = document.querySelector('#shirt-colors');


// focus on name input, when the page initially loads
userName.focus();

// create behavior for the 'T-Shirt Info' section

// 'Color' dropdown menu is hidden until a T-shirt design is selected
shirtColorDiv.hidden = true;

const shirtColorOptions = document.querySelectorAll('#color option');
for (let i = 0; i <shirtColorOptions.length; i++) {
    shirtColorOptions[i].hidden = true;
}
// create a new option Element
const colorPrompt = document.createElement('option');
colorPrompt.textContent = 'Please Select a T-shirt Theme'
// insert the new option as the first option in the menu
shirtColorDrop.insertBefore(colorPrompt, shirtColorDrop.firstElementChild)
// select the first option in the dropdown menu with selected attribute
colorPrompt.selected = true;

// function that creates the default condition for payment info section
function defaultPayment () {
    // when page loads, Payment Method should be set on the Credit Card option as default
    // create creditCard variable that holds the credit card option
    const creditCard = document.querySelector('#cc-option');
    // set selected attribute of the creditCard variable to 'true'
    creditCard.selected = true;
    // create variable to hold the Paypal info
    const paypal = document.querySelector('#paypal');
    // hide the paypal info
    paypal.hidden = true;
    // do the same for bitcoin info
    const bitcoin = document.querySelector('#bitcoin');
    bitcoin.hidden = true;
}

defaultPayment();

// this code creates the initial condition for the Credit Card section
const cCInfo = document.querySelector('#credit-card');
const pleaseSelect = document.querySelector("option[value='select method']");
pleaseSelect.disabled = true;

// event listener for payment dropdown menu
const paymentDrop = document.querySelector('#payment');
paymentDrop.addEventListener('change', (e) => {
    
    //    if paypal is selected
    if (e.target.value === 'paypal') {
        cCInfo.hidden = true;
        // hide the bitcoin info
        bitcoin.hidden = true;
        // show paypal info
        paypal.hidden = false;
    // if bitcoin is selected
    } else if (e.target.value === 'bitcoin') {
        cCInfo.hidden = true;
        // hide the paypal info
        paypal.hidden = true;
        // show paypal info
        bitcoin.hidden = false;
    // if credit card is selected
    } else if (e.target.value === 'credit card') {
        cCInfo.hidden = false;
        // hide the paypal info
        paypal.hidden = true;
        // show paypal info
        bitcoin.hidden = true;
    }

});
// _____________________________________________________________________________________________________
// Validation Messages

// Activity Section Error Message
// create a new span element
const activityMessage = document.createElement('span');
// add the message's text content to the span
activityMessage.textContent = 'At least one checkbox must be checked.';
// set the span's color to red
activityMessage.style.color = 'white';
// set the span's hidden attribute to true
activityMessage.style.backgroundColor = 'red';
activityMessage.hidden = true;
// append the span to the fieldset
activitiesContainer.insertBefore(activityMessage, activitiesContainer.firstElementChild);

// Email error message 1
const emailMsg1 = document.createElement('span');
emailMsg1.textContent = "Email address field must not be left blank."
emailMsg1.style.color = 'white';
emailMsg1.style.backgroundColor = 'red';
emailMsg1.hidden = true;
// insert before the email input
form.firstElementChild.insertBefore(emailMsg1, email);

// Email error message 2
const emailMsg2 = document.createElement('span');
emailMsg2.textContent = "Email address must contain an '@' symbol before a '.'."
emailMsg2.style.color = 'white';
emailMsg2.style.backgroundColor = 'red';
emailMsg2.hidden = true;
// insert before the email input
const emailMsgBreak = document.createElement('br');
form.firstElementChild.insertBefore(emailMsgBreak, email)
form.firstElementChild.insertBefore(emailMsg2, email);

// _____________________________________________________________________________________________________
// Form Validation

function nameValidator () {
    const nameVal = userName.value;
    if (nameVal.length > 0) {
      userName.style.borderColor = 'white';
      return true;
    }
    else {
      userName.style.borderColor = 'red';
      return false;
    }
}

function emailValidator1 () {
    const emailVal = email.value;
    if (emailVal.length > 0) {
      email.style.borderColor = 'white';
      emailMsg1.hidden = true;
      return true;
    }
    else {
      email.style.borderColor = 'red';
      emailMsg1.hidden = false;
      return false;
    }
}

function emailValidator2 () {

    const emailVal = email.value;
    // below regex is adapted from https://www.regular-expressions.info/email.html
    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailVal)) {
        email.style.borderColor = 'white';
        emailMsg2.hidden = true;
        return true;
    }
    else {
        email.style.borderColor = 'red';
        emailMsg2.hidden = false;
        return false;
    }
}

function titleValidator () {

    const titleVal = title.value;
  
    if (titleVal !== 'Your Job Role') {
        title.style.borderColor = 'white';
        return true;
    } else {
        title.style.borderColor = 'red';
        return false;
    }
}

const activityValidator = () => {
    for (let i = 0; i < activitiesInputs.length; i++) {
        if (activitiesInputs[i].checked) {
            activityMessage.hidden = true;
            return true;
        }
    }
    activityMessage.hidden = false;
    return false;
}

function cCValidator () {
    const cardNumber = document.querySelector('#cc-num');
    const cardNumValue = cardNumber.value;

    if (/\d{13,14}|\d{15,16}/.test(cardNumValue)) {
        cardNumber.style.borderColor = 'white';
        return true;
    }
    else {
        cardNumber.style.borderColor = 'red';
        return false;
    }
}

function cCValidator2 () {
    const cvv = document.querySelector('#cvv');
    const zipValue = zip.value;
    if (/\d{5}/.test(zipValue)) {
        zip.style.borderColor = 'white';
        return true;
    }
    else {
        zip.style.borderColor = 'red';
        return false;
    }
  }

function cCValidator3 () {
    const cvv = document.querySelector('#cvv');
    const cvvValue = cvv.value;

    if (/\d{3}/.test(cvvValue)) {
        cvv.style.borderColor = 'white';
        return true;
    }
    else {
        cvv.style.borderColor = 'red';
        return false;
    }
  }
// _______________________________________________________________________________________________________
// Event Listeners

const checkboxes = document.querySelectorAll('.activities input');

document.querySelector('.activities').addEventListener('change', (e) => {
    for (let i = 0; i < checkboxes.length; i++) {
        let currDateAndTime = checkboxes[i].getAttribute('data-day-and-time');
        let targetDateAndTime = e.target.getAttribute('data-day-and-time');
        if (currDateAndTime === targetDateAndTime && checkboxes[i] !== e.target) {
        // if target is currently being checked, disable conflicting checkboxes; if it's being unchecked
        // enable all the checkboxes again
            if (e.target.checked) {
                checkboxes[i].disabled = true;
            }
            else {
                checkboxes[i].disabled = false;
            // end if
            }
        // end if
        }
    // end for
    }
// end listener
})

// create event listener to create and display a running total of the activities' costs 
// event listener should be placed on the checkboxes variable
document.querySelector('.activities').addEventListener('change', (e) => {
    // remove any previous total cost p elements 
    if (document.querySelector('.activities p')) {
        document.querySelector('.activities').removeChild(document.querySelector('.activities p'));
    }
    // create variable to hold total value of selected activities
    let total = 0;
    // loop through checkboxes
    for (let i = 0; i < checkboxes.length; i++) {
        // if the checkbox is checked...
        if (checkboxes[i].checked) {
            // add data-cost value of the checked box to total
            total += parseInt(checkboxes[i].getAttribute('data-cost'));
        // end if
        }      
    // end for
    }
    // if total has a value, append the total below the checkboxes
    if (total > 0) {
        // create a p element
        let totalP = document.createElement('p');
        // set textContent of totalP to the total
        totalP.textContent = `Total cost: $${total.toString()}.00`
        // place the p element below checkboxes
        document.querySelector('.activities').appendChild(totalP)
    }
});

// select the 'JS puns' theme option
const jSPuns = document.querySelector('#js-puns');
// select the 'I Love JS' option
const iLoveJS = document.querySelector('#i-love-js')

// select the theme dropdown menu
const themeDrop = document.querySelector('#design');
// eventListener that listens for if the selected theme is 'JS Puns' or 'I Love JS'
themeDrop.addEventListener('change', (e) => {
    let targetValue = e.target.value;
    // if 'JS Puns' is selected, display Cornflower, Dark Slate Grey and Gold
    if (targetValue === 'js puns') {
        shirtColorDiv.hidden = false;
        shirtColorOptions[0].hidden = false;
        shirtColorOptions[1].hidden = false;
        shirtColorOptions[2].hidden = false;
        shirtColorOptions[3].hidden = true;
        shirtColorOptions[4].hidden = true;
        shirtColorOptions[5].hidden = true;
    // end if
    // if I Love JS is selected, display Tomato,Steel Blue and Dim Grey
    } else if (targetValue === 'heart js') {
        shirtColorDiv.hidden = false;
        shirtColorOptions[0].hidden = true;
        shirtColorOptions[1].hidden = true;
        shirtColorOptions[2].hidden = true;
        shirtColorOptions[3].hidden = false;
        shirtColorOptions[4].hidden = false;
        shirtColorOptions[5].hidden = false;
    // end else if
    } else if (targetValue === 'select-theme') {
        shirtColorDiv.hidden = true;
    // end else if
    }

});

// create placeholder for the Job Role dropdown;
const titlePH = document.createElement('option');
titlePH.textContent = 'Your Job Role'
title.insertBefore(titlePH, title.firstElementChild)
titlePH.selected = true;

const otherJobRoleTextInput = document.querySelector('#other-title');
otherJobRoleTextInput.className = 'is-hidden';
// 'change' event listener to listen for if the drop down menu is changed to 'other'
title.addEventListener('change', (e) => {
    if (title.value === 'other') {
        otherJobRoleTextInput.className = '';
    }
});

// ___________________________________________________________________________________________________________

/*
Submit listener - when the 'Register button is clicked', the form is 
validated and the input values are submitted if all of the validator functions pass
*/

form.addEventListener('submit', (e) => {
    // call the validator functions
    nameValidator();
    emailValidator1();
    emailValidator2();
    titleValidator();
    activityValidator();
    cCValidator();
    cCValidator2();
    cCValidator3();
    
    // Create an if statement
    if (!nameValidator()) {
        // prevents the page from reloading if the validator function evaluates to false
        e.preventDefault();
    }; 
    
    if (!emailValidator1()) {
        e.preventDefault();
    };
    
    if (!emailValidator2()) {
        e.preventDefault();
    }; 

    if (!titleValidator()) {
        e.preventDefault();
    }; 

    if (!activityValidator()) {
        e.preventDefault();
    }; 

    if (!cCValidator()) {
        e.preventDefault();
    }; 

    if (!cCValidator2()) {
        e.preventDefault();
    }; 
    
    if (!cCValidator3()) {
        e.preventDefault();
    }; 
  });

email.addEventListener('keyup', (e) => {
    
    emailValidator1();
    emailValidator2();

    if (!emailValidator1()) {
        e.preventDefault();
    }; 

    if (!emailValidator2()) {
        e.preventDefault();
    }; 
});



