import { Router } from "express";
import { InMemoryPetPersistence } from "../../persistence/InMemoryPet.persistence";
import { CreatePetUseCase } from "../../../application/CreatePet.usecase";
import { PetController } from "../controllers/pet.controller";
import { GetAllPetsUseCase } from "../../../application/GetAllPets.usecase";
import { GetPetByIdUseCase } from "../../../application/GetPetById.usecase";

const petRouter = Router()

// --- SINGLETON / INSTANCIAS
const petPersistence = new InMemoryPetPersistence();

const createPetUseCase = new CreatePetUseCase(petPersistence)
const getAllPetsUseCase = new GetAllPetsUseCase(petPersistence);
const getPetByIdUseCase = new GetPetByIdUseCase(petPersistence);

const petController = new PetController(createPetUseCase, getAllPetsUseCase, getPetByIdUseCase);

// --- DEFINICIÓN DE ENDPOINTS ---
petRouter.get("/", petController.getAll)
petRouter.get("/:id", petController.getById)
petRouter.post("/", petController.create);

export {petRouter}
