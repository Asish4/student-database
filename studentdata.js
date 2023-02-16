var x;

function displayDetails() {
  var employeId = document.getElementById("employee_id").value;
  var name = document.getElementById("name").value;
  var mobileNumber = document.getElementById("mobile_number").value;
  var email = document.getElementById("email").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var country = document.getElementById("country").value;
  var pinCode = document.getElementById("pin_code").value;
  // var pinCode = document.getElementById("pin_code").value;

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

  // Add data in column
  col0.innerHTML = employeId;
  col1.innerHTML = name;
  col2.innerHTML = mobileNumber;
  col3.innerHTML = email;
  col4.innerHTML = city;
  col5.innerHTML = state;
  col6.innerHTML = country;
  col7.innerHTML = pinCode;
  // col8.innerHTML = '<button type="button" onclick="edit()">Edit</button>';
  col8.innerHTML =
    '<button type="button" class="btn btn-primary" data-toggle="modal" onclick="myFunction(this)" data-target="#exampleModal" >Delete</button>';
}

function myFunction(i) {
  x = i;
  console.log(i.parentNode.parentNode);
}

// Delete Function
function del() {
  var row_parent = x.parentNode.parentNode;
  var table_parent = row_parent.parentNode;

  table_parent.removeChild(row_parent);
}

// function edit() {
//   var employeId = document.getElementById("employee_id").value;
//   var name = document.getElementById("name").value;
//   var mobileNumber = document.getElementById("mobile_number").value;
//   var email = document.getElementById("email").value;
//   var city = document.getElementById("city").value;
//   var state = document.getElementById("state").value;
//   var country = document.getElementById("country").value;
//   var pinCode = document.getElementById("pin_code").value;
// }
