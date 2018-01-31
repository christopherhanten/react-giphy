import React, { Component } from 'react';

class Search extends Component {
  constructor(props){
    super(props)
    this.state = {value: ""}

    this.handleFormSubmit= this.handleFormSubmit.bind(this);
    this.handleFormInput= this.handleFormInput.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.value);
  }
  handleFormInput(e) {
    this.setState({ value: e.target.value});
    //console.log('Inputted!');
  }

  render() {
    return (
      <div className="Search">
        <form onSubmit={ this.handleFormSubmit }>
          <input type="text" value={ this.state.value } onChange={ this.handleFormInput } />
          <button type="submit" >Search</button>
        </form>
      </div>
    );
  }
}
export default Search;
