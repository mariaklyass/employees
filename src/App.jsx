import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

//Pages
import { Employee } from "./components/Employee";
import { Employees } from "./components/Employees";
import { CriticalError } from "./components/CriticalError";
import MainPage from "./pages/MainPage";
import { ProfilePage } from "./pages/ProfilePage";

//router
const routes = [
  {
    path: "/",
    element: <MainPage />,
    errorElement: (
      <CriticalError onAction={() => <Navigate to="/" replace={true} />} />
    ),
    children: [
      { index: true, element: <Employees /> },
      { path: "department/:depId", index: true, element: <Employees /> },
    ],
  },
  {
    path: "employee/:employeeId",
    element: <ProfilePage />,
  },
];

const router = createBrowserRouter(routes, {
  basename: "/employees",
});

export const App = () => <RouterProvider router={router} />;
