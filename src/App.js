import Login from "./pages/login/Login";
import './styles.scss'
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate
} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import LeftBar from "./components/leftbar/LeftBar";
import RightBar from "./components/rightbar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import { useContext } from "react";
import { darkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";

function App() {
  const {currentUser}=useContext(AuthContext);
  const {darkMode}=useContext(darkModeContext);
  console.log("kyyyya",darkMode)
  const Layout=()=>{
    return(
      <div className={`theme-${darkMode ? "dark" :"light"}`}>
        <NavBar />
        <div className="contentBox">
          <LeftBar />
          <div style={{flex:6}}> 
          <Outlet />
          </div>
          
          <RightBar />
        </div>
      </div>
    )
  }

const ProtectedRoute=({children})=>{
  if(!currentUser){
    return <Navigate to="/login" />
  }
  return children;
}

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute><Layout /></ProtectedRoute>,
      children:[
        {
        path:'/',
        element:<Home />
      },
      {
        path:'/profile/:id',
        element:<Profile />
      }
    ]
    },
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
