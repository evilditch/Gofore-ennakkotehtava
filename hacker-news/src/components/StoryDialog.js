
const StoryDialog = ({ story, dialogRef, closeStory}) => {
  return (
    <dialog ref={dialogRef} onClose={closeStory}>
      <button onClick={closeStory}>Close</button>
      { story &&
        <>
        <h2>{ story.title }</h2>
        <p>By: { story.by }</p>
        <p>Time: { new Date(story.time * 1000).toLocaleString() }</p>
        <p>URL: <a href={story.url}>{ story.url}</a></p>
        </>
      }
    </dialog>
  )
}

export default StoryDialog