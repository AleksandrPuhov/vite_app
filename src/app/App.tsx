import { FC } from "react";

import { ErrorBoundary } from "./providers/ErrorBoundary";
import { MantineProvider } from "./providers/MantineProvider";
import { AppRouter } from "./router";

const App: FC = () => {
  return (
    <ErrorBoundary>
      <MantineProvider>
        <AppRouter />
      </MantineProvider>
    </ErrorBoundary>
  );
};

export default App;
