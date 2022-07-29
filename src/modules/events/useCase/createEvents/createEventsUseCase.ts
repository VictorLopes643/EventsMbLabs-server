import { prisma } from "../../../../database/prismaClient"


interface ICreateEventsUseCase{
  name: string
  type:string
  data: string
  amount:string
  description: string
  place: string
  capa: string
  id_companies: string
}

export class CreateEventsUseCase {
  async execute({
    name,
    type,
    data,
    amount,
    description,
    place,
    capa,
    id_companies
  }:ICreateEventsUseCase){
    console.log("erro capa", capa)
    if(capa === null){
    }
    const event = await prisma.events.create({
      data: {
        capa,
        name,
        type,
        data,
        amount,
        description,
        place,
        id_companies
      }
    })
    return event;

  }
}