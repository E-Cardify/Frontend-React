import { useState } from "react";
import {
  ActionIcon,
  Center,
  Group,
  keys,
  ScrollArea,
  Table,
  Text,
  TextInput,
  Title,
  Tooltip,
  UnstyledButton,
  Menu,
  Stack,
  ThemeIcon,
  Button,
} from "@mantine/core";
import classes from "./TableSort.module.css";
import {
  ChevronsUpDown,
  Search,
  ChevronUp,
  ChevronDown,
  Pencil,
  Share,
  Settings,
  ArrowLeftRight,
  Trash,
  Edit,
  Crown,
  Download,
  ScanQrCode,
  Copy,
  ArrowRight,
} from "lucide-react";

interface RowData {
  name: string;
  email: string;
  company: string;
}

interface ThProps {
  children: React.ReactNode;
  reversed: boolean;
  sorted: boolean;
  onSort: () => void;
}

function Th({ children, reversed, sorted, onSort }: ThProps) {
  const Icon = sorted ? (reversed ? ChevronUp : ChevronDown) : ChevronsUpDown;
  return (
    <Table.Th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group justify="space-between">
          <Text fw={500} fz="sm">
            {children}
          </Text>
          <Center className={classes.icon}>
            <Icon size={16} />
          </Center>
        </Group>
      </UnstyledButton>
    </Table.Th>
  );
}

function filterData(data: RowData[], search: string) {
  const query = search.toLowerCase().trim();
  return data.filter((item) =>
    keys(data[0]).some((key) => item[key].toLowerCase().includes(query))
  );
}

function sortData(
  data: RowData[],
  payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }
) {
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(data, payload.search);
  }

  return filterData(
    [...data].sort((a, b) => {
      if (payload.reversed) {
        return b[sortBy].localeCompare(a[sortBy]);
      }

      return a[sortBy].localeCompare(b[sortBy]);
    }),
    payload.search
  );
}

const data = [
  {
    name: "Athena Weissnat",
    company: "Little - Rippin",
    email: "Elouise.Prohaska@yahoo.com",
  },
  {
    name: "Deangelo Runolfsson",
    company: "Greenfelder - Krajcik",
    email: "Kadin_Trantow87@yahoo.com",
    main: true,
  },
  {
    name: "Danny Carter",
    company: "Kohler and Sons",
    email: "Marina3@hotmail.com",
  },
  {
    name: "Trace Tremblay PhD",
    company: "Crona, Aufderhar and Senger",
    email: "Antonina.Pouros@yahoo.com",
  },
  {
    name: "Derek Dibbert",
    company: "Gottlieb LLC",
    email: "Abagail29@hotmail.com",
  },
  {
    name: "Viola Bernhard",
    company: "Funk, Rohan and Kreiger",
    email: "Jamie23@hotmail.com",
  },
  {
    name: "Austin Jacobi",
    company: "Botsford - Corwin",
    email: "Genesis42@yahoo.com",
  },
  {
    name: "Hershel Mosciski",
    company: "Okuneva, Farrell and Kilback",
    email: "Idella.Stehr28@yahoo.com",
  },
  {
    name: "Mylene Ebert",
    company: "Kirlin and Sons",
    email: "Hildegard17@hotmail.com",
  },
  {
    name: "Lou Trantow",
    company: "Parisian - Lemke",
    email: "Hillard.Barrows1@hotmail.com",
  },
  {
    name: "Dariana Weimann",
    company: "Schowalter - Donnelly",
    email: "Colleen80@gmail.com",
  },
  {
    name: "Dr. Christy Herman",
    company: "VonRueden - Labadie",
    email: "Lilyan98@gmail.com",
  },
  {
    name: "Katelin Schuster",
    company: "Jacobson - Smitham",
    email: "Erich_Brekke76@gmail.com",
  },
  {
    name: "Melyna Macejkovic",
    company: "Schuster LLC",
    email: "Kylee4@yahoo.com",
  },
  {
    name: "Pinkie Rice",
    company: "Wolf, Trantow and Zulauf",
    email: "Fiona.Kutch@hotmail.com",
  },
  {
    name: "Brain Kreiger",
    company: "Lueilwitz Group",
    email: "Rico98@hotmail.com",
  },
];

