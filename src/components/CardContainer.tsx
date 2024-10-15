import { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";

export default function CardContainer({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col justify-center items-center pt-8 pb-14">
      <div className="flex gap-6 justify-center items-center pb-8">
        <NavLink
          to="/template1"
          className="text-lg text-blue-500 hover:underline"
        >
          Default Template
        </NavLink>
        <NavLink
          to="/template2"
          className="text-lg text-blue-500 hover:underline"
        >
          Template2
        </NavLink>
        <NavLink
          to="/template3"
          className="text-lg text-blue-500 hover:underline"
        >
          Template3
        </NavLink>
        <NavLink
          to="/template4"
          className="text-lg text-blue-500 hover:underline"
        >
          Template4
        </NavLink>
        <NavLink
          to="/template5"
          className="text-lg text-blue-500 hover:underline"
        >
          Template5
        </NavLink>
        <NavLink
          to="/template6"
          className="text-lg text-blue-500 hover:underline"
        >
          Template6
        </NavLink>
        <NavLink
          to="/template7"
          className="text-lg text-blue-500 hover:underline"
        >
          Template7
        </NavLink>
        <NavLink
          to="/template8"
          className="text-lg text-blue-500 hover:underline"
        >
          Template8
        </NavLink>
      </div>
      {children}
    </div>
  );
}
