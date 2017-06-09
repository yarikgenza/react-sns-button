import styled from 'styled-components';
import { FONT_FAMILY_MAIN } from 'binary-ui-styles/web';

export default styled.div`
  color: ${props => props.styleColor || '#FFFFFF'};
  font-family: ${FONT_FAMILY_MAIN};
  font-size: 16px;
  font-weight: 400;
  padding-right: 10px;
`;
