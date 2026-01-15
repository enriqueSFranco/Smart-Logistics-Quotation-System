import type { Pet } from "../domain/pet.entity";
import type { IPetPersistence } from "../domain/pet.persistence";

export class GetAllPetsUseCase {
  constructor(private readonly persistence: IPetPersistence) {}

  public execute = async (): Promise<Pet[]> => {
    return this.persistence.findAll()
  }
}
