import StoriesList from './components/StoriesList'
import Story from './components/Story'
import storyService from './services/stories'
import { useState, useEffect } from 'react'

const App = () => {
  const [viewStory, setViewStory] = useState(null)
  const [idsList, setIdsList] = useState([])
  const [stories, setStories] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      // Haetaan apista suosituimpien juttujen id:t ja talletetaan ne sovelluksen tilaan
      const topStoriesIds = await storyService.topStories()
      setIdsList(topStoriesIds)
      
      // Haetaan apista 20 ensimmäistä suosituinta juttua ja tallennetaan ne sovelluksen tilaan
      const topStories = await storyService.getStories(topStoriesIds.slice(0,20))
      setStories(topStories)
    }
    fetchData()
  }, [])
  
  console.log(stories.length)

  const openStory = (id) => {
    const story = stories.find(story => story.id === id)
    setViewStory(story)
  }

  const closeStory = () => {
    setViewStory(null)
  }

  return (
    <>
      <h1>The most read stories of Hacker News</h1>
    <StoriesList openStory={openStory} stories={stories.slice(0,20)} />
    <Story story={viewStory} closeStory={closeStory} />
    </>
  )
}

export default App