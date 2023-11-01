import { FC, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { AboutPage } from "@pages/AboutPage";
import { MainPage } from "@pages/MainPage";
import { NotFoundPage } from "@pages/NotFoundPage";
import { Layout } from "@pages/layout";

const AppRouter: FC = () => {
  // TODO add Lazy
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

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
