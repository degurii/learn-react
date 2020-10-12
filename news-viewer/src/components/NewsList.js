import React from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";
import usePromise from "../lib/usePromise";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// const sampleArticle = {
//   title: "제목",
//   description: "내용",
//   url: "https://google.com",
//   urlToImage: "https://via.placeholder.com/160",
// };

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const path = "http://newsapi.org/v2/top-headlines";
    const query =
      "?country=kr" + (category === "all" ? "" : `&category=${category}`);
    const apiKey = "&apiKey=6cd6da2d62c548528a381829f92f3f78";
    return axios.get(path + query + apiKey);
  }, [category]);
  if (loading) {
    return <NewsListBlock>로딩 중</NewsListBlock>;
  }
  if (!response) {
    return null;
  }
  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>;
  }
  const { articles } = response.data;
  /*
  아래는 커스텀 훅 사용 x
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const path = "http://newsapi.org/v2/top-headlines";
        const query =
          "?country=kr" + (category === "all" ? "" : `&category=${category}`);
        const apiKey = "&apiKey=6cd6da2d62c548528a381829f92f3f78";
        const fullPath = path + query + apiKey;
        const response = await axios.get(fullPath);
        setArticles(response.data.articles);
      } catch (e) { 
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  if (loading) {
    return <NewsListBlock>로딩 중</NewsListBlock>;
  }
  if (!articles) {
    return null;
  }
  */
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
