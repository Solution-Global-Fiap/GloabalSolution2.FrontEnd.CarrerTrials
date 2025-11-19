import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import { Routes } from "./routes.js";
import LandingPage from "../pages/LandingPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import MainLayout from "../pages/layouts/MainLayout.jsx";
import ChallengesPage from "../pages/ChallengesPage.jsx";
import ComunityPage from "../pages/ComunityPage.jsx";
import ProfilePage from "../pages/ProfilePage.jsx";


const router = createBrowserRouter([
  {
    index: true,
    path: Routes.Root,
    Component: LandingPage,
  },
  {
    Component: ProtectedRoute,
    children: [
      {
        Component: MainLayout,
        children: [
          {
            path: Routes.Challenges,
            Component: ChallengesPage
          },
            {
            path: Routes.Comunity,
            Component: ComunityPage
          },
          {
            path: Routes.Profile,
            Component: ProfilePage
          }
        ]
      }
    ]
  },
  {
    path: Routes.Auth,
    children: [
      {
        index: true,
        element: <Navigate to={Routes.Login} replace />,
      },
      {
        path: Routes.Login.replace(Routes.Auth + "/", ""),
        Component: LoginPage,
      }
    ],
  },
  {
    path: Routes.Unknow,
    Component: NotFoundPage,
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
