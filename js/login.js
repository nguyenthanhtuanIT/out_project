function isEnterValue() {
  const id = document.getElementById("inp-id");
  const password = document.getElementById("inp-password");
  const element = document.getElementById("btn-login");
  if (id.value.length !== 0 && password.value.length !== 0) {
    element.classList.add("active-btn");
  } else {
    element.classList.remove("active-btn");
  }
}