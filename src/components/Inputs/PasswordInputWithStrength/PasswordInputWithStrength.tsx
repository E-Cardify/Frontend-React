import getStrength, { requirements } from "@helpers/getPasswordStrength";
import {
  MantineSize,
  PasswordInputProps,
  Popover,
  Progress,
} from "@mantine/core";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import PasswordRequirement from "./components/PasswordRequirement";
import GeneralPasswordInput from "../GeneralPasswordInput/GeneralPasswordInput";

interface Props extends PasswordInputProps {
  label: string;
  placeholder: string;
  withAsterisk?: boolean;
  size?: MantineSize;
  mt?: MantineSize;
}

const PasswordInputWithStrength = (props: Props) => {
  const { t } = useTranslation();
  const { label, placeholder, withAsterisk, size, mt, ...rest } = props;

  const [popoverOpened, setPopoverOpened] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");

  const strength = useMemo(() => {
    return getStrength(passwordValue);
  }, [passwordValue]);

  const color = useMemo(() => {
    return strength === 100 ? "teal" : strength > 50 ? "yellow" : "red";
  }, [strength]);

  const checks = useMemo(() => {
    return requirements.map((requirement, index) => (
      <PasswordRequirement
        key={index}
        label={requirement.label}
        meets={requirement.re.test(passwordValue)}
      />
    ));
  }, [passwordValue]);

  return (
    <Popover
      opened={popoverOpened}
      position="bottom"
      width="target"
      transitionProps={{ transition: "pop-top-left" }}
    >
      <Popover.Target>
        <div
          onFocusCapture={() => setPopoverOpened(true)}
          onBlurCapture={() => setPopoverOpened(false)}
        >
          <GeneralPasswordInput
            placeholder={t(placeholder)}
            label={t(label)}
            withAsterisk={withAsterisk}
            size={size || "md"}
            mt={mt || "md"}
            onInput={(e) => {
              setPasswordValue(e.currentTarget.value);
            }}
            {...rest}
          />
        </div>
      </Popover.Target>
      <Popover.Dropdown>
        <Progress color={color} value={strength} size={5} mb="xs" />
        <PasswordRequirement
          label="Includes at least 6 characters"
          meets={passwordValue.length > 5}
        />
        {checks}
      </Popover.Dropdown>
    </Popover>
  );
};

export default PasswordInputWithStrength;
