import ProfileHeader from "./components/ProfileHeader";
import PersonalTab from "./components/PersonalTab";
// import SubscriptionTab from "./components/SubscriptionTab";
// import PreferencesTab from "./components/PreferencesTab";
import { Stack, Tabs } from "@mantine/core";
export default function Account() {
  return (
    <Stack>
      <ProfileHeader />

      <Tabs orientation="horizontal" defaultValue="personal">
        <Tabs.List>
          <Tabs.Tab value="personal">Personal</Tabs.Tab>
          {/* <Tabs.Tab value="preferences">Preferences</Tabs.Tab>
          <Tabs.Tab value="subscription">Subscription</Tabs.Tab> */}
        </Tabs.List>

        <Stack p="20" pt="10">
          <Tabs.Panel value="personal">
            <PersonalTab />
          </Tabs.Panel>
          {/* <Tabs.Panel value="preferences">
            <PreferencesTab />
          </Tabs.Panel>
          <Tabs.Panel value="subscription">
            <SubscriptionTab />
          </Tabs.Panel> */}
        </Stack>
      </Tabs>
    </Stack>
  );
}
