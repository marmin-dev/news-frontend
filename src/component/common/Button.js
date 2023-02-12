import { css } from 'cheerio/lib/api/css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const ButtonStyle = css`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: black;
  outline: 2px;
  cursor: pointer;
  background-color: ${palette.gray[4]};
  &:hover {
    background: ${palette.gray[7]};
    color: white;
  }
`;
const styledButton = styled.button`
  ${ButtonStyle}
`;
const StyledLink = styled(Link)`
  ${ButtonStyle}
`;

const Button = (props) => {
  return props.to ? <StyledLink {...props} /> : <styledButton {...props} />;
};
export default Button;
