import React from 'react'
import useDataFetcher from '../hooks/dataFetcher';
import Article from './article';

const ShowArticles = ({type}) => {
  const { isLoading, articles } = useDataFetcher(type);
  return (
    <React.Fragment>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <React.Fragment>
          {articles.map(({data:article} ) => (
            <Article key={article.id} article={article} type={type}/>
          ))}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ShowArticles