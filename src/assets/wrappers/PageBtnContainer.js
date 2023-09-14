import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: end;
  .prev-btn,
  .next-btn {
    color: var(--primary-500);
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background-color: var(--background-secondary-color);
  }
  .prev-btn:hover,
  .next-btn:hover {
    background-color: var(--primary-500);
    transition: var(--transition);
    color: var(--white);
  }
  .btn-container {
    margin: 0 1rem;
    display: flex;
  }
  .btn-page {
    width: 50px;
    height: 40px;
    background: var(--background-secondary-color);
    color: var(--primary-500);
    font-weight: 700;
    font-size: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .active {
    background-color: var(--primary-500);
    color: var(--white);
  }
  .dots {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Wrapper;
