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
        <div className="account-details">
          <h1 className="account-header">Account</h1>
          <hr className="hr-line" />
          <div className="membership-details">
            <p className="membership-header">Member ship</p>
            <div>
              <p className="membership-paragraph">Gnanendhrakosuri@gmail.com</p>
              <p className="membership-paragraph">Password: ****************</p>
            </div>
          </div>
          <hr className="hr-line" />
          <div className="plan-details">
            <p className="plan-details-header">Plan Details</p>
            <p className="plan-details-paragraph">Premium</p>

            <button type="button" className="hd-btn">
              Ultra HD
            </button>
          </div>
          <hr className="hr-line" />
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
