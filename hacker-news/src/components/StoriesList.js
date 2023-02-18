
const StoriesList = ({ openStory, stories }) => {
  return (
    <ol>
    { stories.map(story => 
      <li key={story.id}><button onClick={() => openStory(story.id)}>{ story.by }: { story.title }</button></li>
    )}
    </ol>
  )
}

export default StoriesList