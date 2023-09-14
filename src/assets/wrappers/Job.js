import styled from 'styled-components';

const Wrapper = styled.article`
  background-color: var(--background-secondary-color);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-2);
  header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-50);
    display: flex;
  }
  .main-icon {
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 700;
    width: 50px;
    height: 50px;
    margin-right: 2rem;
    padding: 2rem;
    color: var(--white);
    background-color: var(--primary-500);
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-transform: capitalize;
  }
  .position {
    font-size: 1.2rem;
    letter-spacing: 2px;
    margin-bottom: 0.5rem;
  }
  .company {
    color: var(--text-secondary-color);
    letter-spacing: 1px;
  }
  .content {
    padding: 1.5rem 2rem;
    text-transform: capitalize;
  }
  .content-center {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    align-items: center;
    @media (min-width: 568px) {
      grid-template-columns: 1fr 1fr;
    }
  }
  .content-info {
    margin-left: 1rem;
    letter-spacing: 1px;
  }
  .status {
    width: 100px;
    height: 30px;
    border-radius: var(--border-radius);
    display: grid;
    place-items: center;
    letter-spacing: 1px;
    text-transform: capitalize;
  }
  .action {
    margin-top: 2rem;
    display: flex;
    column-gap: 0.5rem;
  }
  .btn-edit,
  .btn-delete {
    font-size: 0.85rem;
    padding: 0.5rem 0;
    width: 80px;
    display: grid;
    place-items: center;
  }
`;

export default Wrapper;
