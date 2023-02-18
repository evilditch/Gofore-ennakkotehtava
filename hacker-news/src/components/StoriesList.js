
const StoriesList = ({ openStory }) => {
  return (
    <ul>
      <li><button onClick={() => openStory(1)}>Eka juttu</button></li>
      <li><button onClick={() => openStory(2)}>Toka juttu</button></li>
    </ul>
  )
}

export default StoriesList