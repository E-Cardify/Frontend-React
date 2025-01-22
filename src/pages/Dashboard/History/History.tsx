import {
  EditPenIcon,
  SettingsIcon,
  UserIcon,
} from "@icons";
import { HistoryItem } from "./HistoryItem";

export default function History() {
  return (
    <div className="p-5 flex flex-col">
      <HistoryItem
        seen={false}
        icon={<UserIcon />}
        date="8:00"
        mainText="Your card has been viewed."
        secondaryText="Now it has 2012 views."
        color="blue-500"
      />

      <HistoryItem
        seen={true}
        icon={<SettingsIcon />}
        date="7:50"
        mainText="You have changed your profile data."
        secondaryText="Your password was changed."
        color="neutral-500"
      />

      <HistoryItem
        last={true}
        seen={true}
        icon={<EditPenIcon />}
        date="7:43"
        mainText="You have edited your card."
        secondaryText="Your card Card-1 has been edited."
        color="green-500"
      />
    </div>
  );
}
