import {useState, useEffect } from 'react';
import { getStories } from '../services/api';

const useDataFetcher = (type) => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      setIsLoading(true);
      getStories(type)
        .then((articles) => {
          setArticles(articles);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    }, [type]);
  
    return { isLoading, articles };
  };
  
  export default useDataFetcher;