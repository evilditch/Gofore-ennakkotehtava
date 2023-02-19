import StoriesList from './components/StoriesList'
import StoryDialog from './components/StoryDialog'
import storyService from './services/stories'
import { useState, useEffect, useRef } from 'react'

const App = () => {
  const [viewStory, setViewStory] = useState(null)
  const [idsList, setIdsList] = useState([])
  const [stories, setStories] = useState([])
  const storyDialogRef = useRef()

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
  
  useEffect(() => {
    if (viewStory) {
      storyDialogRef.current.showModal()
    }
  }, [viewStory])
  
  const openStory = (id) => {
    const story = stories.find(story => story.id === id)
    setViewStory(story)
    // storyDialogRef.current.showModal()
  }

  const closeStory = () => {
    storyDialogRef.current.close()
    setViewStory(null)
  }

  return (
    <>
      <h1>The top stories of Hacker News</h1>
      <StoriesList openStory={openStory} stories={stories.slice(0,20)} />
      <StoryDialog dialogRef={storyDialogRef} story={viewStory} closeStory={closeStory} />
    </>
  )
}

export default App