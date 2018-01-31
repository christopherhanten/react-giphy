import React, { Component } from 'react';
import SearchContainer from './containers/SearchContainer';

class Home extends Component {

    render() {
    return (
      <div className="Home">
        <h1>Hello Friggin World</h1>
        <SearchContainer />
      </div>
    );
  }
}

export default Home;
