import CategoryBar from '../component/CategoryBar';
import Responsive from '../component/common/Responsive';
import Header from '../component/Header';
import NewsList from '../component/NewsList';

const NewsListPage = () => {
  return (
    <>
      <Responsive>
        <Header />
        <CategoryBar />
        <NewsList />
      </Responsive>
    </>
  );
};
export default NewsListPage;
