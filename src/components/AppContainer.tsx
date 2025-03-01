import useAuth from "@hooks/useAuth";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const AppContainer = ({ children }: { children: ReactNode }) => {
  const { user, isLoading } = useAuth();

  console.log(user);

  return isLoading ? (
    <div>
      <div className="flex items-center justify-center">
        <span className="loader"></span>
      </div>
    </div>
  ) : user ? (
    <div>{children}</div>
  ) : (
    <Navigate
      to="/login"
      replace
      state={{ redirect: window.location.pathname }}    
    />
  );
};

export default AppContainer;
