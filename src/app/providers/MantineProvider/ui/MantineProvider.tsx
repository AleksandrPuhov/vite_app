import { FC, ReactNode } from "react";

import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import { MantineModalsProvider } from "./MantineModalsProvider";

interface IMantineProvProps {
  children: ReactNode;
}

export const MantineProv: FC<IMantineProvProps> = ({ children }) => {
  const theme = createTheme({
    /** Put your mantine theme override here */
    // primaryColor: "cyan",
  });

  return (
    <MantineProvider theme={theme}>
      <MantineModalsProvider>{children}</MantineModalsProvider>
    </MantineProvider>
  );
};
