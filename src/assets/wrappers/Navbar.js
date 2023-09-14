import styled from 'styled-components';

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--nav-height);
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  background: var(--background-secondary-color);
  .nav-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90vw;
  }

  .toggle-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: none;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
  }

  .logo {
    display: flex;
    align-items: center;
    width: 75px;
  }

  .logo-text {
    display: none;
  }

  .btn-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
  
    .logo-text {
      display: block;
    } 
  }

`;
export default Wrapper;
