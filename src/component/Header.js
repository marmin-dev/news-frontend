import styled from 'styled-components';
import Responsive from './common/Responsive';
import palette from '../lib/styles/palette';
import Button from './common/Button';

//헤더블럭
const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: ${palette.gray[4]};
`;
//Responsive 컴포넌트의 속성에 스타일 추가
const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 2px black solid;
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 4px;
  }
  .right {
    display: flex;
    align-items: center;
    justify-items: flex-end;
  }
`;
const Spacer = styled.div`
  height: 4rem;
`;
const Header = () => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <div className="logo">MARMIN NEWS</div>
          <div className="right">
            <Button>Login</Button>
          </div>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};
export default Header;
