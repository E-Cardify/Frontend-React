import Navbar from "@layout/ViewContainer/Navbar";
import AccountOverview from "./AccountOverview";

export default function Account() {
  return (
    <>
      <Navbar text="Your account" />
      <AccountOverview />
    </>
  );
}
