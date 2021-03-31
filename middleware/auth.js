const jwt = require('jsonwebtoken')

//Authentication

exports.requireLogin = (req,res,next) => {
    try {
        if(req.headers.authorization)
        {
            const token = req.headers.authorization.split(" ")[1];
            //Verify token
            const decode =jwt.verify(token,process.env.JWT_SECRET)
            //Attach token to request
            console.log(req.user);
            req.user = decode;
            next();
        }
        else
        {
            return res.status(400).json({Message:"Unauthorized"});
        }
    } catch (err) {
        console.log("Something Went Wrong");        
    }
}