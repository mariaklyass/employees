import { SortOption } from "../data/departments";
import { useAppState } from "../hooks/useAppState";
import { getDayOfYear } from "./getDayOfYear";

export const getSortedEmployees = (employees) => {
  const { sortBy } = useAppState.getState();

  const newArray = [...employees];

  switch (sortBy) {
    case SortOption.Birthday:
      newArray.sort((a, b) => {
        return (
          getDayOfYear(new Date(a.birthday)) -
          getDayOfYear(new Date(b.birthday))
        );
      });

      break;
    case SortOption.Alphabet:
    default:
      newArray.sort(
        (a, b) => a.firstName.charCodeAt(0) - b.firstName.charCodeAt(0)
      );
      break;
  }

  return newArray;
};
