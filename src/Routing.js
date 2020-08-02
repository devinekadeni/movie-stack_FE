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
          <Route path="/hello">
            <div>hello</div>
          </Route>
        </Switch>
      </Router>
      <MobileNavbar />
    </>
  )
}

export default RoutingComponent
