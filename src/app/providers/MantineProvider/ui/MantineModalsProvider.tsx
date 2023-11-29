import { FC, ReactNode } from "react";

import { ModalsProvider } from "@mantine/modals";
import { BackCallModal } from "@features/BackCallModal";

interface MantineModalsProviderProps {
  children: ReactNode;
}

const modals = {
  // backCall: lazy(() => import("src/features/BackCallModal/ui/BackCallModal")),

  backCall: BackCallModal,
  /* ...other modals */
};

declare module "@mantine/modals" {
  export interface MantineModalsOverride {
    modals: typeof modals;
  }
}

export const MantineModalsProvider: FC<MantineModalsProviderProps> = ({
  children,
}) => {
  return <ModalsProvider modals={modals}>{children}</ModalsProvider>;
};
