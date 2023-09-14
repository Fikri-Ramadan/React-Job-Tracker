import styled from 'styled-components';

const Wrapper = styled.section`
    min-height: 100vh;
    .form {
        padding: 2rem 2rem;
        max-width: 25rem;
        margin: 3rem auto;
        border-top: 4px solid var(--primary-500);
        border-radius: 4px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        background: var(--background-secondary-color);
    }

    .logo {
        display: block;
        width: 7rem;
        margin: 0 auto;
    }

    h3 {
        text-align: center;
        margin-bottom: 2rem;
    }

    .form-row {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .label {
        letter-spacing: 1px;
    }

    .input {
        font: inherit;
        width: 100%;
        padding: 0.375rem 0.75rem;
        border-radius: var(--border-radius);
        background: var(--grey-200);
        border: 1px solid var(--grey-300);
        color: var(--text-color);
        background: var(--background-color);
    }

    .btn {
        margin-top: 0.5rem;
        padding: 0.5rem;
    }

    p {
        margin-top: 2rem;
        text-align: center;
    }

    .btn-link {
        color: var(--primary-500);
        letter-spacing: 1px;
        margin-left: 0.2rem;
    }
`;
export default Wrapper;
