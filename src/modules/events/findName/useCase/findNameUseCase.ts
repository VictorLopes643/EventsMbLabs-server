import { prisma } from "../../../../database/prismaClient"


interface IFindName{
  name:string
}

export class FindNameUseCase{
  async execute({ name }:IFindName){
    const events = await prisma.events.findMany({
      where: {
        name: {
          mode:'insensitive',
          contains:name
        }
      }
    })
    return events
  }  
}

