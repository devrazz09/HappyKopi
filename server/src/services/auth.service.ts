import bycrpt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../model/user.model';
import { jwtConfig } from '../config/jwt.config';

export const registerUser = async(userName: string, password: string ) =>{

  const hashedPassword = await bycrpt.hash(password, 10)
  return User.create({ userName: userName, password: hashedPassword } as any);
}


export const userLogin = async( userName: string, password: string ) =>{
  const user = await User.findOne({ where: { userName } });
  if(!user) throw new Error('User not found');

  const isPasswordValid = await bycrpt.compare(password, user.password);
  if(!isPasswordValid) throw new Error('Invalid password');

  const accesToken = jwt.sign({id: user.id, role: user.roles}, jwtConfig.secret);
  const refreshToken = jwt.sign({id: user.id}, jwtConfig.secret, {expiresIn: '7d'});
  return { accesToken, refreshToken };
}
