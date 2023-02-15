function displayDetails() {
  var employeId = document.getElementById("employee_id").value;
  var name = document.getElementById("name").value;
  var mobileNumber = document.getElementById("mobile_number").value;
  var email = document.getElementById("email").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var country = document.getElementById("country").value;
  var pinCode = document.getElementById("pin_code").value;

  //   console.log(name);
  //   console.log(age);
  //   console.log(email);
  //   console.log(city);

  var takeId = document.getElementById("table_id");
  var row = document.createElement("tr");
  takeId.appendChild(row);

  var col0 = row.appendChild(document.createElement("td"));
  var col1 = row.appendChild(document.createElement("td"));
  var col2 = row.appendChild(document.createElement("td"));
  var col3 = row.appendChild(document.createElement("td"));
  var col4 = row.appendChild(document.createElement("td"));
  var col5 = row.appendChild(document.createElement("td"));
  var col6 = row.appendChild(document.createElement("td"));
  var col7 = row.appendChild(document.createElement("td"));

  col0.innerHTML = employeId;
  col1.innerHTML = name;
  col2.innerHTML = mobileNumber;
  col3.innerHTML = email;
  col4.innerHTML = city;
  col5.innerHTML = state;
  col6.innerHTML = country;
  col7.innerHTML = pinCode;

  //   document.getElementById("showName").innerHTML = name;
  //   document.getElementById("showAge").innerHTML = age;
  //   document.getElementById("showEmail").innerHTML = email;
  //   document.getElementById("showCity").innerHTML = city;
  // }
}
