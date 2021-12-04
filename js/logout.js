const logoutForm = document.getElementById("logout-form");
const logoutButton = logoutForm.querySelector("input");

function handleLogout(event){
event.preventDefault();
localStorage.clear();
logoutForm.submit();
}

  logoutButton.addEventListener("click", handleLogout);