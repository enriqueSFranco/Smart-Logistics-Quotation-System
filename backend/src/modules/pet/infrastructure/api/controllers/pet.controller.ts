import type { Response, Request, RequestHandler } from "express";
import type { CreatePetUseCase } from "../../../application/CreatePet.usecase";
import type { GetAllPetsUseCase } from "../../../application/GetAllPets.usecase";
import type { GetPetByIdUseCase } from "../../../application/GetPetById.usecase";

export class PetController {

  constructor(
    private readonly createPetUseCase: CreatePetUseCase,
    private readonly getAllPetsUseCase: GetAllPetsUseCase,
    private readonly getPetByIdUseCase: GetPetByIdUseCase
  ) {}

  public create: RequestHandler = async (req: Request, res: Response) => {
    try {
      const pet = await this.createPetUseCase.execute(req.body)

      res.status(201).json(pet.toJSON());
    } catch (e) {
      const message = e instanceof Error ? e.message : "Unexpected error";
      res.status(500).json({ error: message });
    }
  };

  public getAll = async (_req: Request, res: Response) => {
    try {
      const pets = await this.getAllPetsUseCase.execute()
      res.status(201).json(pets.map(pet => pet.toJSON()))
    } catch (e) {
      const message = e instanceof Error ? e.message : "Unexpected error";
      res.status(500).json({ error: message });
    }
  }

  public getById = async (res: Response, req: Request) => {
    try {
      const pet = await this.getPetByIdUseCase.execute(req.params.id);
      res.json(pet?.toJSON());
    } catch (e) {
      const message = e instanceof Error ? e.message : "Unexpected error";
      res.status(404).json({ error: message });
    }
  }
}
