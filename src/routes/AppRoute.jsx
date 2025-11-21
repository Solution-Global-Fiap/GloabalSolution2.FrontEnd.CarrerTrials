import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import { Routes } from "./routes.js";
import LandingPage from "../pages/LandingPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import MainLayout from "../pages/layouts/MainLayout.jsx";
import ChallengesPage from "../pages/ChallengesPage.jsx";
import CommunityPage from "../pages/CommunityPage.jsx";
import ProfilePage from "../pages/ProfilePage.jsx";
import ToolBarLayout from "@/pages/layouts/ToolBarLayout.jsx";

const relativeTo = (childPath, parentPath) => {
  return childPath.replace(parentPath + "/", "");
};

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
            Component: ChallengesPage,
          },
          {
            path: Routes.Comunity,
            Component: CommunityPage,
          },
          {
            path: Routes.Profile,
            Component: ProfilePage,
          },
        ],
      },
      {
        Component: ToolBarLayout,
        children: [
          {
            path: Routes.ViewProfile,
            Component: ProfilePage,
          },
        ],
      },
    ],
  },
  {
    path: Routes.Auth,
    children: [
      {
        index: true,
        element: <Navigate to={Routes.Login} replace />,
      },
      {
        path: relativeTo(Routes.Login, Routes.Auth),
        Component: LoginPage,
      },
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
