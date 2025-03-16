import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [recruiterId, setRecruiterId] = useState(null);

  // Load recruiterId from localStorage
  useEffect(() => {
    const storedId = localStorage.getItem("recruiterId");
    if (storedId) {
      setIsAuthenticated(true);
      setRecruiterId(storedId);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, recruiterId, setRecruiterId }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
