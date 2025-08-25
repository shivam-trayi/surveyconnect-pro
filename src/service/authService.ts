import { ApiResponse } from "@/types";
const API_BASE = import.meta.env.VITE_API_BASE;

export const authService = {
  login: async (username: string, password: string): Promise<ApiResponse<{ token: string }>> => {
    const res = await fetch(`${API_BASE}auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
      credentials: "include",
    });

    const data = (await res.json()) as ApiResponse<{ token: string }>;
    if (!data.success) throw new Error(data.message || "Login failed");
    return data;
  },

  logout: async (): Promise<ApiResponse<{ success: boolean }>> => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    const username = user ? JSON.parse(user).username : null;

    const res = await fetch(`${API_BASE}auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ username }),
    });

    const data = (await res.json()) as ApiResponse<{ success: boolean }>;
    if (!data.success) throw new Error(data.message || "Logout failed");
    return data;
  },
};
