// select name input
const userName = document.querySelector('#name');
// focus on name input
userName.focus();

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
    } else {

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
    console.log(e.target.value);
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
    } else {
        console.log('wha?')
    }
});

// select Job Role dropdown
const titleDrop = document.querySelector('#title');
// console.log(otherOption)
const otherJobRoleTextInput = document.querySelector('#other-title')
// 'change'event listener to listen for if the drop down menu is changed to 'other'
titleDrop.addEventListener('change', (e) => {
    if (titleDrop.value === 'other') {
        otherJobRoleTextInput.className = '';
    }
});





