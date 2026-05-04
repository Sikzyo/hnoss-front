import { createBrowserRouter } from "react-router";
import Welcome from "@/pages/welcome";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Welcome,
  },
]);

export default routes;
