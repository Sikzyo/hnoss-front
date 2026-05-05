import { createBrowserRouter } from "react-router";
import Welcome from "@/pages/Welcome";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Welcome,
  },
]);

export default routes;
