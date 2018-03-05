import React from 'react';
import Header from './Header';
import Hotels from './Hotels';
import '../main.css';


class App extends React.Component {
  render() {
    return (
      <section className="main">
        <Header />
        <Hotels />
      </section>     
    );
  }
}

export default App;
