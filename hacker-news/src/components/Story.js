
const Story = (props) => {
  if (props.id !== '') {
    return (
      <div>
        <h2>Jutun otsikko { props.id }</h2>
        <p>Sisältö</p>
      </div>
    )
  }
}

export default Story