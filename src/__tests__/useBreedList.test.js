import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import useBreedList from "../useBreedList";

test("gives an empty array with no animal", async () => {
  //https://react-hooks-testing-library.com/reference/api#renderhook
  //Renders a test component that will call the provided callback, including any hooks it calls, every time it renders.
  const { result } = renderHook(() => useBreedList(""));
  const [breedList, status] = result.current;

  expect(breedList).toHaveLength(0);
  expect(status).toBe("unloaded");
});

test("gives back breeds with an animal", async () => {
  const breeds = ["Havanese", "Bichon Frise", "Poodle", "Corgie"];

  fetch.mockResponseOnce(
    JSON.stringify({
      animal: "dog",
      breeds,
    })
  );
  //https://react-hooks-testing-library.com/reference/api#waitfornextupdate
  const { result, waitForNextUpdate } = renderHook(() => useBreedList("dog"));
  //waiting for update happen to mock async op
  await waitForNextUpdate();

  const [breedList, status] = result.current;
  expect(status).toBe("loaded");
  expect(breedList).toEqual(breeds);
});
