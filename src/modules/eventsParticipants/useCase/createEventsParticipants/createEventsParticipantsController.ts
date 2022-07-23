import { Request, Response } from "express";
import { CreateEventsParticipantsUseCase } from "./createEventsParticipantsUseCase";


export class CreateEventsParticipantsController {
  async handle(request:Request,response:Response) {
    const { id_clients, id_events } = request.body;

    const creatEventsParticipantsUseCase = new CreateEventsParticipantsUseCase();
    
    const result = await creatEventsParticipantsUseCase.execute({
      id_clients,
      id_events
    })
    return response.json(result)
  }

}