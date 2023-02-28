//Declare Global variable
var x;
var y;
var c;

function displayDetails() {

    // Get elements of input field
    var id = document.getElementById("employee_id");
    var name = document.getElementById("name");
    var ph = document.getElementById("mobile_number");
    var mail = document.getElementById("email");
    var city = document.getElementById("city");
    var state = document.getElementById("state");
    var country = document.getElementById("country");
    var pin = document.getElementById("pin_code");

    // If all the validation are true then submit button will work
    if (validateAll(id, name, ph, mail, city, state, country, pin)) {
        var employeId = document.getElementById("employee_id").value;
        var name = document.getElementById("name").value;
        var mobileNumber = document.getElementById("mobile_number").value;
        var email = document.getElementById("email").value;
        var city = document.getElementById("city").value;
        var state = document.getElementById("state").value;
        var country = document.getElementById("country").value;
        var pinCode = document.getElementById("pin_code").value;


        // Storing the table elements in a variable using table is
        var takeId = document.getElementById("table_id");

        // Creating a tr(Table row) element and store the element in row variable
        var row = document.createElement("tr");
        // Adding a row(child) to the table(patrnt)
        takeId.appendChild(row);

        // add the "td"(Child) to the "tr"(Parent) and stote the "td" elements in a vaiable like col0
        var col0 = row.appendChild(document.createElement("td"));
        var col1 = row.appendChild(document.createElement("td"));
        var col2 = row.appendChild(document.createElement("td"));
        var col3 = row.appendChild(document.createElement("td"));
        var col4 = row.appendChild(document.createElement("td"));
        var col5 = row.appendChild(document.createElement("td"));
        var col6 = row.appendChild(document.createElement("td"));
        var col7 = row.appendChild(document.createElement("td"));
        var col8 = row.appendChild(document.createElement("td"));
        var col9 = row.appendChild(document.createElement("td"));

        // Add data in column
        col0.innerHTML = employeId;
        col1.innerHTML = name;
        col2.innerHTML = mobileNumber;
        col3.innerHTML = email;
        col4.innerHTML = city;
        col5.innerHTML = state;
        col6.innerHTML = country;
        col7.innerHTML = pinCode;
        col8.innerHTML =
            '<button type="button" class="btn btn-outline-info" data-toggle="modal" onclick="myFunction(this); showValues();"  data-target="#editModal"><i class="fa-solid fa-pen-to-square"></i></button>';
        col9.innerHTML =
            '<button type="button" class="btn btn-outline-danger" data-toggle="modal" onclick="myFunction(this)" data-target="#exampleModal"> <i class="fa-solid fa-trash"></i></button>';

        // Call the toast function
        showSubmitToast();
    }
}

//Show Submit toast
function showSubmitToast() {
    console.log("Working");
    var a = document.getElementById("submit_toast");
    var b = new bootstrap.Toast(a);
    b.show();
}

// Store button element in a global variable
function myFunction(i) {
    x = i;
}

// Delete Function
function del() {
    var row_parent = x.parentNode.parentNode;
    var table_parent = row_parent.parentNode;

    table_parent.removeChild(row_parent);
}

// Show delete toast
function showDeleteToast() {
    var a = document.getElementById("t");
    var b = new bootstrap.Toast(a);
    b.show();
}




// Show date after Edit
function showDetails() {
    var a = x.parentNode.parentNode;


    var name = document.getElementById("name_ids");
    var ph = document.getElementById("mobile_ids");
    var mail = document.getElementById("email_ids");
    var city = document.getElementById("city_ids");
    var state = document.getElementById("state_ids");
    var country = document.getElementById("country_ids");
    var pin = document.getElementById("p_id");


    if (validatemAll(name, ph, mail, city, state, country, pin)) {
        var employeId = document.getElementById("employee_ids").value;
        var name = document.getElementById("name_ids").value;
        var mobileNumber = document.getElementById("mobile_ids").value;
        var email = document.getElementById("email_ids").value;
        var city = document.getElementById("city_ids").value;
        var state = document.getElementById("state_ids").value;
        var country = document.getElementById("country_ids").value;
        var pinCode = document.getElementById("p_id").value;

        a.childNodes[0].innerHTML = employeId;
        a.childNodes[1].innerHTML = name;
        a.childNodes[2].innerHTML = mobileNumber;
        a.childNodes[3].innerHTML = email;
        a.childNodes[4].innerHTML = city;
        a.childNodes[5].innerHTML = state;
        a.childNodes[6].innerHTML = country;
        a.childNodes[7].innerHTML = pinCode;


        // Call the toast function
        showSubmitToast();
    }
}

//Show values on modal form
function showValues() {
    var a = x.parentNode.parentNode;

    document.getElementById("employee_ids").value = a.childNodes[0].innerHTML;
    document.getElementById("name_ids").value = a.childNodes[1].innerHTML;
    document.getElementById("mobile_ids").value = a.childNodes[2].innerHTML;
    document.getElementById("email_ids").value = a.childNodes[3].innerHTML;
    document.getElementById("city_ids").value = a.childNodes[4].innerHTML;
    document.getElementById("state_ids").value = a.childNodes[5].innerHTML;
    document.getElementById("country_ids").value = a.childNodes[6].innerHTML;
    document.getElementById("p_id").value = a.childNodes[7].innerHTML;
}





