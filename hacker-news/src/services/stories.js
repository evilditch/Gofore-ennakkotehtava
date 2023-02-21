import axios from 'axios'

const baseUrl = 'https://hacker-news.firebaseio.com/v0'

const topStories = async () => {
  const response = await axios.get(`${baseUrl}/topstories.json`)
  return response.data
}

const getStory = async (storyId) => {
  const response = await axios.get(`${baseUrl}/item/${storyId}.json`)
  return response.data
}

const getStories = async (idsList) => {
  const stories = await Promise.all(idsList.map(id => {
    return getStory(id)
  }))
  return stories
}

export default { topStories, getStories }