import { FaTimes } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/SmallSidebar';
import { Logo, NavLinks } from './';
import { useDashboardContext } from '../pages/DashboardLayout';

const SmallSidebar = () => {
  const { isShowSidebar, toggleSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div
        className={
          isShowSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
