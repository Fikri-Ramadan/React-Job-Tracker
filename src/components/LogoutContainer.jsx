import { FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/LogoutContainer';
import { useDashboardContext } from '../pages/DashboardLayout';
import { useState } from 'react';

const LogoutContainer = () => {
  const [isShowLogout, setIsShowLogout] = useState(false);
  const { user, logoutUser } = useDashboardContext();
  const { avatar } = user;

  return (
    <Wrapper>
      <button
        type="button"
        className="btn logout-btn"
        onClick={() => setIsShowLogout(!isShowLogout)}
      >
        {user.avatar ? (
          <img src={avatar} alt="avatar" className="img" />
        ) : (
          <FaUserCircle />
        )}
        {user?.firstName}
        <FaCaretDown />
      </button>
      <div className={isShowLogout ? 'dropdown show-dropdown' : 'dropdown'}>
        <button type="button" className="dropdown-btn" onClick={logoutUser}>
          Logout
        </button>
      </div>
    </Wrapper>
  );
};

export default LogoutContainer;
