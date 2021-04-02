export function getCurrentUserID() {
  return localStorage.getItem("current_user_id");
}

export function getCurrentUserName() {
  return localStorage.getItem("current_user_name");
}

export function getUserAccountCompleteness() {
  return localStorage.getItem("user_account_completeness");
}

export function checkUserLogin() {
  if (getCurrentUserID() == "null") {
    window.location.replace("/login");
  }
}

export function checkUserAccountCompleteness() {
  var check = getUserAccountCompleteness();
  if (check == null || !check) {
    window.location.replace("/account");
  }
}
