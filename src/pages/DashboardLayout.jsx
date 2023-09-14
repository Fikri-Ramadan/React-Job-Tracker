import { Outlet, useLoaderData, redirect, useNavigate } from 'react-router-dom';
import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import Wrapper from '../assets/wrappers/Dashboard';
import { Navbar, BigSidebar, SmallSidebar } from '../components';
import customFetch from '../utils/customFetch';

const DashboardContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  try {
    const { data } = await customFetch.get('/user/current-user');
    return data;
  } catch (error) {
    return redirect('/');
  }
};

// eslint-disable-next-line react/prop-types
const DashboardLayout = ({ isDarkThemeEnabled }) => {
  const { user } = useLoaderData();
  const navigate = useNavigate();

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
              <Outlet context={{user}} />
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
