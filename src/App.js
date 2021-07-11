import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'

import './App.css'
import SelectedMovie from './components/SelectedMovie'
import Popular from './components/Popular'
import NotFound from './components/NotFound'
import Account from './components/Account'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/popular" component={Popular} />
      <ProtectedRoute exact path="/Account" component={Account} />
      <Route exact path="/movie/:id" component={SelectedMovie} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
