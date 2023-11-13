import Login from "./pages/login/Login";
import './app.css'
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <Login />,
    // },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
