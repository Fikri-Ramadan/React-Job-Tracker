/* eslint-disable react/prop-types */
import { Outlet, redirect, useNavigate, useNavigation } from 'react-router-dom';
import { createContext, useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import Wrapper from '../assets/wrappers/Dashboard';
import { Navbar, BigSidebar, SmallSidebar, Loading } from '../components';
import customFetch from '../utils/customFetch';

const DashboardContext = createContext();

const userQuery = {
  queryKey: ['user'],
  queryFn: async () => {
    const { data } = await customFetch.get('/user/current-user');
    return data;
  },
};

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async (queryClient) => {
  try {
    return await queryClient.ensureQueryData(userQuery);
  } catch (error) {
    return redirect('/');
  }
};

// eslint-disable-next-line react/prop-types
const DashboardLayout = ({ isDarkThemeEnabled, queryClient }) => {
  const { user } = useQuery(userQuery).data;

  const navigate = useNavigate();
  const navigation = useNavigation();

  const isPageLoading = navigation.state === 'loading';

  const [isShowSidebar, setIsShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeEnabled);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle('dark-theme', newDarkTheme);
    localStorage.setItem('dark-theme', newDarkTheme);
  };

  const toggleSidebar = () => {
    setIsShowSidebar(!isShowSidebar);
  };

  const logoutUser = async () => {
    toast.success('Logging Out...');
    queryClient.invalidateQueries(['user']);
    await customFetch.get('/auth/logout');
    navigate('/');
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        toggleSidebar,
        toggleDarkTheme,
        isShowSidebar,
        isDarkTheme,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              {isPageLoading ? <Loading /> : <Outlet context={{ user }} />}
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout;
