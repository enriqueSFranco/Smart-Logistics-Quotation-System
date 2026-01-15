export enum Temperament {
  FRIENDLY = "friendly",
  NERVOUS = "nervous",
  AGGRESSIVE = "aggressive",
  UNKNOWN = "unknown",
}

export interface PetProps {
  id?: string;
  name: string;
  species: string;
  breed: string;
  weight: number;
  temperament: Temperament;
  medicalNotes?: string;
  groomingNotes?: string;
  ownerId: string;
  createdAt?: Date;
}

export class Pet {
  private props: PetProps;

  constructor(props: PetProps) {
    this.validate(props);
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public validate(props: PetProps) {
    if (!props.name || props.name.length < 2) {
      throw new Error(
        "El nombre de la mascota debe tener al menos 2 caracteres."
      );
    }

    if (props.weight <= 0) {
      throw new Error("El peso debe ser mayor a 0.");
    }
  }

  public get id() {
    return this.props.id;
  }
  public get name() {
    return this.props.name;
  }
  public get ownerId() {
    return this.props.ownerId;
  }
  public get temperament() {
    return this.props.temperament;
  }

  public requiresSpecialHandling() {
    return (
      this.props.temperament === Temperament.AGGRESSIVE ||
      this.props.temperament === Temperament.NERVOUS
    )
  }

  public toJSON() {
    return {...this.props}
  }
}
