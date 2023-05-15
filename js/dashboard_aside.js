const dropDown = document.getElementById("transaction_type");

dropDown.addEventListener("change", () => {
  const depElement = document.getElementById("deposit");
  const withElement = document.getElementById("withdraw");
  const transferElement = document.getElementById("transfer");
  document.getElementById("show_error").innerHTML = "";
  switch (dropDown.value) {
    case "deposit":
      depElement.style.height = "250px";
      withElement.style.height = "0px";
      transferElement.style.height = "0px";
      break;
    case "withdraw":
      withElement.style.height = "250px";
      transferElement.style.height = "0px";
      depElement.style.height = "0px";
      break;
    case "transfer":
      transferElement.style.height = "300px";
      withElement.style.height = "0px";
      depElement.style.height = "0px";
      break;
    default:
      withElement.style.height = "0px";
      depElement.style.height = "0px";
      transferElement.style.height = "0px";
      break;
  }
});

function depositValidation() {
  var depositAmnt = document.getElementById("deposit_amnt").value;
  var digits = /^\d+$/;
  if (depositAmnt == "") {
    document.getElementById("show_error").innerHTML =
      "Please enter some value to deposit!";
    return false;
  } else if (!digits.test(depositAmnt)) {
    document.getElementById("show_error").innerHTML =
      "Please enter digits only!";
    return false;
  } else if (depositAmnt < 1000) {
    document.getElementById("show_error").innerHTML =
      "Please deposit at least Rs. 1000!";
    return false;
  } else if (depositAmnt > 50000) {
    document.getElementById("show_error").innerHTML =
      "You can deposit only maximum of Rs. 50,000 in one day!";
    return false;
  } else {
    document.getElementById("show_error").innerHTML =
      "Your deposit is successful!";
    return true;
  }
}

function withdrawValidation() {
  var withdrawAmnt = document.getElementById("withdraw_amnt").value;
  var digits = /^\d+$/;
  if (withdrawAmnt == "") {
    document.getElementById("show_error").innerHTML =
      "Please enter some value to withdraw!";
    return false;
  } else if (!digits.test(withdrawAmnt)) {
    document.getElementById("show_error").innerHTML =
      "Please enter digits only!";
    return false;
  } else if (withdrawAmnt < 1000) {
    document.getElementById("show_error").innerHTML =
      "Please withdraw at least Rs. 1000!";
    return false;
  } else if (withdrawAmnt > 50000) {
    document.getElementById("show_error").innerHTML =
      "You can withdraw only maximum of Rs. 50,000 in one day!";
    return false;
  } else if (withdrawAmnt % 500 != 0) {
    document.getElementById("show_error").innerHTML =
      "Please enter multiple of 500!";
    return false;
  } else {
    document.getElementById("show_error").innerHTML =
      "Your withdraw is successful!";
    return true;
  }
}

function transferValidation() {
  var transferAmnt = document.getElementById("transfer_amnt").value;
  var digits = /^\d+$/;
  if (transferAmnt == "") {
    document.getElementById("show_error").innerHTML =
      "Please enter some value to transfer!";
    return false;
  } else if (!digits.test(transferAmnt)) {
    document.getElementById("show_error").innerHTML =
      "Please enter digits only!";
    return false;
  } else if (transferAmnt < 1000) {
    document.getElementById("show_error").innerHTML =
      "Please transfer at least Rs. 1000!";
    return false;
  } else if (transferAmnt > 50000) {
    document.getElementById("show_error").innerHTML =
      "You can transfer only maximum of Rs. 50,000 in one day!";
    return false;
  }

  //   const transferAccnt = document.getElementById("transfer_accnt").value;
  //   do validation for transferee accnt!
  //   const transferIfsc = document.getElementById("transfer_ifsc").value;
  //   do validation for transferee IFSC!
  else {
    document.getElementById("show_error").innerHTML =
      "Your transfer is successful!";
    return true;
  }
}
