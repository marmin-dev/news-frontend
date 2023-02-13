/* eslint-disable array-callback-return */
import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import News from './News';

const NewsListBlock = styled.div`
  box-sizing: inherit;
  padding-bottom: 3rem;
  width: auto;
  margin: 0 auto;
  margin-top: 2rem;
`;

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  //데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=kr&apiKey=e5a4e0995eaa4c389c235ca18629912c',
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  //대기시
  if (loading) {
    return <NewsListBlock>대기중 ...</NewsListBlock>;
  }

  //article의 값이 설정되지 않았을떄
  if (!articles) {
    return null;
  }

  //article 값 유효
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <News key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};
export default NewsList;
