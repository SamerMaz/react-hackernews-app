import axios from 'axios';
import { BASE_API_URL } from '../utils/constant';

const getStory = async (id) => {
  try {
    const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    return story;
  } catch (error) {
    console.log('Error while getting a story.');
  }
};

export const getStories = async (type) => {
  try {
    const { data: storyIds } = await axios.get(
      `${BASE_API_URL}/${type}stories.json`
    );
    //Promise.all method to make API calls simultaneously for all the story ids.
    const stories = await Promise.all(storyIds.slice(0, 10).map(getStory));
    return stories;
  } catch (error) {
    console.log('Error while getting list of stories.');
  }
};