import { NavLink } from "react-router-dom";

export function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "active-tab px-3 py-2" : "px-3 py-2"
      }
    >
      {children}
    </NavLink>
  );
}
