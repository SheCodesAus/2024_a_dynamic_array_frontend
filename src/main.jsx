import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar/NavBar.jsx";
import CreateProfilePage from "./pages/CreateProfilePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/create-profile", element: <CreateProfilePage /> },
      { path: "/signup", element: <SignUpPage /> },
      { path: "/login", element: <LoginPage /> },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
