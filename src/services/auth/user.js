// https://stackoverflow.com/questions/42420531/what-is-the-best-way-to-manage-a-users-session-in-react

// user profile/preferences info
var UserProfile = (function() {
  var name = "";

  var getName = function() {
    return name;
  };

  var setName = function(name) {
    name = name;
    // Also set this in cookie/localStorage
  };

  return {
    getName: getName,
    setName: setName,
  };
})();

export default UserProfile;
