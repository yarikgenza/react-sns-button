import styled from 'styled-components';

export default styled.div`
  align-items: center;
  background-color: ${props => props.styleBackgroundColor};
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  height: fit-content;
  width: fit-content;
`;