export function TableSort() {
  const [search, setSearch] = useState("");
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  const setSorting = (field: keyof RowData) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(data, { sortBy: field, reversed, search }));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(
      sortData(data, { sortBy, reversed: reverseSortDirection, search: value })
    );
  };

  const rows = sortedData.map((row) => (
    <Table.Tr key={row.name}>
      <Table.Td>
        <>
          {row.main === true && (
            <Tooltip label="Main card">
              <ThemeIcon color="yellow" variant="white">
                <Crown size={20} />
              </ThemeIcon>
            </Tooltip>
          )}
        </>
      </Table.Td>
      <Table.Td>{row.name}</Table.Td>
      <Table.Td>{row.email}</Table.Td>
      <Table.Td>{row.company}</Table.Td>
      <Table.Td>
        <Group gap="xs" justify="end">
          <Tooltip label="Edit">
            <ActionIcon variant="outline" aria-label="Edit" p="3">
              <Pencil />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Share">
            <ActionIcon variant="outline" aria-label="Share" p="3">
              <Share />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Options">
            <Stack>
              <Menu withArrow>
                <Menu.Target>
                  <ActionIcon variant="outline" aria-label="Share" p="3">
                    <Settings />
                  </ActionIcon>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Label>General</Menu.Label>
                  <Menu.Item leftSection={<Settings size={14} />}>
                    Settings
                  </Menu.Item>
                  <Menu.Item leftSection={<Edit size={14} />}>Edit</Menu.Item>
                  <Menu.Item leftSection={<Crown size={14} />}>
                    Make main
                  </Menu.Item>

                  <Menu.Label>Share</Menu.Label>
                  <Menu.Item leftSection={<Download size={14} />}>
                    Download
                  </Menu.Item>
                  <Menu.Item leftSection={<ScanQrCode size={14} />}>
                    Qr code
                  </Menu.Item>

                  <Menu.Item leftSection={<Copy size={14} />}>
                    Copy link
                  </Menu.Item>

                  <Menu.Divider />

                  <Menu.Label>Danger zone</Menu.Label>
                  <Menu.Item leftSection={<ArrowLeftRight size={14} />}>
                    Transfer
                  </Menu.Item>
                  <Menu.Item color="red" leftSection={<Trash size={14} />}>
                    Delete permanently
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Stack>
          </Tooltip>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea>
      <Group mb={15}>
        <Title order={3}>Your cards</Title>
        <Button size="xs" variant="outline" rightSection={<ArrowRight />}>
          View more
        </Button>
      </Group>
      <TextInput
        placeholder="Search by any field"
        mb="md"
        leftSection={<Search size={16} />}
        value={search}
        onChange={handleSearchChange}
      />
      <Table
        horizontalSpacing="md"
        verticalSpacing="xs"
        miw={1000}
        layout="fixed"
      >
        <Table.Tbody>
          <Table.Tr>
            <Table.Th w="40px"></Table.Th>
            <Th
              sorted={sortBy === "name"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("name")}
            >
              Name
            </Th>
            <Th
              sorted={sortBy === "email"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("email")}
            >
              Email
            </Th>
            <Th
              sorted={sortBy === "company"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("company")}
            >
              Company
            </Th>
            <Table.Th>
              <Group justify="end">Options</Group>
            </Table.Th>
          </Table.Tr>
        </Table.Tbody>
        <Table.Tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <Table.Tr>
              <Table.Td colSpan={Object.keys(data[0]).length}>
                <Text fw={500} ta="center">
                  Nothing found
                </Text>
              </Table.Td>
            </Table.Tr>
          )}
        </Table.Tbody>
      </Table>
    </ScrollArea>
  );
}
