import { useQuery } from '@tanstack/react-query';
import { ChartsContainer, StatsContainer } from '../components';
import customFetch from '../utils/customFetch';

const statsQuery = {
  queryKey: ['stat'],
  queryFn: async () => {
    const { data } = await customFetch.get('/jobs/stats');
    return data;
  },
};

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async (queryClient) => {
  await queryClient.ensureQueryData(statsQuery);
  return null;
};

const Stats = () => {
  const { data } = useQuery(statsQuery);
  const { stats, monthlyStats } = data;

  return (
    <>
      <StatsContainer stats={stats} />
      {monthlyStats?.length > 1 && <ChartsContainer data={monthlyStats} />}
    </>
  );
};

export default Stats;
