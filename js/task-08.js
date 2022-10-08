const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields on the form!");
  }
  const formData = { email: email.value, Password: password.value };

  console.log(formData);
  event.currentTarget.reset();
}
