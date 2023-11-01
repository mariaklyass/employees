import { parseApiError } from "./api";
import { getEmployees } from "./api";
import { useEmployeesState } from "../hooks/useEmployeesState";
import { useAppState } from "../hooks/useAppState";
import { getSortedEmployees } from "./getSortedEmployees";

export async function loadEmployees(depId = "all") {
  try {
    useAppState.setState({ loading: true });
    const employees = await getEmployees(depId);
    const displayedEmployees = getSortedEmployees(employees);

    useEmployeesState.setState({ employees, displayedEmployees });
    useEmployeesState.setState({ employees });
    useAppState.setState({ error: null });
  } catch (error) {
    const { message } = parseApiError(error);
    console.error(message);
    useAppState.setState({ error: message });
  } finally {
    useAppState.setState({ loading: false });
  }
}
