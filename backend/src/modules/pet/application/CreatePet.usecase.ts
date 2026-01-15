import { Pet, Temperament } from "../domain/pet.entity";
import type { IPetPersistence } from "../domain/pet.persistence";

// Definicion del DTO para lo que viene del exterior
interface CreatePetRequest {
	name: string;
	species: string;
	breed: string;
	weight: number;
	temperament: string;
	medicalNotes?: string;
	groomingNotes?: string;
	ownerId: string;
}

export class CreatePetUseCase {
	// inyección de dependencias
	constructor(private persistence: IPetPersistence) {}

	execute = async (request: CreatePetRequest): Promise<Pet> => {
		const temperament = Object.values(Temperament).includes(
			request.temperament as Temperament,
		)
			? (request.temperament as Temperament)
			: Temperament.UNKNOWN;

		const newPet = new Pet({
			...request,
			temperament,
		});
		await this.persistence.save(newPet);

		return newPet;
	};
}
