import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <h1 className="not-head">Lost Your Way?</h1>
        <p className="not-p1">
          Sorry, We cant find that page. You will find lots to explore on the
          home page.
        </p>
        <div className="not-button">
          <Link to="/">
            <button type="button" className="not-btn">
              MoviesApp Home
            </button>
          </Link>
        </div>
        <p className="not-p2">Error Code:NSES-404</p>
      </div>
    )
  }
}

export default NotFound
