import {Component} from 'react'
import {AiOutlineGoogle, AiFillYoutube} from 'react-icons/ai'
import {FaTwitter} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Trending from '../Trending'
import TopRated from '../TopRated'
import Originals from '../Originals'

import './index.css'

class Home extends Component {
  state = {
    header: [],
    count: Math.floor(Math.random() * 20),
    isLoading: true,
  }

  componentDidMount = () => {
    this.getHeader()
  }

  getHeader = async () => {
    const {count} = this.state
    const options = {
      method: 'GET',
    }
    const response = await fetch(
      'https://api.themoviedb.org/3/trending/all/week?api_key=c00e22d1a43f287f7e252ec17a57eb26',
      options,
    )
    const data = await response.json()

    this.setState({header: data.results[count], isLoading: false})
  }

  render() {
    const {header, isLoading} = this.state

    const overView = header.overview
    const title = header.original_title
    const image = header.backdrop_path

    return (
      <div className="bg">
        <Header />

        <div>
          <div
            style={{
              backgroundImage: `url('https://image.tmdb.org/t/p/original${image}')`,
            }}
            className="top"
          >
            <h1 className="title">{title}</h1>
            <p className="overview">{overView}</p>
            <div>
              <button type="button" className="button">
                Play
              </button>
            </div>
          </div>
          {isLoading ? (
            <Loader
              type="ThreeDots"
              color="red"
              height="50"
              width="50"
              className="dots"
            />
          ) : (
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
          )}
        </div>
      </div>
    )
  }
}

export default Home
