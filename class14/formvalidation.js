const displaymsg = (msg, id, colorName) => {
    document.getElementById(id).innerHTML = msg;
    document.getElementById(id).style.color = colorName;
};

const fnamevalidate = () => {
    let fname = document.getElementById('fname').value;
    
    if (fname === "") {
        displaymsg('Must provide first name', 'fnamemsg', 'red');
        return false;
    } else if (fname.length < 3) {
        displaymsg('First name must be at least 3 characters', 'fnamemsg', 'red');
        return false;
    } else if (!fname.match(/^([a-zA-Z])+$/)) {
        displaymsg('First name can only contain letters', 'fnamemsg', 'red');
        return false;
    } else {
        displaymsg('First name is valid', 'fnamemsg', 'green');
        return true;
    }
};



const lnamevalidate = () => {
    let llname = document.getElementById('lname').value;
    if (llname === "") {
        displaymsg('Must provide Lastt name', 'lnamemsg', 'red');
        return false;
    } else if (llname.length < 3) {
        displaymsg('Last name must be at least 3 characters', 'lnamemsg', 'red');
        return false;
    } else {
        displaymsg('First name is valid', 'lnamemsg', 'green');
        return true;
    }
};

// <!--regular expression(regex is sequences of charecters which is used to define search pattern
// <!-- regular expression/
// ^ - it checks from start 

// $ - it checks from end
// [a-z] - it checks for all the small letters
// [A-Z] - it checks for all the capital letters
// [0-9] - it checks for all the digits
// [a-zA-Z0-9] - it checks for all the small letters, capital letters
// and digits
// [^a-zA-Z0-9] - it checks for all the special characters
// [!@#$%^&*()_+=-{};:'<>,./?] -
//     it checks for all the special characters
// . - it matches the single charecter
// * - it checks for zero or more than one
// + - it checks for one or more than one
// ? - it checks for zero or one
// ?= - it matches the postion of charecter from all sides

//     -->



