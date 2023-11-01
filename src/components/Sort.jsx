// import { Radio } from "../components/Radio";

import { SortOption } from "../data/departments";
import { useAppState } from "../hooks/useAppState";

export function Sort({ onSort }) {
  const sortBy = useAppState((state) => state.sortBy);
  const setSortBy = useAppState((state) => state.setSortBy);

  return (
    <button
      name="sort"
      options={[
        { value: SortOption.Alphabet, label: "By alphabet" },
        { value: SortOption.Birthday, label: "By date of birth" },
      ]}
      value={sortBy}
      onChange={(v) => {
        setSortBy(v);
        onSort && onSort(v);
      }}
    />
  );
}
