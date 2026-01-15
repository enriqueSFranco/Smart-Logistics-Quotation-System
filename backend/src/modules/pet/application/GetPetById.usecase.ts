import type { Pet } from "../domain/pet.entity";
import type { IPetPersistence } from "../domain/pet.persistence";

export class GetPetByIdUseCase {
  constructor(private readonly persistence: IPetPersistence) {}

  public execute = async (petId: string): Promise<Pet | null> => {
    const pet = this.persistence.findById(petId)
    if (!pet) {
      throw new Error("Mascota no encontrada");
    }
    return pet
  }
}
