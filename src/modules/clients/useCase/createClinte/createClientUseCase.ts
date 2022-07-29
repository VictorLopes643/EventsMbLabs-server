import { prisma } from "../../../../database/prismaClient"
import { hash } from "bcrypt"

interface ICreateClient {
  email: string
  password: string
  name: string
}

export class CreateClientUseCase{
  async execute({ email, password, name }:ICreateClient) {
    //Validar se o user existe 
    const clientExist = await prisma.clients.findFirst({
      where: {
        email 
      }
    })
    if(clientExist){
      throw new Error("Client already exists");
    }
    //Criptografar senha
    const hashPassword = await hash(password,10);
    //Salvar client
    const client = await prisma.clients.create({
      data: {
        name,
        email,
        password: hashPassword
      }
    })
    return client;

  }
}