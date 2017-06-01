(function() {
  var form = document.querySelector("form");
  var firstNameField = document.getElementById("firstName");
  var lastNameField = document.getElementById("lastName");
  var messageField = document.getElementById("message");

  var firstNameVal = document.getElementById("firstNameVal");
  var lastNameVal = document.getElementById("lastNameVal");
  var messageVal = document.getElementById("messageVal");


  form.addEventListener("submit", function(e) {
    e.preventDefault();

    if(!firstNameField.value) {
      firstNameVal.className += " validation";
      firstNameVal.classList.remove("displayNone");
    } else {
      firstNameVal.className += " displayNone";
      firstNameVal.classList.remove("validation");
    }

    if(!lastNameField.value) {
      lastNameVal.className += " validation";
      lastNameVal.classList.remove("displayNone");
    } else {
      lastNameVal.className += " displayNone";
      lastNameVal.classList.remove("validation");
    }

    if(!messageField.value) {
      messageVal.className += " validation";
      messageVal.classList.remove("displayNone");
    } else {
      messageVal.className += " displayNone";
      messageVal.classList.remove("validation");
    }
  })
})();
