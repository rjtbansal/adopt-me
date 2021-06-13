import { useState, useEffect } from "react";

const localCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

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
      const json = await res.json();
      localCache[animal] = json.breeds || []; //empty array if for some reason breeds wasnt fetched properly or api crashed or cache issue
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return [breedList, status]; //returning as an array because thats how hooks are generally implemented so it can be imported just like in built react hooks
}
