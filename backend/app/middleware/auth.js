import { verifyToken } from '../util/jwt.js';

const authMiddleware = (req, res, next) => {
  let bearer = req.get('Authorization');
  console.log(bearer);
  if (bearer && bearer.startsWith('Bearer')) {
    let token = bearer.split(' ')[1];
    let verify = verifyToken(token);
    if (verify) {
      next();
      return;
    }
  }

  res.status(403).json({
    status: 403,
    message: 'you are not authenticated',
  });
};

export default authMiddleware;
