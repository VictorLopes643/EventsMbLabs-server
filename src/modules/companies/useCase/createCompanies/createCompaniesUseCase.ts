import { prisma } from "../../../../database/prismaClient"
import { hash } from "bcrypt";

interface ICreateCompaniesUseCase{
  username:string
  password:string
  name_companies: string
}

export class CreateCompaniesUseCase{
  async execute({ username, password, name_companies }:ICreateCompaniesUseCase) {
    //Validar se existe
    const companiesExist = await prisma.companies.findFirst({
      where: {
        username
      }
    })
    if(companiesExist){
      throw new Error("Companies already exists");
    }
    //Criptografar senha
    const hashPassword = await hash(password,10);
    //Salvar
    const companies = await prisma.companies.create({
      data: {
        username,
        name_companies,
        password: hashPassword
      }
    })
    return companies
  }

  }