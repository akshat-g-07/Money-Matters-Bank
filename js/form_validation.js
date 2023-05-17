function setError(error) {
  var element = document.getElementById("errorout");
  element.innerHTML = error;
}

function validateForm() {
  var dob_val = document.forms["registerationform"]["dob"].value;
  var dob_date = new Date(dob_val);
  var date_today = new Date();
  if (date_today.getFullYear() - dob_date.getFullYear() < 18) {
    setError("You should be at least 18 years old.");
    return false;
  }

  var phone_no = document.forms["registerationform"]["phoneno"].value;
  if (phone_no.length != 10) {
    setError("Phone No. should be 10 digits.");
    return false;
  }

  var phone_digits = /^\d+$/;
  if (!phone_digits.test(phone_no)) {
    setError("Phone No. should contain only digits [0-9].");
    return false;
  }

  var fpassword = document.forms["registerationform"]["fpass"].value;
  if (fpassword.length < 8) {
    setError("Password should be at least 8 characters.");
    return false;
  }

  const lower_case = /[a-z]/;
  if (!lower_case.test(fpassword)) {
    setError("Password should contain at least 1 lower case [a-z].");
    return false;
  }

  const upper_case = /[A-Z]/;
  if (!upper_case.test(fpassword)) {
    setError("Password should contain at least 1 upper case [A-Z].");
    return false;
  }

  const digits = /[0-9]/;
  if (!digits.test(fpassword)) {
    setError("Password should contain at least 1 digits [0-9].");
    return false;
  }

  var cpassword = document.forms["registerationform"]["cpass"].value;
  if (cpassword != fpassword) {
    setError("Passwords don't match.");
    return false;
  }

  return true;
}
