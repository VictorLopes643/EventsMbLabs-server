import { Request, Response } from "express";
import { CreateEventsUseCase } from "./createEventsUseCase";


export class CreateEventsController {
  async handle(request:Request, response:Response) {
    const { 
      name,
      type,
      data,
      amount,
      description,
      place,
      capa,
      id_companies,
      } = request.body;
      // const { id_companies } = request;
 
      const createEventsUseCase = new CreateEventsUseCase();

      const result = await createEventsUseCase.execute({
        name,
        type,
        data,
        amount,
        description,
        place,
        capa,
        id_companies
      })
      return response.json(result);

  }
}