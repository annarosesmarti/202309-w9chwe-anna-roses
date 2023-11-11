export interface PersonStructure {
  id: number;
  name: string;
  surname: string;
  origin: string;
  house: string;
  wand: string;
  pet: string;
  patronus: string;
  isEnemy: boolean;
  image: string;
}

export interface PeopleStructure {
  people: PersonStructure[];
}
