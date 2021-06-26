const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const mernSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  tokens:[
    {
      token:{
        type: String,
        required: true,
      }
    }
  ]
});


//*****************************************************************
//!hasing our password before saving into the mongodb
mernSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = bcrypt.hashSync(this.password, 12);
    this.cpassword = bcrypt.hashSync(this.cpassword, 12);
  }
  next();
});

//!we are genrating token from jwt
//*****************************************************************
mernSchema.methods.genauthToken = async function(){
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
}

//*****************************************************************
const Mongtwj = mongoose.model("MONGTWJ", mernSchema);
module.exports = Mongtwj;

//!ye part hume app.js m likhna hai const Regis = require krke
