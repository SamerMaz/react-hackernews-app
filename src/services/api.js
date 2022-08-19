import axios from 'axios';
import { BASE_API_URL } from '../utils/constant';

export const getStory = async (id) => {
  try {
    const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    return story;
  } catch (error) {
    console.log('Error while getting a story.');
  }
};

export const getStories = async (type, currentPage, postsPerPage) => {
  try {
    
    const { data: storyIds } = await axios.get(
      `${BASE_API_URL}/${type}stories.json`
    );
    //Promise.all method to make API calls simultaneously for all the story ids.
    if(type==='top'){
        const begin = (currentPage-1)*postsPerPage;
        const end = begin + postsPerPage
        console.log(begin, end)
         const stories = await Promise.all(storyIds.slice(begin, end).map(getStory));
         return stories
    }
    else{
      const articles = await Promise.all(storyIds.slice(0, 10).map(getStory))
      return articles;
    
    }
    
  } catch (error) {
    console.log('Error while getting list of stories.');
  }
};