
const StoryDialog = ({ story, dialogRef, closeStory }) => {
  let timeAgo = ''

  if (story) {
    const timeDiff = Date.now() - story.time*1000
    const days = Math.floor(timeDiff / 1000 / 60 / 60 / 24)
    const hours = Math.floor(timeDiff / 1000 / 60 / 60)
    const minutes = Math.floor(timeDiff / 1000 / 60)
    
    if (days > 0) {
      timeAgo = `${days} days ago`
    } else if (hours > 0) {
      timeAgo = `${hours} hours ago`
    } else {
      timeAgo = `${minutes} minutes ag`
    }
  }
  
  return (
    <dialog ref={dialogRef} onClose={closeStory}>
      { story &&
        <>
          <h2 autoFocus={true} tabIndex={-1}>{ story.title }</h2>
          <p>By <b>{ story.by }</b> { timeAgo }</p>
          <p>Score { story.score }</p>
          <p>URL: <a href={story.url}>{ story.url }</a></p>
        </>
      }
      <div className='closebutton'><button onClick={closeStory}>Close</button></div>
    </dialog>
  )
}

export default StoryDialog