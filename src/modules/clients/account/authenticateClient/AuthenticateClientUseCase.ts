import { prisma } from "../../../../database/prismaClient"
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
interface IAuthenticateClientUseCase{
  username:string,
  password:string
}

export class AuthenticateClientUseCase {
  //Receber Username, Password
  async execute({username, password}:IAuthenticateClientUseCase){

    //verifica se Username cadastrado
    const client = await prisma.clients.findFirst({
      where:{
        username 
      }
    })
    if(!client){
      throw new Error("Username or password invalid!")
    }
    //verifica password
    const passwordMatch = await compare(password, client.password);
    if(!passwordMatch){
      throw new Error("Username or password invalid!")
    }
    //Gerar token
    const token = sign({username}, "6b00565727c970a2295c60e4dd688766",{
      subject: client.id,
      expiresIn: "1d"
    })
    return token
  }
}