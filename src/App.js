import { Box, ThemeProvider } from "@mui/material";
import { theme } from "styles/theme";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "components/routing/ProtectedRoute";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import HomePage from "pages/HomePage";
import "./index.css";
import "./App.css";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Box component="main">
          <Routes>
            <Route index element={<LoginPage />} />
            <Route
              path="/board"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
