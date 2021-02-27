function isEnterValue() {
  const id = document.getElementById("inp-id");
  const password = document.getElementById("inp-password");
  if (id.value.length !== 0 && password.value.length !== 0) {
    const element = document.getElementById("btn-login");
    element.classList.add("active-btn");
  }
  if (id.value.length !== 0) {
    const iconUser = document.getElementById("icon-user");
    iconUser.classList.add("display-none");
  }
  if (password.value.length !== 0) {
    const iconLock = document.getElementById("icon-lock");
    iconLock.classList.add("display-none");
  }
}