function getRandomUpper() {
    // Upper case ASCII codes go from 65(A) - 90(Z)
    // Math.floor(Math.random * (max - min + 1)) + min.
    // to grab a random number from 65-90 inclusive.
    return String.fromCharCode(Math.floor(Math.random() *(90 - 65 + 1)) + 65);
    
}

function getRandomLower() {
    // lowerCase ASCII codes go from 97 - 122
    return String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97);
}

function getRandomNumber() {
    // numbers go from 48 - 57
    return String.fromCharCode(Math.floor(Math.random() * (57 - 48 + 1)) + 48);
}

function getRandomSymbol() {
    // only going to use symbols between 33 - 47.
    return String.fromCharCode(Math.floor(Math.random() * (47 - 33 + 1)) + 33);
}

function handleGenerateClick() {
    const passwordInput = document.querySelector('.password');
    const passLength = document.querySelector('#passLength').value;
    const checkboxes = [...document.querySelectorAll(`input[type=checkbox]`)];
    const functions = [];
    const upper = getRandomUpper;
    const lower = getRandomLower;
    const number = getRandomNumber;
    const symbol = getRandomSymbol;
    let counter = 0; 
    let password = '';

    for (const checkbox of checkboxes) {
       if (!checkbox.checked) {
           // don't care if it's not checked.
           continue;
       }

       switch (checkbox.name) {
           case 'upper':
               functions.push(upper);
               break;
            case 'lower':
                functions.push(lower);
                break;
            case 'number':
                functions.push(number);
                break;
            case 'symbol':
                functions.push(symbol);
                break;
            default:
                console.log('errr how the hell did you get here');
       }
    }
   
    if (functions.length === 0) {
        alert('Please select at least one password option');
        return;
    }

    while (counter < passLength) {
        randomFunc = functions[Math.floor(Math.random() * functions.length)];
        password = `${password}${randomFunc()}`;
        counter++;
    }

    passwordInput.value = password;
    
}

const btnGenerate = document.querySelector('.btn-Generate');
btnGenerate.addEventListener('click', handleGenerateClick);