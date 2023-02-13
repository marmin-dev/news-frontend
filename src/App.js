import { useCallback, useState } from 'react';
import CategoryBar from './component/CategoryBar';
import Responsive from './component/common/Responsive';
import Header from './component/Header';
import NewsList from './component/NewsList';

const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <>
      <>
        <Responsive>
          <Header />
          <CategoryBar category={category} onSelect={onSelect} />
          <NewsList category={category} />
        </Responsive>
      </>
    </>
  );
};

export default App;
