import {Component} from 'react'
import {AiOutlineGoogle, AiFillYoutube} from 'react-icons/ai'
import {FaTwitter} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'

import Header from '../Header'
import Trending from '../Trending'
import TopRated from '../TopRated'
import Originals from '../Originals'

import './index.css'

class Home extends Component {
  state = {
    header: [],
  }

  componentDidMount = () => {
    this.getHeader()
  }

  get = () => {
    const {header} = this.state
    console.log(header.original_title)
  }

  getHeader = async () => {
    const options = {
      method: 'GET',
    }
    const response = await fetch(
      'https://api.themoviedb.org/3/trending/all/week?api_key=c00e22d1a43f287f7e252ec17a57eb26',
      options,
    )
    const data = await response.json()
    console.log(data)
    this.setState({header: data.results[0]})
  }

  render() {
    const {header} = this.state

    const overView = header.overview
    const title = header.original_title

    return (
      <div>
        <Header />
        <div className="top">
          <h1 className="title">{title}</h1>
          <p className="overview">{overView}</p>
          <div>
            <button type="button">Play</button>
          </div>
        </div>
        <div className="home">
          <Trending />
          <TopRated />
          <Originals />
          <div className="contact-info">
            <AiOutlineGoogle className="icons" />
            <FaTwitter className="icons" />
            <GrInstagram className="icons" />
            <AiFillYoutube className="icons" />
            <p className="contact">Contact Us</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
