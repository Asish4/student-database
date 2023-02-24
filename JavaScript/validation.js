function clearErrors() {
    errors = document.getElementsByClassName("formerror");
    for (let item of errors) {
        item.innerHTML = "";
    }
}

function setError(id, error) {
    var element = document.getElementById(id);
    element.getElementsByClassName("formerror")[0].innerHTML = error;
}

function validateForm() {
    var returnval = true;
    clearErrors();

    var name = document.forms["myForm"]["name"].value;
    // console.log(name);

    if (name.length < 5) {
        setError("name-id", "*length of name is too short");
        returnval = false;
    }

    var phone = document.forms["myForm"]["mobile_number"].value;
    if (phone.length != 10) {
        setError("mobile-id", "*Phone number must be 10 digit");
        returnval = false;
    }
    if (phone.charAt(0) != 6 && phone.charAt(0) != 7 && phone.charAt(0) != 8 && phone.charAt(0) != 9) {
        setError("mobile-id", "*Number should start with 6,7,8,9");
        returnval = false;
    }

    var email = document.forms["myForm"]["email"].value;
    if (email.indexOf("@") <= 0) {
        setError("email-id", "*Invalid @ position");
        returnval = false;
    }
    var email = document.forms["myForm"]["email"].value;
    if ((email.charAt((email.length)-4) != '.') && (email.charAt((email.length)-3) != '.')) {
        setError("email-id", "*Invalid . position");
        returnval = false;
    }

    var city = document.forms["myForm"]["city"].value;
    if (city== " ") {
        setError("city-id", "*Please Select your city");
        returnval = false;
    }

    var state = document.forms["myForm"]["state"].value;
    if (state == " ") {
        setError("state-id", "*Please Select your state");
        returnval = false;
    }
    var country = document.forms["myForm"]["country"].value;
    if (country== " ") {
        setError("country-id", "*Please Select your city");
        returnval = false;
    }

    // var id = document.forms["myForm"]["employee_id"].value;

    // var t_id = document.getElementById("table_id");
    // console.log (t_id.rows[2].cells[0]);

    // t_id.rows.length
    // if ( ) {
    //     setError("employee_id", "*Id already exist");
    //     returnval = false;
    // }



    formSubmitCheck(returnval);

    return returnval;
}
