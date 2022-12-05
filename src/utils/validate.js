var validateEmail = (rule, value, callback) => {
  if(value == ''){
    return callback(new Error('Please input the username'))
  }else{
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    if(!filter.test(value)){
      return callback(new Error('No valid!'))
    }else{
      callback()
    }
    
  }
};
var validatePass = (rule, value, callback) => {
  if(value == ''){
    return callback(new Error('Please input the pass'))
  }else{
    callback()
  }
};
var validatePassConfirm = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("Please input the password again"));
  } else if (value !== this.ruleForm.pass) {
    callback(new Error("Two inputs don't match!"));
  } else {
    callback();
  }
};