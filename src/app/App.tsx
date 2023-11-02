import { FC } from "react";

import AppRouter from "./router/ui/AppRouter";
import { ErrorBoundary } from "./providers/ErrorBoundary";
import { MantineProvider } from "./providers/MantineProvider";

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
