// core
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// components
// import { Divider } from "../components/Divider";
import { SearchError } from "../components/CriticalError";
import { Employee } from "../components/Employee";

// data
import { SortOption } from "../data/departments";

// utils
import { getSortedEmployees } from "../services/getSortedEmployees";
import { getDayOfYear } from "../services/getDayOfYear";

// hooks
import { useEmployeesState } from "../hooks/useEmployeesState";
import { useAppState } from "../hooks/useAppState";

export function Employees() {
  const sortBy = useAppState((state) => state.sortBy);
  const displayedEmployees = useEmployeesState(
    (state) => state.displayedEmployees
  );
  const [currentYearList, setCurrentYearList] = useState([]);
  const [nextYearList, setNextYearList] = useState([]);

  // REWRITE!!!!!!!!!!
  const handleSearchAgain = () => {
    console.log(error);
  };
  // REWRITE!!!!!!!!!!

  useEffect(() => {
    const sortedEmployees = getSortedEmployees(displayedEmployees);

    if (sortBy === SortOption.Birthday) {
      const currentDay = getDayOfYear(new Date());
      const currentYear = [];
      const nextYear = [];

      sortedEmployees.forEach((employee) => {
        if (getDayOfYear(new Date(employee.birthday)) < currentDay) {
          nextYear.push(employee);
        } else {
          currentYear.push(employee);
        }
      });

      setCurrentYearList(currentYear);
      setNextYearList(nextYear);
    } else {
      setCurrentYearList(sortedEmployees);
      setNextYearList([]);
    }
  }, [displayedEmployees, sortBy]);

  if (displayedEmployees.length === 0)
    return (
      <div>
        <SearchError onSearchAgain={handleSearchAgain} />
      </div>
    );

  return (
    <ul>
      {currentYearList.map((employee, i) => (
        <li key={employee.id}>
          <Link to={`/employee/${employee.id}`}>
            <Employee employee={employee} index={i} />
          </Link>
        </li>
      ))}

      {nextYearList.length > 0 && (
        <>
          {/* <li>
            <Divider>
              <p className={classes.divider}>{new Date().getFullYear() + 1}</p>
            </Divider>
          </li> */}
          {nextYearList.map((employee, i) => (
            <li key={employee.id}>
              <Link to={`/employee/${employee.id}`}>
                <Employee employee={employee} index={i} />
              </Link>
            </li>
          ))}
        </>
      )}
    </ul>
  );
}
