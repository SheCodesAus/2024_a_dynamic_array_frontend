import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar/NavBar.jsx";
import CreateProfilePage from "./pages/CreateProfilePage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import { AuthProvider } from "./components/AuthProvider.jsx";
import TermsAndConditionsPage from "./pages/TermsConditionsPage.jsx";
import PrivacyPage from "./pages/PrivacyPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import TestPage from "./components/Forms/SelectOptions/TestPage.jsx";
import UsersPage from "./pages/UsersPage.jsx";
import UserPage from "./pages/UserPage.jsx";
import UpdatePasswordPage from "./pages/UpdatePasswordPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Footer />
      </>
    ),
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/create-profile", element: <CreateProfilePage /> },
      { path: "/signup", element: <SignUpPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/privacy", element: <PrivacyPage /> },
      { path: "/termsandconditions", element: <TermsAndConditionsPage /> },
      { path: "/profile/:id", element: <ProfilePage /> },
<<<<<<< HEAD
      { path: "/test", element: <TestPage /> },
=======
      { path: "/users", element: <UsersPage /> },
      { path: "/users/:username", element: <UserPage /> },
      { path: "/update-password", element: <UpdatePasswordPage /> },
>>>>>>> DEV
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
