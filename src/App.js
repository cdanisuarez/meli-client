import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Items from "./pages/items/items.js"

const App = (props) => {
  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route path="/" component={Items} history={props.history} />
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App