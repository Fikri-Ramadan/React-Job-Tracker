import { NavLink } from 'react-router-dom';
import links from '../utils/links';
import { useDashboardContext } from '../pages/DashboardLayout';

// eslint-disable-next-line react/prop-types
const NavLinks = ({ isBigSidebar }) => {
  const { toggleSidebar, user } = useDashboardContext();

  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon } = link;
        if (user.role !== 'admin' && path === 'admin') return;
        return (
          <NavLink
            to={path}
            key={text}
            className="nav-link"
            end
            onClick={isBigSidebar ? null : toggleSidebar}
          >
            <span className="icon">{icon}</span>
            <p>{text}</p>
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
