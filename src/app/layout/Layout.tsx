import { FC } from "react";
import { Outlet } from "react-router-dom";

import styles from "./Layout.module.css";

import { Footer } from "@widgets/Footer/ui/Footer";

export const Layout: FC = () => {
  return (
    <>
      <div className={styles.menuWrapp}>left</div>
      <div className={styles.mainWrapp}>
        <div className={styles.headerWrapp}>header</div>
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
