import axios from 'axios'

const baseUrl = 'https://hacker-news.firebaseio.com/v0'

// luetuimmat jutut: https://hacker-news.firebaseio.com/v0/topstories.json
// Yksittäinen juttu: https://hacker-news.firebaseio.com/v0/item/${storyId}.json

const topStories = async () => {
  const response = await axios.get(`${baseUrl}/topstories.json`)
  return response.data
}

const getStory = async (storyId) => {
  const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
  return response.data
}

const getStories = async () => {
  const ids = await topStories()
  console.log('id lista ', ids)

  const stories = await Promise.all(ids.map(id => {
    return getStory(id)
  }))
  console.log(stories[0])
  
  return stories
}

export default { getStories }