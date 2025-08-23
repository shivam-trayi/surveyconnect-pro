import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { authService, JwtPayload, User } from "../service/authService";
import { jwtDecode } from "jwt-decode";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (data: { name: string; email: string; password?: string }) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  isAuthenticated: boolean; // ✅ Added here
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // ✅ Restore session from localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded: JwtPayload = jwtDecode(token);
        if (decoded.exp * 1000 > Date.now()) {
          setUser({
            id: decoded.id,
            username: decoded.username,
            roleId: decoded.roleId,
          });
        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }
      } catch {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    }
  }, []);

  const login = async (username: string, password: string) => {
    try {
      setIsLoading(true);
      const response = await authService.login(username, password);
      const token = response.data.token;

      const decoded: JwtPayload = jwtDecode(token);
      const user: User = {
        id: decoded.id,
        username: decoded.username,
        roleId: decoded.roleId,
      };

      setUser(user);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/dashboard");
    } catch (err: unknown) {
      if (err instanceof Error) alert(err.message);
      else alert("An unknown error occurred");
    } finally {
      setIsLoading(false);
    }
  };
  const logout = async () => {
    const response = await authService.logout();
    if (response.status === "success") {
      setUser(null);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/login");
    } else {
      alert("Logout failed. Please try again.");
    }
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup: async (data: { name: string; email: string; password?: string }) => {
          // placeholder for signup implementation
        },
        logout,
        isLoading,
        isAuthenticated: !!user, // ✅ Derived from user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
