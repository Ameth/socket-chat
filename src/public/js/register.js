const btnLogin = document.getElementById("login");
const username = document.getElementById("username");

btnLogin.addEventListener("click", () => {
  if (username.value != "") {
    document.cookie = `username=${username.value}`;
    document.location.href = "/";
  } else {
    alert("Debes ingresar un usuario");
  }
});
