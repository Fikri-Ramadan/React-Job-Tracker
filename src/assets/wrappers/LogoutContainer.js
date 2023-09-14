import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  .logout-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 0.5rem;
  }

  .img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    object-fit: cover;
  }

  .dropdown {
    position: absolute;
    top: 45px;
    left: 0;
    width: 100%;
    box-shadow: var(--shadow-2);
    visibility: hidden;
    text-align: center;
  }

  .show-dropdown {
    visibility: visible;
  }

  .dropdown-btn {
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    background: var(--primary-500);
    border-color: transparent;
    border-radius: var(--border-radius);
    color: var(--white);
    letter-spacing: var(--letter-spacing);
    cursor: pointer;
    text-transform: capitalize;
  }
`;

export default Wrapper;
