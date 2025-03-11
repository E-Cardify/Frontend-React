import { CollapseIcon } from "@icons";
import { ActionIcon, Group } from "@mantine/core";

import { Tooltip } from "@mantine/core";
import { useTranslation } from "react-i18next";

type Props = {
  toggleDesktop: () => void;
  toggleMobile: () => void;
};

const NavbarToggle = ({ toggleDesktop, toggleMobile }: Props) => {
  const { t } = useTranslation();

  return (
    <Tooltip label={t("Toggle navbar")} openDelay={500}>
      <Group>
        <ActionIcon
          variant="subtle"
          color="gray"
          size="compact-lg"
          onClick={toggleDesktop}
          visibleFrom="sm"
        >
          <CollapseIcon size={16} />
        </ActionIcon>
        <ActionIcon
          variant="subtle"
          color="gray"
          size="compact-lg"
          onClick={toggleMobile}
          hiddenFrom="sm"
        >
          <CollapseIcon size={16} />
        </ActionIcon>
      </Group>
    </Tooltip>
  );
};

export default NavbarToggle;
