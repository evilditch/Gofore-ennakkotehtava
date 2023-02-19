// import '../styles.css'

const StoriesList = ({ openStory, stories }) => {
  return (
    <ol>
    { stories.map(story => 
      <li key={story.id}><button onClick={() => openStory(story.id)} className='openbutton'>{ story.title }</button></li>
    )}
    </ol>
  )
}

export default StoriesList