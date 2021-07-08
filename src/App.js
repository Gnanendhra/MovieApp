import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './components/Login'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
)

export default App
