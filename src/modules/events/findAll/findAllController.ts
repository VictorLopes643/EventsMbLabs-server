import { Request, Response } from "express";
import { FindAllUseCase } from "./findAllUseCase";



export class FindAllController {
  async handle(request:Request, response:Response){
    const findAllUseCase = new  FindAllUseCase();
    const events = await findAllUseCase.execute();
    return response.json(events)
  }
}