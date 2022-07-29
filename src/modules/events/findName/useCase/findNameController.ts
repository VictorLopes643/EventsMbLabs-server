import { Request, Response } from "express";
 import {  FindNameUseCase } from './findNameUseCase'


export class FindNameController {
  async handle(request:Request, response:Response){
    const { name, local, date, description } = request.body
    const findNameUseCase = new  FindNameUseCase();
    const event = await findNameUseCase.execute({ name });
    return response.json(event)
  }
}