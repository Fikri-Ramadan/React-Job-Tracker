/* eslint-disable react/prop-types */
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/StatsContainer';
import StatItems from './StatItem';

const StatsContainer = ({ stats }) => {
  const statsData = [
    {
      count: stats.pending,
      title: 'Pending Applications',
      icon: <FaSuitcaseRolling />,
      color: '#f59e0b',
      bgColor: '#fef3c7',
    },
    {
      count: stats.interview,
      title: 'Interviews Scheduled',
      icon: <FaCalendarCheck />,
      color: '#647acb',
      bgColor: '#e0e8f9',
    },
    {
      count: stats.declined,
      title: 'Jobs Declined',
      icon: <FaBug />,
      color: '#d66a6a',
      bgColor: '#ffeeee',
    },
  ];

  return (
    <Wrapper>
      {statsData.map((stat) => {
        return <StatItems key={stat.title} {...stat} />;
      })}
    </Wrapper>
  );
};

export default StatsContainer;
