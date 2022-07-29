import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import { prisma } from "../../../../database/prismaClient"


interface IAuthenticateCompaniesUseCase{
  email:string,
  password:string
}

export class AuthenticateCompaniesUseCase{
    //Receber Username, Password, name_companies
  async execute({email, password}:IAuthenticateCompaniesUseCase){
    //verifica se Username cadastrado
  const companies = await prisma.companies.findFirst({
    where: {
      
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
  const token = sign({email}, "6b00565727c970a2295c60e4dd688788",{
    subject: companies.id,
    expiresIn: "1d"
  })
  return token

  }

}