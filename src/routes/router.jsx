import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AboutUs from "../pages/About_Us/AboutUs";
import Story from "../pages/About_Us/Story/Story";
import Mission from "../pages/About_Us/Mission/Mission";
import Success from "../pages/About_Us/Success/Success";
import Team from "../pages/About_Us/Team/Team";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "coverage",
        Component: Coverage,
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
      {
        path: "about-us",
        Component: AboutUs,
        children: [
          {
            index: true,
            Component: Story,
          },
          {
            path: "story",
            Component: Story,
          },
          {
            path: "mission",
            Component: Mission,
          },
          {
            path: "success",
            Component: Success,
          },
          {
            path: "team",
            Component: Team,
          },
        ],
      },
    ],
  },
]);

export default router;
