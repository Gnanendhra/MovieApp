import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import './index.css'

class SimilarMovies extends Component {
  state = {similarMovies: []}

  componentDidMount = () => {
    this.getSimilarMovies()
  }

  getSimilarMovies = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const options = {
      method: 'GET',
    }
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=c00e22d1a43f287f7e252ec17a57eb26&language=en-US&page=1`,
      options,
    )
    const data = await response.json()

    this.setState({similarMovies: data.results})
  }

  renderSimilar = () => {
    const {similarMovies} = this.state

    return similarMovies.map(movie => {
      const movieImage = `https://image.tmdb.org/t/p/original/${movie.poster_path}`
      return (
        <div key={movie.id} width="80%">
          <img
            src={movieImage}
            className="poster"
            width="100%"
            height="100%"
            alt="images"
            style={{margin: '15px'}}
          />
        </div>
      )
    })
  }

  render() {
    return (
      <div className="similar">
        <h1 className="similar-title">More Like this</h1>
        <div className="similar-items">{this.renderSimilar()}</div>
      </div>
    )
  }
}

export default withRouter(SimilarMovies)
