import {type Request, type Response } from "express";
import * as authService from "../services/auth.service.ts";

export const registerUser = async (req: Request, res: Response) => {
 try{
  const user = await authService.registerUser(req.body.userName, req.body.password);
  res.status(201).json({ message: "User registered successfully", user });
} catch (error) {
  res.status(500).json({ message: (error as Error).message });
 }
} 

export const userLogin = async (req: Request, res: Response) => {
  try{
    const tokens = await authService.userLogin(req.body.userName, req.body.password);
    res.status(200).json({ message: "Login successful", ...tokens });
  }catch (error) {
    res.status(401).json({ message: (error as Error).message });
  }
}