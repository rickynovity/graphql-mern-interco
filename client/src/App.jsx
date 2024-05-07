import { useEffect, useState } from "react";
import FormationPage from "./pages/FormationPage";
import FormationsPage from "./pages/FormationsPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Toaster } from "sonner";

function App() {
  const authUser = true;
  const location = useLocation();

  useEffect(() => {
    document.title = getPageTitle(location.pathname);
  }, [location]);

  return (
    <>
      {authUser && renderHeader(location.pathname)}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/formations" element={<FormationsPage />} />
        <Route path="/formation/:id" element={<FormationPage />} />
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
