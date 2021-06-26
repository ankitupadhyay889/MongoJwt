const jwt = require("jsonwebtoken");
const Mongtwj = require("../userData");

const Authenticate = async (req,res,next) => {
    try {
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        const mainUser = await Mongtwj.findOne({_id:verifyToken._id, "tokens.token":token});

        if(!mainUser) { throw new Error("User not found")}
        req.token = token
        
        req.mainUser = mainUser
        
        req.userId = mainUser._id

        next();
        
    } catch (error) {
        res.status(401).send("Unauthorized token");
        console.log(error);
    }
}

module.exports = Authenticate;