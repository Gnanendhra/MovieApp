import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import SimilarMovies from '../SimilarMovies'
import './index.css'

class SelectedMovie extends Component {
  state = {
    movieList: [],
    genres: [],
    languages: [],
    ratingCount: '',
    rating: '',
    isLoading: true,
  }

  componentDidMount = () => {
    this.getSelectedMovie()
  }

  getSelectedMovie = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const options = {
      method: 'GET',
    }
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=c00e22d1a43f287f7e252ec17a57eb26&language=en-US`,
      options,
    )
    const data = await response.json()
    const updateMovie = {
      title: data.title,
      date: data.release_date,
      length: data.runtime,
      overView: data.overview,
      image: data.backdrop_path,
    }
    const genresData = data.genres
    const languagesList = data.spoken_languages
    const updatedRatingCount = data.vote_count

    const updatedRating = data.vote_average
    this.setState({
      movieList: updateMovie,
      genres: genresData,
      languages: languagesList,
      ratingCount: updatedRatingCount,
      rating: updatedRating,
      isLoading: false,
    })
  }

  getRuntime = () => {
    const {movieList} = this.state
    const {length} = movieList
    const hour = Math.floor(length / 60)
    const minute = length % 60
    return `${hour}h ${minute}m`
  }

  getYear = () => {
    const {movieList} = this.state
    const {date} = movieList
    return date
  }

  render() {
    const {
      movieList,
      genres,
      languages,
      ratingCount,
      rating,
      isLoading,
    } = this.state
    const {image} = movieList
    return (
      <div>
        {isLoading ? (
          <Loader
            type="ThreeDots"
            color="red"
            height="50"
            width="50"
            className="loading-selected-dots"
          />
        ) : (
          <div className="header-top">
            <Header />
            <div
              style={{
                backgroundImage: `url('https://image.tmdb.org/t/p/original${image}')`,
              }}
              className="particularMovie-container"
            >
              <div className="movie-information">
                <h1 className="movie-title">{movieList.title}</h1>
                <div className="information">
                  <p>{this.getRuntime()}</p>
                  <button type="button" className="btn">
                    UA
                  </button>
                  <p>{this.getYear()}</p>
                </div>
                <p className="movie-overview">{movieList.overView}</p>
                <button type="button" className="button">
                  Play
                </button>
              </div>
            </div>
            <div className="bottom">
              <div>
                <h1 className="genres">Genres</h1>
                {genres.map(each => (
                  <p className="items">{each.name}</p>
                ))}
              </div>
              <div>
                <h1 className="languages">Audio Languages</h1>
                {languages.map(each => (
                  <p className="items">{each.name}</p>
                ))}
              </div>
              <div>
                <h1 className="rating-count">Rating Count</h1>
                <p className="items">{ratingCount}</p>
                <h1 className="rating-average">Rating Average</h1>
                <p className="items">{rating}</p>
              </div>
              <div>
                <h1 className="genres">Budget</h1>
                <p className="items">{`${ratingCount} Crores`}</p>
                <h1 className="genres">Release Date</h1>
                <p className="items">{movieList.date}</p>
              </div>
            </div>
            <SimilarMovies />
          </div>
        )}
      </div>
    )
  }
}

export default SelectedMovie
