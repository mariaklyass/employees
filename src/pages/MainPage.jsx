import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppState } from "../hooks/useAppState";
import { useEmployeesState } from "../hooks/useEmployeesState";
import { loadEmployees } from "../services/loadEmployees";

import { filterEmployees } from "../services/filterEmployees";
import { getSortedEmployees } from "../services/getSortedEmployees";

import { Employees } from "../components/Employees";
import { CriticalError } from "../components/CriticalError";
import SearchBar from "../components/SearchBar";
import { NavBar } from "../components/NavBar";
import SkeletonEmployees from "../components/SkeletonEmployees";

const MainPage = () => {
  const { depId } = useParams();
  // const sortBy = useAppState((s) => s.sortBy);
  const searchString = useAppState((state) => state.search);
  const loadingError = useAppState((state) => state.error);
  const loading = useAppState((state) => state.loading);

  const list = useEmployeesState((state) => state.employees);
  const setDisplayedList = useEmployeesState(
    (state) => state.setDisplayedEmployees
  );
  // const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    loadEmployees(depId);
  }, [depId]);

  useEffect(() => {
    const filteredEmployees = filterEmployees(searchString, list, [
      "firstName",
      "lastName",
      "userTag",
    ]);

    setDisplayedList(getSortedEmployees(filteredEmployees));
  }, [searchString, list]);

  const handleTryAgain = () => {
    loadEmployees();
  };

  return (
    <div className="max-w-7xl">
      <div className="h-2"> </div>
      <div className="pl-6 pt-2 pb-3 font-bold text-2xl leading-7">Search</div>

      {/* search module */}
      <SearchBar />
      {/* <Button
        active={sortBy !== SortOption.Alphabet}
        onClick={() => {
          setShowModal(true);
        }}
      >
        <img src="/list.svg"></img>
      </Button> */}
      {/* modal module */}
      {/* navigation module */}
      <NavBar />
      {/* main: loading skeleton => error or employees(depId)*/}
      {loading ? (
        <SkeletonEmployees />
      ) : loadingError ? (
        <div>
          <CriticalError onTryAgain={handleTryAgain} />
        </div>
      ) : (
        <div>
          <Employees />
        </div>
      )}

      {/* <Modal
        opened={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <div>
          <h3>Sorting</h3>
          <Sort
            onSort={() => {
              setShowModal(false);
            }}
          />
        </div>
      </Modal> */}
    </div>
  );
};

export default MainPage;
