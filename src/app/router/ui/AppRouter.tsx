import { FC, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { routerConfig } from "../config/routerConfig";

const AppRouter: FC = () => {
  const router = createBrowserRouter(routerConfig);

  return (
    // <Suspense fallback={<Loader />}>
    <Suspense
      fallback={
        <>
          <p>Loader</p>
        </>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRouter;
