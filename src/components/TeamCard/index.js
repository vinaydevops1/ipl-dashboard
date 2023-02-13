// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachItem} = props
  const {id, name, imageUrl} = eachItem

  return (
    <Link to={`/team-matches/${id}`} className="link-style">
      <li className="list-style">
        <img src={imageUrl} alt={name} className="img-size" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
