import { NavItem } from "./NavItem";

import { MENU } from "../data/departments";

export function NavBar() {
  return (
    <ul className="text-center text-lg font-medium leading-5 text-[#97979B] flex flex-wrap px-3 m-6 gap-3">
      <li>
        <NavItem to="/">All</NavItem>
      </li>
      {MENU.map((item, i) => (
        <li key={i}>
          <NavItem to={`department/${item.name}`}>{item.label}</NavItem>
        </li>
      ))}
    </ul>
  );
}
