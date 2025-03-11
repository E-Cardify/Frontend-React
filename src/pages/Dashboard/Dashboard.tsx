import Overview from "./Overview/Overview";
import Navbar from "@layout/ViewContainer/Navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar text="Dashboard" />
      <Overview />
    </>
  );
}
