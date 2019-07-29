import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Listing from './components/Listing';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Listing />
      </Container>
      <Footer />
    </>
  );
}

export default App;