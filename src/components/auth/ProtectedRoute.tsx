import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../services/auth/useAuth";
import LoadingScreen from "@components/ui/LoadingScreen";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, isAuthChecking } = useAuth();
  const location = useLocation();

  if (isAuthChecking) {
    return <LoadingScreen />;
  }

  if (!isAuthenticated) {
    // Redirect to login but save the attempted URL
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
