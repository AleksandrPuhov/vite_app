import { FC } from "react";
import AppRouter from "./router/ui/AppRouter";
import { ErrorBoundary } from "./providers/ErrorBoundary";

const App: FC = () => {
  return (
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  );
};

export default App;
