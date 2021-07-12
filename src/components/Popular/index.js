import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {FaLessThan, FaGreaterThan} from 'react-icons/fa'

import './index.css'

class Popular extends Component {
  state = {
    pageNumber: 1,
    popularList: [],
    isLoading: true,
    searchInput: '',
    isNotFound: false,
    isDisplay: true,
  }

  componentDidMount = () => {
    this.getDetails()
  }

  getDetails = async () => {
    const {pageNumber} = this.state
    const options = {
      method: 'GET',
    }
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=c00e22d1a43f287f7e252ec17a57eb26&language=en-US&page=${pageNumber}`,
      options,
    )
    const data = await response.json()

    this.setState({
      popularList: data.results,
      isLoading: false,
      isNotFound: false,
    })
  }

  renderPopular = searchList => {
    const {isDisplay} = this.state

    if (isDisplay && searchList.length === 0) {
      this.setState({isNotFound: true}, this.getDetails)
    }

    return searchList.map(movie => {
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

  onIncrement = () => {
    const {pageNumber} = this.state
    if (pageNumber < 20) {
      this.setState(
        prev => ({pageNumber: prev.pageNumber + 1, isLoading: !prev.isLoading}),
        this.getDetails,
      )
    }
  }

  onDecrement = () => {
    const {pageNumber} = this.state
    if (pageNumber !== 1) {
      this.setState(
        prev => ({pageNumber: prev.pageNumber - 1, isLoading: !prev.isLoading}),
        this.getDetails,
      )
    }
  }

  onChange = event => {
    this.setState({searchInput: event.target.value})
  }

  getSearchResults = () => {
    const {searchInput, popularList} = this.state
    const searchResults = popularList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return searchResults
  }

  render() {
    const {pageNumber, isLoading, searchInput, isNotFound} = this.state
    const searchResults = this.getSearchResults()
    return (
      <div className="popular">
        <nav className="nav-popular">
          <div className="nav-content1">
            <Link to="/" style={{textDecoration: 'none'}}>
              <h1 className="nav-head1">MOVIES</h1>
            </Link>
            <ul className="nav-menu1">
              <Link to="/" className="nav-link1">
                <li>Home</li>
              </Link>
              <Link to="/popular" className="nav-link1">
                <li>Popular</li>
              </Link>
            </ul>
          </div>
          <div className="nav-search1">
            <div style={{display: 'flex'}}>
              <div>
                <input
                  type="search"
                  placeholder="Search"
                  className="input-field"
                  value={searchInput}
                  onChange={this.onChange}
                  onKeyDown={this.onEnter}
                />
              </div>

              <Link to="/Account">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZG57fgD4vll8KUKs_iTT20n33XwLtJC1wA&usqp=CAU"
                  alt="icon"
                  className="icon"
                />
              </Link>
            </div>
          </div>
        </nav>
        {isNotFound ? (
          <div className="notFound">
            <img
              src="https://st2.depositphotos.com/1000765/11748/i/950/depositphotos_117484202-stock-photo-3d-small-people-oh-no.jpg"
              alt="notFound"
              className="notFoundImage"
            />
            <p className="errorText">{`Your Search for "${searchInput}" did not find any matches`}</p>
          </div>
        ) : (
          <div>
            {isLoading ? (
              <Loader
                type="ThreeDots"
                color="red"
                height="50"
                width="50"
                className="dots1"
              />
            ) : (
              <div className="popularItems">
                {this.renderPopular(searchResults)}
              </div>
            )}
            <div className="pageNumbers">
              <button
                type="button"
                className="number"
                onClick={this.onDecrement}
              >
                <FaLessThan />
              </button>

              <p className="text">{`${pageNumber} of 20`}</p>
              <button
                type="button"
                className="number"
                onClick={this.onIncrement}
              >
                <FaGreaterThan />
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

//  "https://api.themoviedb.org/3/movie/popular?api_key={API_KEY}&language=en-US&page={PAGE_NUMBER}"

export default Popular
