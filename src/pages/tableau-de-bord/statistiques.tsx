import StatsWrapper from "@cubes/modules/adminDashboard/components/templates/StatsWrapper";
import Stats from "@cubes/modules/adminDashboard/types/Stats";
import { GetServerSideProps } from "next";
import axios from "axios";

export const getServerSideProps: GetServerSideProps<{
  stats: Stats;
}> = async () => {
  const instance = axios.create();
  const res = await instance.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/Stats/StatToday`
  );

  // @ts-ignore
  const stats = res.data.data as Stats;

  return {
    props: {
      stats: stats as Stats,
    },
  };
};

export default function StatsPage({ stats }: { stats: Stats }) {
  return <StatsWrapper stats={stats} />;
}
