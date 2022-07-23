import { prisma } from "../../../../database/prismaClient"


interface ICreateEventsUseCase{
  name: string
  type:string
  data: string
  amount:string
  description: string
  place: string
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
    id_companies
  }:ICreateEventsUseCase){
    //Validando se o evento existe
    // const nameExist = await prisma.events.findFirst({
    //   where: {
    //     name: {
    //       mode:"insensitive"
    //     }
    //   }
    // })
    // if(nameExist){
    //   throw new Error("Event already exist2s");
    // }

    //
    console.log("aqui"+ id_companies)
    const event = await prisma.events.create({
      data: {
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