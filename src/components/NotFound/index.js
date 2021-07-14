import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <h1 className="notFound-header">Lost Your Way?</h1>
        <p className="notFound-paragraph">
          Sorry, We cant find that page. You will find lots to explore on the
          home page.
        </p>
        <div className="notFound-button">
          <Link to="/">
            <button type="button" className="notFound-btn">
              MoviesApp Home
            </button>
          </Link>
        </div>
        <p className="notFound-error">Error Code:NSES-404</p>
      </div>
    )
  }
}

export default NotFound
