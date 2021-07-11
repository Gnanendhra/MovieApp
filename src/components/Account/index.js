import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'

import './index.css'

class Account extends Component {
  logout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <div>
        <div className="header-part">
          <Header />
        </div>
        <div className="account">
          <h1 className="account-head">Account</h1>
          <hr className="line" />
          <div className="membership">
            <p className="details-p">Member ship</p>
            <div>
              <p className="details-p1">Gnanendhrakosuri@gmail.com</p>
              <p className="details-p1">Password: ****************</p>
            </div>
          </div>
          <hr className="line" />
          <div className="membership">
            <p className="details-p">Plan Details</p>
            <p className="details-p1">Premium</p>

            <button type="button" className="hd-btn">
              Ultra HD
            </button>
          </div>
          <hr className="line" />
          <div className="logout-btn">
            <button type="button" className="logout" onClick={this.logout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Account
