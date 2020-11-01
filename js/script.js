// define global variables
const userName = document.querySelector('#name');
const form = document.querySelector("form");
const email = document.querySelector("#mail");
const title = document.querySelector("#title");
const activitiesContainer = document.querySelector(".activities");
const activitiesInputs = document.querySelectorAll(".activities input");

// focus on name input, when the page initially loads
userName.focus();

// create behavior for the 'T-Shirt Info' section
const shirtColorOptions = document.querySelectorAll('#color option');
for (let i = 0; i <shirtColorOptions.length; i++) {
    shirtColorOptions[i].hidden = true;
}
// select the shirt color dropdown menu
const shirtColorDrop = document.querySelector('#color');
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

// event listener for if payment dropdown is changed
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

// create a new span element
const activityMessage = document.createElement('span');
// add the message's text content to the span
activityMessage.textContent = 'At least one checkbox must be checked.';
// set the span's color to red
activityMessage.style.color = 'red';
// set the span's hidden attribute to true
activityMessage.style.backgroundColor = 'white';
activityMessage.hidden = true;
// append the span to the fieldset
activitiesContainer.insertBefore(activityMessage, activitiesContainer.firstElementChild);

// _____________________________________________________________________________________________________
// Form Validation

function nameValidator () {
    // variable to store name
    const nameVal = userName.value;
      // If the name value.length is greater than zero, set the name input's border to white and return true
    if (nameVal.length > 0) {
      userName.style.borderColor = 'white';
      return true;
    }
      // Else, set the name input's border to red and return false
    else {
      userName.style.borderColor = 'red';
      return false;
    }
}

function emailValidator1 () {
    const emailVal = email.value;
    if (emailVal.length > 0) {
      email.style.borderColor = 'white';
      return true;
    }
      // Else, set the name input's border to red and return false
    else {
      email.style.borderColor = 'red';
      return false;
    }
}

function emailValidator2 () {

    // Create a variable to store the `.value` of the `email` input and log it out
    const emailVal = email.value;
    // Call this `emailValidator` function in the submit listener below 
      // To test it, type something in the email field on the form and click the submit button
  
    // Create a variable to store the .indexOf of the `@` in the email value
    const atIndex = emailVal.indexOf('@');
    // Create a variable to store the .lastIndexOf of the `.` in the email value
    const dotLastIdx = emailVal.lastIndexOf('.')
    // Create an if/else statement
      // If the `@` index is greater than one AND the `.` last index is greater than the `@` index + 1, 
    if (atIndex > 1 && dotLastIdx > (atIndex + 1)) {
        // Set the email's border to white and return true
        email.style.borderColor = 'white';
        return true;
    }
      // Else, set the email's border to red and return false
    else {
        email.style.borderColor = 'red';
        return false;
    }
}

function titleValidator () {

    // create a variable to store the `.value` of the `title` element and log it out
    const titleVal = title.value;
  
    // Create an if/else statement
    if (titleVal !== 'Your Job Role') {
        title.style.borderColor = 'white';
        return true;
    } else {
        title.style.borderColor = 'red';
        return false;
    }
}

const activityValidator = () => {
    // Loop over the languagesInputs
    for (let i = 0; i < activitiesInputs.length; i++) {
        if (activitiesInputs[i].checked) {
            return true;
        }
    }
    activityMessage.hidden = false;
    return false;
}

function cCValidator () {
    const cardNumber = document.querySelector('#cc-num');
    // Create a variable to store the `.value` of the `email` input and log it out
    const cardNumValue = cardNumber.value;
    // Call this `emailValidator` function in the submit listener below 
      // To test it, type something in the email field on the form and click the submit button

    // Create an if/else statement
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
    // Create a variable to store the `.value` of the `email` input and log it out
    const zipValue = zip.value;
    // Create an if/else statement
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
    // Create a variable to store the `.value` of the `email` input and log it out
    const cvvValue = cvv.value;
    // Call this `emailValidator` function in the submit listener below 
    // To test it, type something in the email field on the form and click the submit button

    // Create an if/else statement
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

// select all of the checkboxes and add to a variable
const checkboxes = document.querySelectorAll('.activities input');

// create event listener to handle what happens when the Activities checkboxes are checked
document.querySelector('.activities').addEventListener('change', (e) => {
    // loop through the checkboxes 
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

// select the JS puns theme option
const jSPuns = document.querySelector('#js-puns');
// select the I Love JS option
const iLoveJS = document.querySelector('#i-love-js')

// select the theme dropdown menu
const themeDrop = document.querySelector('#design');
// eventListener that listens for if the selected theme is 'JS Puns' or 'I Love JS'
themeDrop.addEventListener('change', (e) => {
    let targetValue = e.target.value;
    // if 'JS Puns' is selected, display Cornflower, Dark Slate Grey and Gold
    if (targetValue === 'js puns') {
        shirtColorOptions[0].hidden = false;
        shirtColorOptions[1].hidden = false;
        shirtColorOptions[2].hidden = false;
        shirtColorOptions[3].hidden = true;
        shirtColorOptions[4].hidden = true;
        shirtColorOptions[5].hidden = true;
    // end if
    // if I Love JS is selected, display Tomato,Steel Blue and Dim Grey
    } else if (targetValue === 'heart js') {
        shirtColorOptions[0].hidden = true;
        shirtColorOptions[1].hidden = true;
        shirtColorOptions[2].hidden = true;
        shirtColorOptions[3].hidden = false;
        shirtColorOptions[4].hidden = false;
        shirtColorOptions[5].hidden = false;
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
// 'change'event listener to listen for if the drop down menu is changed to 'other'
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





