const jwt = require('jsonwebtoken');
 
const verifyToken = (req,res,next)=>{
    try {
        let token = req.cookies['access_token'];
        let user = jwt.verify(token,process.env.JWT_SECRET || 'default_secret')
        if(!user){
            res.status(403).json({ message: 'forbidden , token invalid' });
        }
        req.user = user
        next()
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports={
    verifyToken
}