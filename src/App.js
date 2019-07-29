import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Listing from './components/Listing';
import CreateListing from './components/create-listing';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Switch>
            <Route path="/" exact component={Listing} />
            <Route path="/create-listing" component={CreateListing} />
            <Route render={() => <h1>404. :(</h1>} />
          </Switch>
        </Container>
        <Footer />
      </Router>
    </>
  );
}

export default App;