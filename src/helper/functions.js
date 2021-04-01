export function getCurrentUserID() {
  return localStorage.getItem("current_user_id");
}

export function getCurrentUserName() {
  return localStorage.getItem("current_user_name");
}

export function checkUserLogin() {
  if (getCurrentUserID() == "null") {
    window.location.replace("/login");
  }
}
