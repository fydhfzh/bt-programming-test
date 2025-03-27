import jwt from 'jsonwebtoken';

const JWT_SECRET_KEY = '6726a4927f4a809b45144c0ca157d0a7597fa4016a9f6371b4716e0e3ab330c3';

const generateToken = (data) => {
  const token = jwt.sign(data, JWT_SECRET_KEY, { expiresIn: 60 * 60 * 24 });
  return token;
};

const verifyToken = (token) => {
  const verified = jwt.verify(token, JWT_SECRET_KEY);

  return verified;
};

export { generateToken, verifyToken };
