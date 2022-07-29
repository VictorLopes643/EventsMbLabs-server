import { Request, Response } from "express";
import { AuthenticateCompaniesUseCase } from "./authenticateCompaniesUseCase";


export class AuthenticateCompaniesController {
  async handle(request:Request, response:Response) {
    const { email, password } = request.body;
    
    const authenticateCompaniesUseCase = new AuthenticateCompaniesUseCase();

    const result = await authenticateCompaniesUseCase.execute({
      email,
      password,
    })

    return response.json(result)
  }

}