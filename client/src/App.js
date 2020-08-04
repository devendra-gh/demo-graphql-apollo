import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import logo from "./logo.png";
import Launches from "./components/Launches";
import Launch from "./components/Launch";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img
            style={{ margin: "auto", width: 300, display: "block" }}
            src={logo}
            alt="space x"
          />
          <Route path="/" exact={true} component={Launches} />
          <Route
            path="/launch/:flight_number"
            exact={true}
            component={Launch}
          />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
