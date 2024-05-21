function ageChange(e) {
  let age = e.target.value;
  let submitButton = document.getElementById("submitbutton");
  let eh = document.getElementById("errors-holder");
  var resultHolder = (document.getElementById("result-holder").textContent =
    "");
  console.log(age);
  if (age === "" || age < 5) {
    submitButton.disabled = true;
    eh.innerHTML = "Please choose age";
  }
  //write your code here
  else {
    submitButton.disabled = false;
    eh.innerHTML = "";
  }
}
function handleSubmit() {
  event.preventDefault();
  var age = document.getElementById("q_age");
  var ownsPhone = document.getElementById("q_owns_phone").checked;
  var resultHolder = document.getElementById("result-holder");

  if (ownsPhone) {
    if (age < 13) {
      resultHolder.textContent = "";
      resultHolder.textContent = "You are too young to have a phone";
    } else {
      resultHolder.textContent = "Use your phone in moderation";
    }
  } else {
    if (age < 13) {
      resultHolder.textContent = "";

      resultHolder.textContent = "You will get a phone soon";
    } else {
      resultHolder.textContent = "";

      resultHolder.textContent = "You should get a phone";
    }
  }
}
