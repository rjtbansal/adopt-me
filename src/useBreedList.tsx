import { useState, useEffect } from "react";
import { Animal, BreedListAPIResponse } from "./APIResponseTypes";

//localCache will return a key index of type string with  value as an array of strings
const localCache: { [index: string]: string[] } = {};

//perfect use case of using type as we want Status to be only 1 of these 3 values
type Status = "unloaded" | "loading" | "loaded";


export default function useBreedList(animal: Animal): [string[], Status] {
  const [breedList, setBreedList] = useState([] as string[]);
  const [status, setStatus] = useState("unloaded" as Status);

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]); //refresh breed list as new breed list is being fetched
      setStatus("loading");

      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json =(await res.json()) as BreedListAPIResponse;
      localCache[animal] = json.breeds || []; //empty array if for some reason breeds wasnt fetched properly or api crashed or cache issue
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return [breedList, status]; //returning as an array because thats how hooks are generally implemented so it can be imported just like in built react hooks
}
