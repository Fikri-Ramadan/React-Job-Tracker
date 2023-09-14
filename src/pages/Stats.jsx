import { useLoaderData } from 'react-router-dom';
import { ChartsContainer, StatsContainer } from '../components';
import customFetch from '../utils/customFetch';

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  try {
    const response = await customFetch.get('/jobs/stats');
    return response.data;
  } catch (error) {
    return error;
  }
};

const Stats = () => {
  const { stats, monthlyStats } = useLoaderData();
  return (
    <>
      <StatsContainer stats={stats} />
      {monthlyStats?.length > 1 && <ChartsContainer data={monthlyStats} />}
    </>
  );
};

export default Stats;
