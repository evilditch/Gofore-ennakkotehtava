
const Story = ({ id, closeStory }) => {
  if (id !== null) {
    return (
      <div>
      <button onClick={() => closeStory()}>Close</button>
        <h2>Jutun otsikko { id }</h2>
        <p>Sisältö</p>
      </div>
    )
  }
}

export default Story