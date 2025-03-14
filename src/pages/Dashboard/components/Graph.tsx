import { AreaChart } from "@mantine/charts";
import { Box, LoadingOverlay } from "@mantine/core";
import { useEffect, useState } from "react";

const data = [
  {
    date: "Mar 22",
    Views: 2890,
    Scans: 2338,
    Clicks: 2452,
  },
  {
    date: "Mar 23",
    Views: 2756,
    Scans: 2103,
    Clicks: 2402,
  },
  {
    date: "Mar 24",
    Views: 3322,
    Scans: 986,
    Clicks: 1821,
  },
  {
    date: "Mar 25",
    Views: 3470,
    Scans: 2108,
    Clicks: 2809,
  },
  {
    date: "Mar 26",
    Views: 3129,
    Scans: 1726,
    Clicks: 2290,
  },
];

export default function Graph() {
  const [graphData, setGraphData] = useState<unknown | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setGraphData(data);
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Box pos="relative">
        <LoadingOverlay
          visible={isLoading}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
        />
        <AreaChart
          h={300}
          data={graphData}
          dataKey="date"
          series={[
            { name: "Views", color: "indigo.6" },
            { name: "Scans", color: "blue.6" },
            { name: "Clicks", color: "teal.6" },
          ]}
          curveType="natural"
          tickLine="none"
        />
      </Box>
    </>
  );
}
