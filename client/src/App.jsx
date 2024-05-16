import { useEffect, useState } from "react";
import FormationPage from "./pages/FormationPage";
import FormationsPage from "./pages/FormationsPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/Header";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Toaster } from "sonner";
import { GET_AUTHENTICATED_USER } from "./graphql/queries/user.query";
import { useQuery } from "@apollo/client";

function App() {
  const authUser = true;
  const location = useLocation();

  useEffect(() => {
    document.title = getPageTitle(location.pathname);
  }, [location]);

  const { loading, error, data } = useQuery(GET_AUTHENTICATED_USER);

  console.log("Loading:", loading);
  console.log("Authenticated user:", data);
  console.log("Error:", error);

  if (loading) return null;

  return (
    <>
      {renderHeader(location.pathname)}
      <Routes>
        <Route
          path="/"
          element={data.authUser ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!data.authUser ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!data.authUser ? <SignUpPage /> : <Navigate to="/" />}
        />
        <Route
          path="/formations"
          element={
            data.authUser ? <FormationsPage /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/formation/:id"
          element={data.authUser ? <FormationPage /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster richColors position="top-center" closeButton />
    </>
  );
}

const renderHeader = (pathname) => {
  if (pathname === "/login" || pathname === "/signup") {
    return <Header />;
  } else {
    return (
      <div className="relative w-full flex items-center justify-center mb-12">
        <NavBar />
      </div>
    );
  }
};

const getPageTitle = (pathname) => {
  let title = "";
  switch (pathname) {
    case "/":
      title = "Home";
      break;
    case "/login":
      title = "Connexion";
      break;
    case "/signup":
      title = "SignUp";
      break;
    case "/formation/:id":
      title = "Formation details";
      break;
    case "/formations":
      title = "Formations";
      break;
    default:
      title = "";
  }
  return title ? title + " | InterCo" : "InterCo";
};

export default App;
