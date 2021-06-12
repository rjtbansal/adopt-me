//we called this file .ts instead of .tsx since it wont contain any React related stuff

//below we specify all possible string type an Animal can be
export type Animal = "dog" | "cat" | "bird" | "reptile" | "rabbit";

//below assignment of reptile to snake is valid Animal type value
//const snake: Animal = 'reptile';

//below assignment is invalid because Animal type doesnt have lion
//const lion: Animal = 'lion';

/**below is our interface called Pet in which we expect following fields and their type
 * 
 * Type vs Interface: Its mostly recommended to use Interface whenever and wherever we can. Only in very particular situations as such as above we could use a type
 */
export interface Pet {
  id: number;
  name: string;
  animal: Animal;
  description: string;
  breed: string;
  images: string[];
  city: string;
  state: string;
}

export interface PetAPIResponse {
  numberOfResults: number,
  startIndex: number
  endIndex: number
  hasNext: boolean
  pets: Pet[]
}