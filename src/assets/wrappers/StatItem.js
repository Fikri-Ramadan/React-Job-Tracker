import styled from 'styled-components';

const Wrapper = styled.article`
  background-color: var(--background-secondary-color);
  border-bottom: 5px solid ${(props) => props.color};
  border-radius: var(--border-radius);
  display: grid;
  line-height: 2;
  padding: 2rem;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .count {
    font-weight: 700;
    font-size: 3rem;
    color: ${(props) => props.color};
  }
  .icon {
    width: 70px;
    height: 60px;
    border-radius: var(--border-radius);
    background-color: ${(props) => props.bgColor};
    display: grid;
    place-items: center;
    svg {
      font-size: 2rem;
      color: ${(props) => props.color};
    }
  }
  .title {
    letter-spacing: 2px;
    margin: 0;
    text-align: left;
  }
`;

export default Wrapper;
