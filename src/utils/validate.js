var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
var filterpass = /^([A-Z_\.\-])+([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
export const validateEmail = (rule, value, callback) => {
  if(value == ''){
    return callback(new Error('Please input the username'))
  }else{
    if(!filter.test(value)){
      return callback(new Error('No valid!'))
    }else{
      callback()
    }
    
  }
};
export const validatePass = (rule, value, callback) => {
  if(value == ''){
    return callback(new Error('Please input the pass'))
  }else{
    callback()
  }
};
