import { prisma } from "../../../database/prismaClient";


export class FindAllUseCase{
  async execute(){
    const events = await prisma.events.findMany({
      where: {
        name: {
          mode:"insensitive"
        }
      }
    })
    return events
  }  
}