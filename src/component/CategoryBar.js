import styled from 'styled-components';
import palette from '../lib/styles/palette';

const categories = [
  {
    name: 'all',
    text: '전체보기',
  },
  {
    name: 'business',
    text: '비즈니스',
  },
  {
    name: 'health',
    text: '건강',
  },
  {
    name: 'science',
    text: '과학',
  },
  {
    name: 'sports',
    text: '스포츠',
  },

  {
    name: 'technology',
    text: '기술',
  },
];
const NavBar = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${palette.gray[5]};
  position: fixed;
  margin-top: 0px;
`;
const Navcomponent = styled.li`
  background: ${palette.gray[5]};
  color: black;
  align-items: center;
  height: 4rem;
  display: flex;
  align-items: center;
  padding-left: 3rem;
  padding-right: 3rem;
  font-size: 1.125rem;

  &:hover {
    background: ${palette.gray[7]};
    color: white;
  }
`;
const Spacer = styled.div`
  height: 4rem;
`;
const CategoryBar = ({ onSelect, category }) => {
  return (
    <>
      <NavBar>
        {categories.map((c) => (
          <Navcomponent
            key={c.name}
            active={category === c.name}
            onClick={() => onSelect(c.name)}
          >
            {c.text}
          </Navcomponent>
        ))}
      </NavBar>
      <Spacer />
    </>
  );
};
export default CategoryBar;
