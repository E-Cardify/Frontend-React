import { Stack } from "@mantine/core";
import TitleDivider from "@components/Typography/TitleDivider/TitleDivider";
import GeneralTextInput from "@components/Inputs/GeneralTextInput/GeneralTextInput";
import { useCardCreationFormContext } from "@pages/CardCreationComponent/context/CardCreationContext";
import GeneralTextarea from "@components/Inputs/GeneralTextarea/GeneralTextarea";

export function Information() {
  const form = useCardCreationFormContext();

  return (
    <>
      <TitleDivider text="Personal" order={3} />

      <Stack maw="400px">
        <GeneralTextInput
          key={form.key("firstName")}
          {...form.getInputProps("firstName")}
          placeholder="Your first name"
          label="First name"
        />
        <GeneralTextInput
          key={form.key("middleName")}
          {...form.getInputProps("middleName")}
          placeholder="Your middle name"
          label="Middle name"
        />
        <GeneralTextInput
          key={form.key("lastName")}
          {...form.getInputProps("lastName")}
          placeholder="Your last name"
          label="Last name"
        />
        <GeneralTextInput
          key={form.key("preferredName")}
          {...form.getInputProps("preferredName")}
          placeholder="Your preferred name"
          label="Preferred name"
        />
        <GeneralTextInput
          key={form.key("maidenName")}
          {...form.getInputProps("maidenName")}
          placeholder="Your maiden name"
          label="Maiden name"
        />
        <GeneralTextInput
          key={form.key("pronouns")}
          {...form.getInputProps("pronouns")}
          placeholder="Your pronouns"
          label="Pronouns"
        />
        <GeneralTextarea
          key={form.key("motto")}
          {...form.getInputProps("motto")}
          placeholder="Your motto"
          label="Motto"
          autosize
          minRows={2}
          maxRows={6}
        />
      </Stack>

      <TitleDivider text="Affiliation" order={3} mt="xl" />
      <Stack maw="400px">
        <GeneralTextInput
          key={form.key("title")}
          {...form.getInputProps("title")}
          placeholder="Your title"
          label="Title"
        />
        <GeneralTextInput
          key={form.key("department")}
          {...form.getInputProps("department")}
          placeholder="Your department"
          label="Department"
        />
        <GeneralTextInput
          key={form.key("company")}
          {...form.getInputProps("company")}
          placeholder="Your company"
          label="Company"
        />
        <GeneralTextarea
          key={form.key("headline")}
          {...form.getInputProps("headline")}
          placeholder="Your headline"
          label="Headline"
        />
      </Stack>
    </>
  );
}
