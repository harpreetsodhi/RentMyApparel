// AUTHOR : NEELKANTH DABHI

var Constants = require("./constants.js");

function isUserLoggedIn() {
  if (Constants.CURRENT_USER != null) {
    return true;
  } else {
    return false;
  }
}

function getCurrentUserID() {
  if (isUserLoggedIn()) {
    return Constants.CURRENT_USER;
  } else {
    return null;
  }
}

module.exports = { isUserLoggedIn, getCurrentUserID };
