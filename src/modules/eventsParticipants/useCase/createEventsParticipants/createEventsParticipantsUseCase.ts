import { prisma } from '../../../../database/prismaClient'

interface ICreateEventsParticipants {
  id_clients: string
  id_events: string
}

export class CreateEventsParticipantsUseCase{
  async execute({id_clients, id_events}:ICreateEventsParticipants){
    const clientExist = await prisma.events_Participants.findFirst({
      where:{
        id_clients
      }
    })
    if(clientExist){
      throw new Error("Já esta cadastrado no evento")
    }
    const client = await prisma.events_Participants.create({
      data:{
        id_clients,
        id_events
      }
    })
    return client
  }
}