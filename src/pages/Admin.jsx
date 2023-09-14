import { FaSuitcaseRolling, FaCalendarCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useLoaderData, redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import StatItem from '../components/StatItem';
import Wrapper from '../assets/wrappers/StatsContainer';

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  try {
    const { data } = await customFetch.get('/user/admin/app-stats');
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return redirect('/dashboard');
  }
};

const Admin = () => {
  const data = useLoaderData();
  const { totalUsers, totalJobs } = data;
  return (
    <Wrapper>
      <StatItem
        count={totalUsers}
        title="Current Users"
        icon={<FaSuitcaseRolling />}
        color="#e9b949"
        bgColor="#fcefc7"
      />
      <StatItem
        count={totalJobs}
        title="Total Jobs"
        icon={<FaCalendarCheck />}
        color="#647acb"
        bgColor="#e0e8f9"
      />
    </Wrapper>
  );
};

export default Admin;
