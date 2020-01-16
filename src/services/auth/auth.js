//https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/
// TODO: be more secure
import User from "./user";
import axios from "axios";

var Auth = (function() {
  var loggedIn = false;

  // must be async
  var userLogin = function(token, username) {
    User.setName(username);
    localStorage.setItem("TOKEN", token);
    // login worked
    return (loggedIn = true);
  };

  var userLogout = function(history) {
    localStorage.removeItem("TOKEN");
    loggedIn = false;
    history.push("/home");
    return (loggedIn = false);
  };

  // make async
  var verifyLogin = async function() {
    // check if JWT exists
    const TOKEN = localStorage.getItem("TOKEN");
    if (TOKEN) {
      let status = false;
      // TODO: store JWT in cookie instead of local storage
      await axios
        .post("/user/verify", null, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: "Bearer " + TOKEN,
          },
        })
        .then(res => {
          let username = res.data.username;
          let user_id = res.data.user_id;
          let user_role = res.data.role_id;
          let email = res.data.email;
          console.log(res.data);
          // user variables
          User.setName(username);
          User.setEmail(email);
          User.setRole(user_role);
          User.setID(user_id);
          status = true;
        })
        .catch(error => {});
      return status;
    } else return (loggedIn = false);
  };

  // check before each admin action
  var verifyAdmin = function() {
    // user/verify
    // check user role
  };

  return {
    login: userLogin,
    logout: userLogout,
    verifyLogin: verifyLogin,
    verifyAdmin: verifyAdmin,
  };
})();

export default Auth;
