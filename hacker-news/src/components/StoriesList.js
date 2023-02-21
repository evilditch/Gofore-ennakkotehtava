
const StoriesList = ({ openStory, stories, newContentRef, showing }) => {
  return (
    <ol>
    { stories.map((story, index) => 
      <li key={story.id}>
        <button ref={index === showing ? newContentRef : null}
          onClick={() => openStory(story.id)} 
          className='openbutton'>
          { story.title }
        </button>
      </li>
    )}
    </ol>
  )
}

export default StoriesList