import { Layout } from "@app/layout/Layout";
import { NotFoundPage } from "@pages/NotFoundPage";

export const routerConfig = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        async lazy() {
          const { MainPage } = await import("@pages/MainPage");
          return { Component: MainPage };
        },
      },
      {
        path: "about",
        async lazy() {
          const { AboutPage } = await import("@pages/AboutPage");
          return { Component: AboutPage };
        },
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
