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
      } = request.body;
      const { id_companies } = request;
      // console.log("esse "+id_companies);
      // console.log("name "+name);
      // console.log("type"+type);
      // console.log(" data "+data);
      // console.log("amount "+amount);
      // console.log("description "+description);
      // console.log(" place "+place);

      const createEventsUseCase = new CreateEventsUseCase();

      const result = await createEventsUseCase.execute({
        name,
        type,
        data,
        amount,
        description,
        place,
        id_companies
      })
      return response.json(result);

  }
}