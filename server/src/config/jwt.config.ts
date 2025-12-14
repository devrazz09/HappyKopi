import dotenv from 'dotenv';
dotenv.config();
export const jwtConfig = {
  secret: process.env.JWT_SECRET as string,
  expiresIn: '3h',
  refreshExpire: '7d'
};
