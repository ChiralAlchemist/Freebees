var mongoose = require('mongoose');
var bcrypt =  require('bcrypt-nodejs')

var UserSchema = new mongoose.Schema ({
  local: {
    username : {
      type: String,
      required: true
    },
    password :{
      type: String,
      required: true
    }
  },
  address :{
    type: String,
    required: true
  }
});


exports.encryptPassword = function (sentPassord){
  var salt = bcrypt.SaltSync()
  return bcrypt.hashSync(sentPassord,salt)
}  

exports.checkPassword = function (sentPassord, resultCb){
  bcrypt.compare(sentPassord,encryptPassword,resultCb);

}

exports.model = mongoose.model('User', UserSchema);