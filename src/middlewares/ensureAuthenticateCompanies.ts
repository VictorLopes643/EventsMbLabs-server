import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken'

interface IPayload {
sub: string;
}
export async function ensureAuthenticateCompanies(request: Request, response: Response, next: NextFunction){
  const authHeader = request.headers.authorization;
  if(!authHeader){
    return  response.status(401).json({
      message:"Token missing"
    })
  }
  const [, token ] = authHeader.split(" ")
  try {
    const { sub } =  verify(token, "6b00565727c970a2295c60e4dd688788") as IPayload
    console.log(sub)
    request.id_companies = sub
    return next();
  } catch (err) { 
    return  response.status(401).json({
      message:"Token invalid"
    })
  }
} 