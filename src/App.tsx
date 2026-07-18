import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routesConfig } from "./config/routes/routesConfig";
import "./shared/styles/App.css";

const router = createBrowserRouter(routesConfig);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
