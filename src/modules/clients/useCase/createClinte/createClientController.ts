import { Request, Response } from "express";
import { CreateClientUseCase } from "./createClientUseCase";


export class CreateClientController {
  async handle(request:Request, response:Response) {
    const { email, password, name } = request.body;

    const createClientUseCase = new CreateClientUseCase();
    const result = await createClientUseCase.execute({
      email,
      password,
      name
    })
    return response.json(result)
  }

}