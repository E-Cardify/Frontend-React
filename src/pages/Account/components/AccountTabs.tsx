import { ButtonHorizontalNavBar } from "@components/ui/Buttons/ButtonHorizontalNavBar";

interface AccountTabsProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export default function AccountTabs({
  currentTab,
  onTabChange,
}: AccountTabsProps) {
  return (
    <div className="flex mt-6 border-b-2">
      <ButtonHorizontalNavBar
        text="Personal"
        currentView={currentTab}
        onClick={() => onTabChange("Personal")}
      />
      <ButtonHorizontalNavBar
        text="Preferences"
        currentView={currentTab}
        onClick={() => onTabChange("Preferences")}
      />
      <ButtonHorizontalNavBar
        text="Subscription"
        currentView={currentTab}
        onClick={() => onTabChange("Subscription")}
      />
    </div>
  );
}
