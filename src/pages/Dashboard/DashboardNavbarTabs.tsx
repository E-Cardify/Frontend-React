import { AlignIcon } from "@icons";
import { ShareIcon } from "@icons";
import { DashboardNavItem } from "./DashboardNavItem";
import ButtonRectangle from "@components/ui/Buttons/ButtonRectangle";

export function DashboardNavbarTabs() {
  return (
    <div className="flex font-Poppins pt-4 items-end flex-wrap justify-center sm:justify-normal gap-y-2">
      <DashboardNavItem text="Overview" />
      {/* <DashboardNavItem text="Notifications" /> */}
      <DashboardNavItem text="History" />

      {/* right side */}
      <div className="ml-auto flex gap-3 pb-2 items-center">
        <ButtonRectangle
          text="Filter"
          className="text-xs px-3.5 py-1.5"
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
