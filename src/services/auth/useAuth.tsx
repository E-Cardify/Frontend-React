import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useModal } from "@contexts/useModelContext";

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterCredentials {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  email: string;
  firstName: string;
  lastName: string;
  id: string;
}

export function useAuth() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { showModal } = useModal();

  const login = useMutation({
    mutationFn: async (credentials: LoginCredentials) => {
      console.log("Sending login request with:", credentials);

      const response = await fetch("http://localhost:5000/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: credentials.email.trim(),
          password: credentials.password,
        }),
      });

      const data: LoginResponse = await response.json();
      console.log("Response status:", response.status);
      console.log("Response data:", data);

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      if (!data.accessToken || !data.refreshToken) {
        throw new Error("Invalid server response - missing tokens");
      }

      return data;
    },
    onSuccess: async (data) => {
      // Store accessToken as token
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("refresh-token", data.refreshToken);
      localStorage.setItem("user-id", data.id);

      console.log("Stored tokens:", {
        token: localStorage.getItem("token"),
        refreshToken: localStorage.getItem("refresh-token"),
        userId: localStorage.getItem("user-id"),
      });

      await queryClient.invalidateQueries({ queryKey: ["auth-status"] });
      showModal("Success!", "Logged in successfully", 3000, true);
      navigate("/management/dashboard");
    },
    onError: (error: Error) => {
      console.error("Login error:", error);
      showModal(
        "Error!",
        error.message || "Invalid email or password",
        3000,
        false
      );
    },
  });

  const { data: isAuthenticated, isLoading: isAuthChecking } = useQuery({
    queryKey: ["auth-status"],
    queryFn: async () => {
      const token = localStorage.getItem("token");
      const refreshToken = localStorage.getItem("refresh-token");

      if (!token || !refreshToken) {
        console.log("No tokens found", { token, refreshToken });
        return false;
      }

      try {
        console.log("Verifying tokens...", { token, refreshToken });
        const response = await fetch(
          `http://localhost:5000/api/v1/user/verify/${refreshToken}`,
          {
            method: "GET",
          }
        );

        if (!response.ok) {
          console.log("Token verification failed:", response.status);
          localStorage.removeItem("token");
          localStorage.removeItem("refresh-token");
          localStorage.removeItem("user-id");
          return false;
        }

        const data = await response.json();
        if (data.accessToken) {
          localStorage.setItem("token", data.accessToken);
        }
        if (data.refreshToken) {
          localStorage.setItem("refresh-token", data.refreshToken);
        }
        if (data.id) {
          localStorage.setItem("user-id", data.id);
        }

        console.log("Token verified successfully");
        return true;
      } catch (error) {
        console.error("Token verification error:", error);
        localStorage.removeItem("token");
        localStorage.removeItem("refresh-token");
        localStorage.removeItem("user-id");
        return false;
      }
    },
    retry: false,
    refetchOnWindowFocus: true,
  });

  const register = useMutation({
    mutationFn: async (credentials: RegisterCredentials) => {
      const response = await fetch(
        "http://localhost:5000/api/v1/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        }
      );

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      return response.json();
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      queryClient.invalidateQueries({ queryKey: ["card-info"] });
      showModal("Success!", "Account created successfully", 3000, true);
      navigate("/login");
    },
    onError: () => {
      showModal("Error!", "Registration failed. Please try again", 3000, false);
    },
  });

  const logout = () => {
    console.log("Logging out...");
    localStorage.removeItem("token");
    localStorage.removeItem("refresh-token");
    localStorage.removeItem("user-id");
    queryClient.clear();
    navigate("/login");
  };

  return {
    login,
    register,
    logout,
    isAuthenticated,
    isAuthChecking,
  };
}
