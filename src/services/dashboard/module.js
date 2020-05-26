import Axios from "axios";
import Auth from "../auth/auth"

var ModuleService = (function() { 
    var loadModule = function() { 

    }

    var submitModule = function() { 
        
    }

    var saveModule = async function(inputs, setErrorMessage) {
        // axios request 
        await Axios.post("http://localhost:2000/module/save", {...inputs}, Auth.requestConfig())
        .then( res => { 
          console.log(res)
          if( res.data.msg ) {
            setErrorMessage(res.data.msg)
            return false;
          }
          return true;
        })
        .catch( err => { 
          setErrorMessage(err);
        })
        // push to dashboard or set error
      };

    return { 
        submitModule: submitModule,
        saveModule: saveModule
    }
})()

export default ModuleService;