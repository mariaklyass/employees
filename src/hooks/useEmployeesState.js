import { create } from "zustand";

export const useEmployeesState = create((set) => ({
  employees: [],
  displayedEmployees: [],
  setDisplayedEmployees: (v) => set({ displayedEmployees: v }),
}));
