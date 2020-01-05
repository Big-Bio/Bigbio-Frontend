//https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/
import User from "./user";
import axios from "axios";

var Auth = (function() {
  // check before each page
  var loggedIn = false;

  // must be async
  var userLogin = function({username, password}) {
    // user/login
    // store token
    console.log(username, password);
    // catch: error logging in, invalid credentials etc

    // login worked
    return true;
  };

  var userLogout = function() {
    localStorage.removeItem("TOKEN");
    loggedIn = false;

    // logout worked
    return true;
  };

  var verifyLogin = function() {
    // check if JWT exists
    const TOKEN = localStorage.getItem("TOKEN");
    if (TOKEN) {
      // TODO: store JWT in cookie instead of local storage
      axios
        .post("/user/verify", {token: TOKEN})
        .then(res => {
          let username = res.data.username;
          let user_id = res.data.user_id;
          let user_role = res.data.user_role;
          let email = res.data.email;

          // user variables
          User.setName(username);
          User.setEmail(email);
          User.setRole(user_role);
          User.setID(user_id);

          loggedIn = true;
        })
        .catch(error => {
          console.log("oops");
        });
    } else return (loggedIn = false);
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
