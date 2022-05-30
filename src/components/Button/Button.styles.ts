import styled from 'styled-components';
import GeneralStyles from '@styles/themes/default';

const {
  font: { sizes },
} = GeneralStyles;

export default styled.button`
  transition: all 300ms ease-in-out;
  padding: 10px 25px;
  border-radius: 5px;
  font-size: ${sizes.xsmall};
  font-weight: 600;
  width: fit-content;
  height: 48px;
  padding: 0px 32px;
  color: var(--white);
  background: var(--red);

  &:hover {
    opacity: 95%;
  }
`;
