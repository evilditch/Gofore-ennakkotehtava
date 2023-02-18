import StoriesList from './components/StoriesList'
import Story from './components/Story'
import { useState } from 'react'

const App = () => {
  const [storyId, setStoryId] = useState(null)

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