
//Validating ID
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
        span.innerHTML = "Duplicate data!";
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

//Validating Name
function validateName(name) {
    var div = name.parentNode;
    var span = div.querySelector("#span");
    name = name.value;
    if (/^[a-zA-Z]+([ ][a-zA-Z]+)*$/.test(name)) {
        span.innerHTML = null;
        document.getElementById("button_id").disabled = false;
        return true;
    }
    else {
        span.innerHTML = "Please Check your name (A-Z/a-z)";
        document.getElementById("button_id").disabled = true;
        return false;
    }
}

//Validating Phone
function validatePh(ph) {
    var div = ph.parentNode;
    var span = div.querySelector("#span");
    ph = ph.value;
    if (/^\d{10}$/.test(ph)) {
        span.innerHTML = null;
        document.getElementById("button_id").disabled = false;
        return true;
    }
    else {
        span.innerHTML = "Enter Your 10 Digit no please";
        document.getElementById("button_id").disabled = true;
        return false;
    }
}

//Validating Mail
function validateMail(mail) {
    var div = mail.parentNode;
    var span = div.querySelector("#span");
    mail = mail.value;
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
        document.getElementById("button_id").disabled = false;
        span.innerHTML = null;

        return true;
    }
    else {
        document.getElementById("button_id").disabled = true;
        span.innerHTML = "Please check your mail";

        return false;
    }
}

//Validating City
function validateCity(city) {
    var div = city.parentNode;
    var span = div.querySelector("#span");
    city = city.value;
    if (city == "") {
        span.innerHTML = "Please Select your City";
        document.getElementById("button_id").disabled = true;

        return false;
    }
    else {
        span.innerHTML = null;
        document.getElementById("button_id").disabled = false;
        return true;
    }
}

//Validating State
function validateState(state) {
    var div = state.parentNode;
    var span = div.querySelector("#span");
    state = state.value;
    if (state == "") {
        span.innerHTML = "Please Select your State";
        document.getElementById("button_id").disabled = true;
        return false;
    }
    else {
        span.innerHTML = null;
        document.getElementById("button_id").disabled = false;
        return true;
    }
}

//Validating Country
function validateCountry(country) {
    var div = country.parentNode;
    var span = div.querySelector("#span");
    country = country.value;
    if (country == "") {
        span.innerHTML = "Please Select your Country";
        document.getElementById("button_id").disabled = true;
        return false;
    }
    else {
        span.innerHTML = null;
        document.getElementById("button_id").disabled = false;
        return true;
    }
}

//Validating PIN
function validatePIN(pin) {
    var div = pin.parentNode;
    var span = div.querySelector("#span");
    pin = pin.value;
    if (/^\d{5,6}$/.test(pin)) {
        span.innerHTML = null;
        document.getElementById("button_id").disabled = false;
        return true;
    }
    else {
        span.innerHTML = "Please enter 5/6 digit PIN";
        document.getElementById("button_id").disabled = true;
        return false;
    }
}

//Checking if everything is validated or not in the Main Form
function validateAll(id, name, ph, mail, city, state, country, pin) {
    if (validateID(id) && validateName(name) && validatePh(ph) && validateMail(mail) && validateCity(city)
        && validateState(state) && validateCountry(country) && validatePIN(pin)) {
        return true;
    }
    else {
        return false;
    }
}

//Checking if everything is validated or not in the Modal Edit
function validatemAll(name, ph, mail, city, state, country, pin) {
    if (validateName(name) && validatePh(ph) && validateMail(mail) && validateCity(city)
        && validateState(state) && validateCountry(country) && validatePIN(pin)) {
        return true;
    }
    else {
        return false;
    }
}