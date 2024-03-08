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
const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
      next(); 
    } else {
      res.status(403).json({ message: 'Permission denied. Only admin users have access.' });
    }
  };

  const isUser = (req, res, next) => {
    if (req.user && req.user.role === 'user') {
      next(); 
    } else {
      res.status(403).json({ message: 'Permission denied. Only admin users have access.' });
    }
  };

module.exports={
    verifyToken,
    isAdmin,
    isUser
}