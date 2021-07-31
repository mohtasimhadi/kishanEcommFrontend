import React, { Component } from "react"
import { useLocation, Route, Switch, Redirect } from "react-router-dom"
import routes from "routes/routes.js"

function Home() {
  const location = useLocation()
  const mainPanel = React.useRef(null)
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        )
      } else {
        return null;
      }
    })
  }

  return (
            <Switch>
              {getRoutes(routes)}
              <Redirect from="/" to="/home" />
            </Switch>
  );
}

export default Home