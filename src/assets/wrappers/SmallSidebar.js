import styled from 'styled-components';

const Wrapper = styled.aside`
    @media (min-width: 992px) {
        display: none;
    }

    .sidebar-container {
        visibility: hidden;
        display: none;
        position: fixed;
        inset: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.7);
        transition: var(--transition);
        opacity: 0;
        z-index: -1;
    }

    .show-sidebar {
        visibility: visible;
        opacity: 1;
        z-index: 99;
    }

    .content {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 90vw;
        height: 90vh;
        background: var(--background-secondary-color);
        border-radius: var(--border-radius);
    }

    .logo {
        width: 125px;
    }

    .close-btn {
        position: absolute;
        top: 10px;
        left: 10px;
        border: none;
        background: transparent;
        font-size: 2rem;
        color: var(--red-dark);
        cursor: pointer;
    }

    .nav-links {
        display: flex;
        flex-direction: column;
        padding-top: 2rem;
    }

    .nav-link {
        display: flex;
        align-items: center;
        text-transform: capitalize;
        color: var(--text-secondary-color);
        transition: var(--transition);
        padding: 1rem 0;
    }

    .nav-link:hover {
        color: var(--primary-500);
    }

    .icon {
        display: grid;
        place-items: center;
        font-size: 1.5rem;
        margin-right: 1rem;
    }

    .active {
        color: var(--primary-500);
    }
`;
export default Wrapper;
