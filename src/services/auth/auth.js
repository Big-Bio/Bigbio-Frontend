// https://stackoverflow.com/questions/34119793/react-router-redirection-after-login
import User from "./user";
import axios from "axios";

var Auth = (function() {
  // check before each page
  var loggedIn = true;

  // must be async
  var userLogin = function({username, password}) {
    // user/login
    // store token
    console.log(username, password);
    // catch: error logging in, invalid credentials etc
    return true;
  };

  var verifyLogin = function() {
    // get token
    // user/verify
    // change status
    return loggedIn;
  };

  // check before each admin action
  var verifyAdmin = function() {
    // user/verify
    // check user role
  };

  return {
    login: userLogin,
    verifyLogin: verifyLogin,
    verifyAdmin: verifyAdmin,
  };
})();

export default Auth;
