import { createBrowserRouter } from "react-router";
import { AuthLayout } from "@/layouts/AuthLayout";
import WelcomePage from "@/pages/WelcomePage";

export const router = createBrowserRouter([
  {
    Component: AuthLayout,
    children: [{ index: true, Component: WelcomePage }],
  },
]);
