import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import { prisma } from "../../../../database/prismaClient"


interface IAuthenticateCompaniesUseCase{
  username:string,
  password:string
}

export class AuthenticateCompaniesUseCase{
    //Receber Username, Password, name_companies
  async execute({username, password}:IAuthenticateCompaniesUseCase){
    //verifica se Username cadastrado
  const companies = await prisma.companies.findFirst({
    where: {
      username
    }
  })
  if(!companies){
    throw new Error("Username or password invalid!")
  }
  const passwordMatch = await compare(password, companies.password);
  
  if(!passwordMatch){
    throw new Error("Username or password invalid!")
  }
  //Gerar token
  const token = sign({username}, "6b00565727c970a2295c60e4dd688788",{
    subject: companies.id,
    expiresIn: "1d"
  })
  return token

  }

}