
const Story = ({ story, closeStory }) => {
  if (story !== null) {
    const time = new Date(story.time * 1000).toLocaleString()

    return (
      <div>
        <button onClick={() => closeStory()}>Close</button>
        <h2>{ story.title }</h2>
        <p>By: { story.by }</p>
        <p>Time: { time }</p>
        <p>URL: <a href={story.url}>{ story.url }</a></p>
      </div>
    )
  }
}

export default Story