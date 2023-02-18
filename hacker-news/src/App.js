import StoriesList from './components/StoriesList'
import Story from './components/Story'
import storyService from './services/stories'
import { useState, useEffect } from 'react'

const App = () => {
  const [storyId, setStoryId] = useState(null)
  const [ids, setIds] = useState([])
  const [stories, setStories] = useState([])
  


  useEffect(() => {
    const fetchData = async () => {
      const topStories = await storyService.getStories()
      setStories(topStories)
    }
    fetchData()
  }, [])
  
  console.log(stories.length)

  const openStory = (id) => {
    setStoryId(id)
  }

  const closeStory = () => {
    setStoryId(null)
  }

  return (
    <>
      <h1>The most read stories of Hacker News</h1>
    <StoriesList openStory={openStory}/>
    <Story id={storyId} closeStory={closeStory} />
    </>
  )
}

export default App