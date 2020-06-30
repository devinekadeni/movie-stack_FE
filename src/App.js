import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyles from 'styles/GlobalStyles'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/">
            <div>Hello World</div>
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
