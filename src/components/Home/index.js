// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {listOfTeams: [], isLoader: true}

  componentDidMount() {
    this.getListOfTeams()
  }

  getListOfTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')

    const data = await response.json()
    const updatedList = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      imageUrl: eachItem.team_image_url,
    }))

    this.setState({
      listOfTeams: updatedList,
      isLoader: false,
    })
  }

  renderContainer = () => {
    const {listOfTeams} = this.state
    return (
      <>
        <div className="ipl-container">
          <img
            className="ipl-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <ul className="teams-container">
          {listOfTeams.map(eachItem => (
            <TeamCard eachItem={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {isLoader} = this.state

    return (
      <div className="background">
        <div className="bg-container">
          {isLoader ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            this.renderContainer()
          )}
        </div>
      </div>
    )
  }
}

export default Home
