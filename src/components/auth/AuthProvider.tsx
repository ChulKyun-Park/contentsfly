"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import LoginModal from "./LoginModal";

interface AuthContextValue {
  isLoggedIn: boolean;
  openLogin: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue>({
  isLoggedIn: false,
  openLogin: () => {},
  logout: () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  function openLogin() {
    setLoginOpen(true);
  }

  function handleLogin() {
    setIsLoggedIn(true);
    setLoginOpen(false);
  }

  function logout() {
    setIsLoggedIn(false);
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, openLogin, logout }}>
      {children}
      <LoginModal
        open={loginOpen}
        onClose={() => setLoginOpen(false)}
        onLogin={handleLogin}
      />
    </AuthContext.Provider>
  );
}
