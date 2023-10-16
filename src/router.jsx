import { createHashRouter } from "react-router-dom"
import Home from "./routes/Home"
import homeLoader from "./routes/loaders/home"
import Project from "./routes/Project"
import projectLoader from "./routes/loaders/project"

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    loader: homeLoader,
    children: [
      {
        path: "projects/:projectId",
        element: <Project />,
        loader: projectLoader
      },
    ],
  }
])

export default router