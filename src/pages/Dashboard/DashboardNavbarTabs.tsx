import { AlignIcon } from "@icons";
import { ShareIcon } from "@icons";
import ButtonRectangle from "@components/ui/Buttons/ButtonRectangle";
import { ButtonHorizontalNavBar } from "@components/ui/Buttons/ButtonHorizontalNavBar";
import useDashboardViewContext from "@contexts/useDashboardViewContext";

export function DashboardNavbarTabs() {
  const { currentView, setCurrentView } = useDashboardViewContext();

  const handleViewChange = (newView: "Overview" | "History") => {
    setCurrentView(newView);
  };

  return (
    <div className="flex font-Poppins pt-4 items-end flex-wrap justify-center sm:justify-normal gap-y-2">
      <ButtonHorizontalNavBar
        text="Overview"
        currentView={currentView}
        onClick={() => {
          handleViewChange("Overview");
        }}
      />

      {/* <ButtonHorizontalNavBar
        text="History"
        currentView={currentView}
        onClick={() => {
          handleViewChange("History");
        }}
        isBeta={true}
      /> */}

      {/* right side */}
      <div className="ml-auto flex gap-3 pb-2 items-center">
        <ButtonRectangle
          text="Filter"
          className="text-xs px-3.5 py-1.5 font-normal"
          iconHeight={4}
          icon={<AlignIcon />}
        />
        <ButtonRectangle
          text="Share"
          className="text-xs px-3.5 py-1.5"
          iconHeight={4}
          primary={true}
          icon={<ShareIcon />}
        />
      </div>
    </div>
  );
}
