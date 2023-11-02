import React, { ErrorInfo, ReactNode, Suspense } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  public state: ErrorBoundaryState = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    console.log(error);
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  public render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      // You can render any custom fallback UI
      return (
        // <Suspense fallback={<Loader />}>
        <Suspense
          fallback={
            <>
              <p>Loader</p>
            </>
          }
        >
          {/* <PageError /> */}
          <>
            <p>PageError</p>
          </>
        </Suspense>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
