


export interface ApiResponse {
  status: string;
  message: string;
  data: {
    token: string;
  };
  timestamp: string;
}

export interface JwtPayload {
  id: number;
  username: string;
  roleId: number;
  exp: number;
  iat: number;
}

export interface User {
  id: number;
  username: string;
  roleId: number;
}

export interface SignupData {
  name: string;
  email: string;
  password?: string;
  company?: string;
  country?: string;
}

const API_BASE = import.meta.env.VITE_API_BASE; // http://localhost:5000/api/v1/

export const authService = {
  login: async (username: string, password: string): Promise<ApiResponse> => {
    const res = await fetch(`${API_BASE}auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
      credentials: "include",
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Login failed");
    return data as ApiResponse;
  },

  logout: async (): Promise<{ status: string; message: string }> => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    const username = user ? JSON.parse(user).username : null;

    try {
      const res = await fetch(`${API_BASE}auth/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ username }), // <-- send username in body
      });

      return await res.json();
    } catch (err: any) {
      console.error("Logout request failed:", err);
      return { status: "error", message: "Logout request failed" };
    }
  },
};