import StoriesList from './components/StoriesList'
import Story from './components/Story'
import { useState } from 'react'

const App = () => {
  const [storyId, setStoryId] = useState('')

  return (
    <>
      <h1>The most read stories of Hacker News</h1>
    <StoriesList />
    <Story id={storyId} />
    </>
  )
}

export default App