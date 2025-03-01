import { ReactNode, useState } from "react";
import Dashboard from "@pages/Dashboard/Dashboard";
import { CardCreationComponent } from "@pages/CardCreationComponent/CardCreationComponent";
import { DashboardViewContext } from "@contexts/DashboardViewContext";
import Cards from "@pages/Cards/Cards";
import { CardEditingComponent } from "@pages/CardEditingComponent/CardEditingComponent";
import Account from "@pages/Account/Account";
import { Navigate, Route, Routes } from "react-router-dom";
import AppContainer from "@components/AppContainer";
import { ButtonInfo } from "@components/ui/Buttons/ButtonPrimary";
import useAuth, { AUTH } from "../../hooks/useAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { resendEmail as resendEmailFn } from "../../lib/api";
import { useModal } from "@contexts/useModelContext";

export default function ViewContainer(props: { children?: ReactNode }) {
  const [currentDashboardView, setCurrentView] = useState<
    "Overview" | "Notifications" | "History"
  >("Overview");

  const queryClient = useQueryClient();

  const { showModal: toast } = useModal();

  const { user } = useAuth();

  const { mutate: resendEmail } = useMutation({
    mutationFn: resendEmailFn,
    onSuccess: () => {
      toast("Email sent", "Email sent", 3000, true);
      queryClient.invalidateQueries({ queryKey: [AUTH] });
    },
    onError: () => {
      toast("Failed to send email", "Failed to send email", 3000, false);
    },
  });

  return (
    <DashboardViewContext.Provider
      value={{
        currentView: currentDashboardView,
        setCurrentView,
      }}
    >
      <div className="pl-10 pr-5 py-[3vh] flex-1">
        {props.children}

        <AppContainer>
          {!user?.data?.isVerified && (
            <div
              className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-5 rounded-lg overflow-hidden flex justify-between gap-10 items-center"
              role="alert"
            >
              <p className="font-bold">Email Verification Required</p>
              <p>
                Your email hasn't been verified. Please check your inbox for the
                verification email.
              </p>
              <ButtonInfo
                text="Resend Email"
                onClick={() => {
                  resendEmail();
                }}
              />
            </div>
          )}
          <Routes>
            <Route path="/dashboard" index element={<Dashboard />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/create-card" element={<CardCreationComponent />} />
            <Route path="/edit-card" element={<CardEditingComponent />} />
            <Route path="/account" element={<Account />} />
            {/* <Route path="/notifications" element={<Account />} /> */}
            <Route
              path="/*"
              element={<Navigate to="/management/dashboard" />}
            />
          </Routes>
        </AppContainer>
      </div>
    </DashboardViewContext.Provider>
  );
}
