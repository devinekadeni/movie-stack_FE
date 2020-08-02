import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from 'components/Header'
import Home from 'pages/Home'

const RoutingComponent = () => {
  return (
    <>
      <Router>
        <Header />
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
          <Route path="/login">
            <div>account</div>
          </Route>
          <Route path="/register">
            <div>account</div>
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default RoutingComponent
