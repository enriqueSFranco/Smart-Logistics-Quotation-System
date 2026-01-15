import type { Pet } from "./pet.entity";

export interface IPetPersistence {
  save(pet: Pet): Promise<void>;
  findById(petId: string): Promise<Pet | null>;
  findByOwnerId(ownerId: string): Promise<Pet[]>;
  findAll(): Promise<Pet[]>;
  update(pet: Pet): Promise<void>;
  delete(id: string): Promise<void>;
}
