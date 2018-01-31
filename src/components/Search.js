import React, { Component } from 'react';

class Search extends Component {
  handleButtonClick(e) {
    e.preventDefault();
    console.log('searched');
  }
  render() {
    return (
      <div className="Search">
        <form>
          <input type= "text" />
          <button type= "submit" onClick={(e) => this.handleButtonClick(e)}>Search</button>
        </form>
      </div>
    );
  }
}
export default Search;
