import { Router } from "express";
import { ensureAuthenticateCompanies } from "./middlewares/ensureAuthenticateCompanies";
import { AuthenticateClientController } from "./modules/clients/account/authenticateClient/AuthenticateClientController";
import { AuthenticateCompaniesController } from "./modules/clients/account/authenticateCompanies/authenticateCompaniesController";
import { CreateClientController } from "./modules/clients/useCase/createClinte/createClientController";
import { CreateCompaniesController } from "./modules/companies/useCase/createCompanies/createCompaniesController";
import { FindAllController } from "./modules/events/findAll/findAllController";
import { CreateEventsController } from "./modules/events/useCase/createEvents/createEventsController"; 
import { CreateEventsParticipantsController } from "./modules/eventsParticipants/useCase/createEventsParticipants/CreateEventsParticipantsController";

const routes = Router();

const createClientController = new CreateClientController();
const createCompaniesController = new CreateCompaniesController();
const authenticateClientController = new AuthenticateClientController();
const authenticateCompaniesController = new AuthenticateCompaniesController(); 
const createEventsController = new CreateEventsController();
const createEventsParticipantsController = new CreateEventsParticipantsController()
const findAllController = new FindAllController();

routes.post("/authenticate/", authenticateClientController.handle)
routes.post("/authenticateCompanies/", authenticateCompaniesController.handle)
routes.post("/client/", createClientController.handle)
routes.post("/companies/", createCompaniesController.handle)
routes.post("/event/", ensureAuthenticateCompanies, createEventsController.handle)
routes.post("/eventList/", createEventsParticipantsController.handle)
routes.get  ("/event/all/", findAllController.handle )




export { routes };