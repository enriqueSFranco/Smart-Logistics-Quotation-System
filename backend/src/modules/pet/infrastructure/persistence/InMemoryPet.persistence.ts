import { Pet } from "../../domain/pet.entity";
import type { IPetPersistence } from "../../domain/pet.persistence";

export class InMemoryPetPersistence implements IPetPersistence  {
  private pets = new Map<string, Pet>();

  async save(pet: Pet): Promise<void> {
    const id = pet.id || Math.random().toString(36).substring(2, 9);
    const petToSave = new Pet({...pet.toJSON(), id})
    this.pets.set(id, petToSave)
  }
  async findById(petId: string): Promise<Pet | null> {
    const pet = this.pets.get(petId);
    return pet ? pet : null;
  }
  async findByOwnerId(ownerId: string): Promise<Pet[]> {
    return Array.from(this.pets.values()).filter(pet => pet.ownerId === ownerId)
  }
  async findAll(): Promise<Pet[]> {
    return Array.from(this.pets.values())
  }
  async update(pet: Pet): Promise<void> {
    if (!pet.id || !this.pets.has(pet.id)) {
      throw new Error("No se puede actualizar una mascota inexistente.");
    }
    this.pets.set(pet.id, pet);
  }
  async delete(id: string): Promise<void> {
    this.pets.delete(id);
  }
}
