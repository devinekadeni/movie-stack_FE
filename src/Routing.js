import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MobileNavbar from 'components/MobileNavbar'
import Home from 'pages/Home'

const RoutingComponent = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/movies">
            <div>movies</div>
          </Route>
          <Route path="/my-list">
            <div>my list</div>
          </Route>
          <Route path="/account">
            <div>account</div>
          </Route>
        </Switch>
        <MobileNavbar />
      </Router>
    </>
  )
}

export default RoutingComponent
