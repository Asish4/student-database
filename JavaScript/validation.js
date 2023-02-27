//Validating ID in form
function validateID(id) {
    var div = id.parentNode;
    var span = div.querySelector("#span");
    id = id.value;
    var len = document.getElementById("table_id").rows.length;
    var n = 0;
    var i;
    for (i = 1; i < len; i++) {
        if (id == document.getElementById("table_id").rows[i].cells[0].innerHTML) {
            n++;
            break;
        }
    }
    if (n > 0) {
        span.innerHTML = "You Entered Duplicate data";
        id = null;
        return false;
    }
    else if (/^\d{1,2}$/.test(id)) {
        span.innerHTML = null;
        return true;
    }
    else {
        span.innerHTML = "ID should be in between 0-99";
        id = null;
        return false;
    }
}

//Validating Name in form
function validateName(name) {
    var div = name.parentNode;
    var span = div.querySelector("#span");
    name = name.value;
    if (/^[a-zA-Z]+([ ][a-zA-Z]+)*$/.test(name)) {
        span.innerHTML = null;
        return true;
    }
    else {
        span.innerHTML = "Please Check your name (A-Z/a-z)";
        return false;
    }
}

//Validating Mobile Number in form
function validatePh(mobile) {
    var div = mobile.parentNode;
    var span = div.querySelector("#span");
    mobile = mobile.value;
    if (/^\d{10}$/.test(mobile)) {
        span.innerHTML = null;
        return true;
    }
    else {
        span.innerHTML = "Enter Your 10 Digit Mobile Number ";
        return false;
    }
}

//Validating Gmail in form
function validateMail(mail) {
    var div = mail.parentNode;
    var span = div.querySelector("#span");
    mail = mail.value;
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
        span.innerHTML = null;
        return true;
    }
    else {
        // span.innerHTML = "Please check your mail";
        return true;
    }
}

//Validating City in form
function validateCity(city) {
    var div = city.parentNode;
    var span = div.querySelector("#span");
    city = city.value;
    if (city == "") {
        span.innerHTML = "Please Select your City";
        return false;
    }
    else {
        span.innerHTML = null;
        return true;
    }
}

//Validating State in form
function validateState(state) {
    var div = state.parentNode;
    var span = div.querySelector("#span");
    state = state.value;
    if (state == "") {
        span.innerHTML = "Please Select your State";
        return false;
    }
    else {
        span.innerHTML = null;
        return true;
    }
}

//Validating Country in form
function validateCountry(country) {
    var div = country.parentNode;
    var span = div.querySelector("#span");
    country = country.value;
    if (country == "") {
        span.innerHTML = "Please Select your Country";
        return false;
    }
    else {
        span.innerHTML = null;
        return true;
    }
}

//Validating PinCode in form
function validatePIN(pin) {
    var div = pin.parentNode;
    var span = div.querySelector("#span");
    pin = pin.value;
    if (/^\d{5,6}$/.test(pin)) {
        span.innerHTML = null;
        return true;
    }
    else {
        span.innerHTML = "Please enter 5-6 PIN";
        return false;
    }
}

//Check validated or not in the Main form
function validateAllMainForm(id, name, ph, mail, city, state, country, pin) {
    if (validateID(id) && validateName(name) && validatePh(ph) && validateMail(mail) && validateCity(city)
        && validateState(state) && validateCountry(country) && validatePIN(pin)) {
        return true;
    }
    else {
        return false;
    }
}

//Check validated or not in the Modal form
function validateAllModalForm(name, ph, mail, city, state, country, pin) {
    if (validateName(name) && validatePh(ph) && validateMail(mail) && validateCity(city)
        && validateState(state) && validateCountry(country) && validatePIN(pin)) {
        return true;
    }
    else {
        return false;
    }
}

