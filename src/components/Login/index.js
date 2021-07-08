import {Component} from 'react'
import './index.css'

class Login extends Component {
  state = {username: '', password: ''}

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const options1 = {
      method: 'GET',
    }
    const response1 = await fetch(
      'https://api.themoviedb.org/3/authentication/token/new?api_key=c00e22d1a43f287f7e252ec17a57eb26',
      options1,
    )
    const requestToken = await response1.json()
    const userDetails = {
      username,
      password,
      request_token: requestToken.request_token,
    }

    const options2 = {
      method: 'POST',
      body: JSON.stringify(userDetails),
      headers: {
        'Content-type': 'application/json',
      },
    }

    const response2 = await fetch(
      'https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=c00e22d1a43f287f7e252ec17a57eb26',
      options2,
    )

    const tokenData = await response2.json()
    console.log(tokenData)
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.changeUsername}
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          onChange={this.changePassword}
          value={password}
        />
      </>
    )
  }

  render() {
    return (
      <div className="container">
        <h1 className="movie-head">Movies</h1>
        <form className="login-card" onSubmit={this.submitForm}>
          <h1 className="m-head">Movies</h1>
          <h1 className="head">Signin</h1>
          <div className="input-container"> {this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <div className="btn">
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Login
