import { FC, ReactNode } from "react";

import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";

interface IMantineProvProps {
  children: ReactNode;
}

export const MantineProv: FC<IMantineProvProps> = ({ children }) => {
  const theme1 = createTheme({
    /** Put your mantine theme override here */
    primaryColor: "cyan",
  });

  return <MantineProvider theme={theme1}>{children}</MantineProvider>;
};
