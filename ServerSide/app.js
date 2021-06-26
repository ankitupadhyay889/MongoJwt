const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");

const express = require("express");

const app = express();

const bcrypt = require("bcryptjs");

const authenticate = require("./middleware/authenticate");

const Mongtwj = require("./userData");

const PORT = process.env.PORT || 8000;

//******************************************************************
//! Privacy

dotenv.config({ path: "./config.env" });

//******************************************************************
//! DB Connections

require("./connection");
app.use(express.json());

//******************************************************************
//! Page Serve

app.get("/", (req, res) => {
  res.send("Hello Prema Guru Narayan");
});

//******************************************************************

app.get("/register", (req, res) => {
  res.send("Hello Prema Guru Narayan");
});

//******************************************************************
//! Register Details through postman

app.post("/register", async (req, res) => {
  // res.json({message: req.body});

  const { name, email, work, password, cpassword } = req.body;

  if (!name || !email || !work || !password || !cpassword) {
    return res.status(422).json({ error: "fill the data properly" });
  }

  try {
    const userExits = await Mongtwj.findOne({ email: email });

    if (userExits) {
      return res.status(422).json({ error: "Email already exits" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Password not match" });
    } else {
      const user = new Mongtwj({ name, email, work, password, cpassword });
      await user.save();
      res.status(201).json({ message: "User Registered Successfully" });
    }
  } catch (error) {
    console.log(error);
  }
});


app.get("/login", (req, res) => {
  res.send("Hello Prema Guru Narayan");
});

//******************************************************************
//! Login

app.post("/login" , async(req,res) => {
  try {
    let token;
    const {email , password} = req.body
    if(!email || !password){
      return res.status(400).json({error:"Please fill the data"})
    }
    const userLogin = await Mongtwj.findOne({ email: email });

    if(userLogin){
      const isMatch = await bcrypt.compare(password , userLogin.password);

      //jwt authenticate
      token = await userLogin.genauthToken();
      console.log(token);

      res.cookie("jwtoken" , token , {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true
      })

      if(!isMatch){
        return res.status(400).json({error : "User Data wrong recheck email or password"})
      }else{
        return res.status(200).json({message : "User login successfully"})
    }
    }else{
      res.status(400).json({ message: "Invalid credentials" });
    }

  } catch (error) {
      console.log(error);    
  }
})

app.get("/about" , authenticate , (req,res) => {
  res.send(req.mainUser);
})

app.get("/logout" , (req,res) => {
  res.clearCookie("jwtoken" , { path: "/" })
  res.status(200).send("User logout hogya");
})

//******************************************************************
//! Server
app.listen(PORT, () => {
  console.log(`server is runnig at port ${PORT}`);
});
