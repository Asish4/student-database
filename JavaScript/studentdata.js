//Declare Global variable
var x;
var y;
var c;


//API GET
var url = url = "http://192.168.0.107:8080/students"

param = {
    method: "get",
    headers: {
        "Content-Type": "application/json"
    },

}
fetch(url, param).then((response) => {
    return response.json();
}).then((Data) => {
    data = Data;


    var employeId = document.getElementById("employee_id").value;
    var name = document.getElementById("name").value;
    var mobileNumber = document.getElementById("mobile_number").value;
    var email = document.getElementById("email").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;
    var pinCode = document.getElementById("pin_code").value;
    // var pinCode = document.getElementById("pin_code").value;

    for (let index = 0; index < data.length; index++) {
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
        col0.innerHTML = data[index].id;
        col1.innerHTML = data[index].name;
        col2.innerHTML = data[index].phoneNo;
        col3.innerHTML = data[index].email;
        col4.innerHTML = data[index].city;
        col5.innerHTML = data[index].state;
        col6.innerHTML = data[index].country;
        col7.innerHTML = data[index].pin;
        col8.innerHTML =
            '<button type="button" class="btn btn-outline-info" data-toggle="modal" onclick="myFunction(this); showValues();"  data-target="#editModal"><i class="fa-solid fa-pen-to-square"></i></button>';
        col9.innerHTML =
            '<button type="button" class="btn btn-outline-danger" data-toggle="modal" onclick="myFunction(this)" data-target="#exampleModal"> <i class="fa-solid fa-trash"></i></button>';
    }
})


// Display values in the table after submit
function displayDetails() {


    var id = document.getElementById("employee_id");
    if (validateID(id)) {
        var idv = id.value;
    }
    var name = document.getElementById("name");
    if (validateName(name)) {
        var namev = name.value;
    }
    var ph = document.getElementById("mobile_number");
    if (validatePh(ph)) {
        var phv = ph.value;
    }
    var mail = document.getElementById("email-id");
    if (validateMail(mail)) {
        var mailv = mail.value;
    }
    var city = document.getElementById("city-id");
    if (validateCity(city)) {
        var cityv = city.value;
    }
    var state = document.getElementById("state");
    if (validateState(state)) {
        var statev = state.value;
    }
    var country = document.getElementById("country");
    if (validateCountry(country)) {
        var countryv = country.value;
    }
    var pin = document.getElementById("pin_code");
    if (validatePIN(pin)) {
        var pinv = pin.value;
    }


    if (validateAllMainForm(id, name, ph, mail, city, state, country, pin)) {

        //API POST
        datas = {
            "name": document.getElementById("name").value,
            "phoneNo": document.getElementById("mobile_number").value,
            "email": document.getElementById("email").value,
            "state": document.getElementById("state").value,
            "city": document.getElementById("city").value,
            "country": document.getElementById("country").value,
            "pin": document.getElementById("pin_code").value
        }

        console.log(datas);
        var url = url = "http://192.168.0.107:8080/students"

        param = {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(datas)

        }
        fetch(url, param).then((response) => {
            return response.json();
        }).then((Data) => {


        })


    }



}

//Show Submit toast
function showSubmitToast() {
    console.log("Working");
    var a = document.getElementById("submit_toast");
    var b = new bootstrap.Toast(a);
    b.show();
}




function myFunction(i) {
    x = i;
}

// Delete Function
function del() {
    var a = x.parentNode.parentNode;
    var myId = document.getElementById("employee_ids").value = a.childNodes[0].innerHTML;

    var url = url = "http://192.168.0.107:8080/students"
    url = url + "/" + myId
    console.log(url);

    param = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },


    }
    fetch(url, param).then((response) => {
        return response.json();
    }).then((Data) => {


    })




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
    console.log(a);

    var idv = document.getElementById("employee_ids");
    var name = document.getElementById("name_ids");
    if (validateName(name)) {
        var namev = name.value;
    }
    var ph = document.getElementById("mobile_ids");
    if (validatePh(ph)) {
        var phv = ph.value;
    }
    var mail = document.getElementById("email_ids");
    if (validateMail(mail)) {
        var mailv = mail.value;
    }
    var city = document.getElementById("city_ids");
    if (validateCity(city)) {
        var cityv = city.value;
    }
    var state = document.getElementById("state_ids");
    if (validateState(state)) {
        var statev = state.value;
    }
    var country = document.getElementById("country_ids");
    if (validateCountry(country)) {
        var countryv = country.value;
    }
    var pin = document.getElementById("p_id");
    if (validatePIN(pin)) {
        var pinv = pin.value;
    }

    if (validateAllModalForm(name, ph, mail, city, state, country, pin)) {

        var myId = document.getElementById("employee_ids").value = a.childNodes[0].innerHTML;
        console.log(myId);

        // API PUT
        datas = {
            "name": document.getElementById("name_ids").value,
            "phoneNo": document.getElementById("mobile_ids").value,
            "email": document.getElementById("email_ids").value,
            "state": document.getElementById("state_ids").value,
            "city": document.getElementById("city_ids").value,
            "country": document.getElementById("country_ids").value,
            "pin": document.getElementById("p_id").value
        }
        // console.log(JSON.stringify(datas));
        console.log("HEllo");
        var url = url = "http://192.168.0.107:8080/students"
        url = url + "/" + myId
        console.log(url);

        param = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(datas)

        }
        fetch(url, param).then((response) => {
            return response.json();
        }).then((Data) => {


        })

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












