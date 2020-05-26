// https://stackoverflow.com/questions/42420531/what-is-the-best-way-to-manage-a-users-session-in-react

// user profile/preferences info
var UserProfile = (function() {
  // private variables
  var name = "not valid";
  var email = "not provided";
  var role = 1; // defaults to user
  var ID = null;

  var getName = function() {
    return name;
  };

  var setName = function(_name) {
    name = _name;
    // Also set this in cookie/localStorage
  };

  var getEmail = function() {
    return email;
  };

  var setEmail = function(_email) {
    email = _email;
    // Also set this in cookie/localStorage
  };

  // TODO: manage roles in more secure way
  var setRole = function(_role) {
    role = _role;
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
