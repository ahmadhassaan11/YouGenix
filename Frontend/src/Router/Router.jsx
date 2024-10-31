import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import TrendAnalysis from "../Pages/TrendAnalysis";
import IdeaGen from "../Pages/IdeaGen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/ideas", element: <IdeaGen /> },
      { path: "/trends", element: <TrendAnalysis /> },
    ],
  },
]);

export default router;
