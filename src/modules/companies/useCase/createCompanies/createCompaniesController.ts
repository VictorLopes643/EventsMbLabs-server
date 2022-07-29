import { prisma } from "@prisma/client";
import { Request, Response } from "express";
import { CreateCompaniesUseCase } from "./createCompaniesUseCase";


export class CreateCompaniesController {
  async handle(request:Request,response:Response) {
    const { email, password, name_companies } = request.body;
    
    const createCompaniesUseCase = new CreateCompaniesUseCase();
    const result = await createCompaniesUseCase.execute({
      email,
      name_companies,
      password
    })
    return response.json(result)
  }

}