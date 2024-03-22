import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import About from "./components/About";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import Account from "./components/Account";
import LookUp from "./components/LookUp";
import BookAppointment from "./components/BookAppointment";

const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/signIn",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/profile",
        element: <Account />,
      },
      {
        path: "/search",
        element: <LookUp />,
        children: [
          {
            path: "/search/confirm-booking",
            element: <BookAppointment />
          }
        ],
      },
    ],
  },
]);

export default MyRouter;
