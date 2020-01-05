// https://stackoverflow.com/questions/42420531/what-is-the-best-way-to-manage-a-users-session-in-react

// user profile/preferences info
var UserProfile = (function() {
  // private variables
  var name = "not valid";
  var email = "not provided";
  var role = "user";
  var ID = null;

  var getName = function() {
    return name;
  };

  var setName = function(name) {
    name = name;
    // Also set this in cookie/localStorage
  };

  var getEmail = function() {
    return email;
  };

  var setEmail = function(email) {
    email = email;
    // Also set this in cookie/localStorage
  };

  // TODO: manage roles in more secure way
  var setRole = function(role) {
    role = role;
  };

  var getRole = function() {
    return role;
  };

  var setID = function(ID) {
    ID = ID;
  };

  var getID = function() {
    return ID;
  };

  return {
    getName: getName,
    setName: setName,
    getEmail: getEmail,
    setEmail: setEmail,
    getRole: getRole,
    setRole: setRole,
    getID: getID,
    setID: setID,
  };
})();

export default UserProfile;
