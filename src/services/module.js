// performs api requests pertaining to module creation, editing, deletion
var Mod = (function() {
  // get module info by id (is this neccessary if we use redux?)
  // GET module/getModule?id
  var getModule = function(id) {
    var module = {};
    return module;
  };

  // gives array of 10 most recent modules
  // GET module/getRecent
  var getRecent = function(datetime) {
    return [];
  };

  // POST module/save
  var updateModule = function() {
    return true;
  };

  // POST module/submit
  var submitModule = function() {
    return true;
  };

  return {
    getModule: getModule,
    getRecent: getRecent,
    updateModule: updateModule,
    submitModule: submitModule,
  };
})();

export default Mod;
