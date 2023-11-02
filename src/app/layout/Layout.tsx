import { FC } from "react";
import { Outlet } from "react-router-dom";

export const Layout: FC = () => {
  return (
    <div>
      <p>Layout</p>
      <Outlet />
    </div>
  );
};
