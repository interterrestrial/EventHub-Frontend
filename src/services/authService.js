import API_BASE_URL from "../config/api";

export const login = async (credentials) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to log in");
  }

  return response.json();
};