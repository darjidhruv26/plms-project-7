import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignupPage from "./pages/Signup";
import SigninPage from "./pages/Signin";
import HomePage from "./pages/Home";
import { action as registerUserAction } from "./components/auth/SignupForm";
import { action as loginUserAction } from "./components/auth/SigninForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/auth/signup",
    element: <SignupPage />,
    action: registerUserAction,
  },
  {
    path: "/auth/signin",
    element: <SigninPage />,
    action: loginUserAction,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
