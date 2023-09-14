import Wrapper from '../assets/wrappers/BigSidebar';
import { Logo, NavLinks } from './';
import { useDashboardContext } from '../pages/DashboardLayout';

const BigSidebar = () => {
  const { isShowSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div
        className={
          isShowSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'
        }
      >
        <div className="content">
          <header>
            <div className="logo">
              <Logo />
            </div>
          </header>
          <NavLinks isBigSidebar />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
