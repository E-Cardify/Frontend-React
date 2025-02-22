import { useState } from "react";
import ProfileHeader from "./components/ProfileHeader";
import AccountTabs from "./components/AccountTabs";
import PersonalTab from "./components/PersonalTab";
import PreferencesTab from "./components/PreferencesTab";
import SubscriptionTab from "./components/SubscriptionTab";
import useTheme from "@contexts/useTheme";

export default function AccountOverview() {
  const [currentTab, setCurrentTab] = useState("Personal");
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="border-neutral-200 border-2 dark:border-neutral-950 rounded-lg mt-3 bg-white dark:bg-neutral-900 relative overflow-hidden p-6">
      <ProfileHeader />
      <AccountTabs currentTab={currentTab} onTabChange={setCurrentTab} />

      <div className="mt-6">
        {currentTab === "Personal" && <PersonalTab />}
        {currentTab === "Preferences" && (
          <PreferencesTab theme={theme} onThemeChange={handleThemeChange} />
        )}
        {currentTab === "Subscription" && <SubscriptionTab />}
      </div> 
    </div>
  );
}
