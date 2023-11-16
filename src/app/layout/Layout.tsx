import { FC } from "react";
import { Outlet } from "react-router-dom";

export const Layout: FC = () => {
  return (
    <div>
      <div>left menu</div>
      <div>
        <div>header</div>
        <Outlet />
        <div>footer</div>
      </div>
    </div>
  );
};
