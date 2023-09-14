import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: var(--background-secondary-color);
  border-radius: var(--border-radius);
  width: 100%;
  padding: 3rem 2rem 4rem 2rem;
  .form {
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 0;
    border-radius: 0;
    box-shadow: none;
  }
  .form-title {
    margin-bottom: 2rem;
  }
  .form-center {
    display: grid;
    column-gap: 1rem;
    align-items: center;
  }
  .form-row {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }
  .form-btn {
    align-self: end;
    display: grid;
    place-items: center;
    margin-top: 1rem;
  }

  .label {
    letter-spacing: 1px;
    font-size: 0.875rem;
  }

  .input,
  .select {
    width: 100%;
    height: 35px;
    padding: 0.375rem 0.75rem;
    border-radius: var(--border-radius);
    background: var(--grey-200);
    border: 1px solid var(--grey-300);
    color: var(--text-color);
    background: var(--background-color);
  }

  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      row-gap: 1rem;
      align-items: center;
    }
  }
  
  @media (min-width: 1122px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
      row-gap: 1rem;
      align-items: center;
    }
    .form-row {
      margin-bottom: 0;
    }
  }
`;

export default Wrapper;
