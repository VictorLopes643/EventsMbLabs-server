import { prisma } from "../../../../database/prismaClient"
import { hash } from "bcrypt";

interface ICreateCompaniesUseCase{
  email:string
  password:string
  name_companies: string
}

export class CreateCompaniesUseCase{
  async execute({ email, password, name_companies }:ICreateCompaniesUseCase) {
    //Validar se existe
    const companiesExist = await prisma.companies.findFirst({
      where: {
        email
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
        email,
        name_companies,
        password: hashPassword
      }
    })
    console.log(companies)
    return companies
  }

  }