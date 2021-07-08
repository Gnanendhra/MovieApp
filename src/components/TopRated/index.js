import {Component} from 'react'
import './index.css'

import Slider from 'react-slick'
import {Link} from 'react-router-dom'

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
}

class TopRated extends Component {
  state = {topList: []}

  componentDidMount = () => {
    this.getProducts()
  }

  getProducts = async () => {
    const options = {
      method: 'GET',
    }
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=c00e22d1a43f287f7e252ec17a57eb26&language=en-US',
      options,
    )
    const data = await response.json()
    this.setState({topList: data.results})
  }

  renderSlider = () => {
    const {topList} = this.state

    return (
      <Slider {...settings}>
        {topList.map(movie => {
          const movieImage = `https://image.tmdb.org/t/p/original/${movie.poster_path}`
          return (
            <div key={movie.id} width="80%">
              <Link to={`/${movie.id}`}>
                <img
                  className="poster"
                  src={movieImage}
                  width="100%"
                  height="100%"
                  alt="images"
                />
              </Link>
            </div>
          )
        })}
      </Slider>
    )
  }

  render() {
    return (
      <div>
        <p className="topRated">Top Rated</p>
        {this.renderSlider()}
      </div>
    )
  }
}

export default TopRated
