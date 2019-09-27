import React, {Component} from 'react';

class Request extends Component {

  state = {
    url: 'https://swapi.co/api/',
    response: ''
  }

  getPeople = () =>{
    const url = this.state.url;
    let response = this.state.response;

    return (
      fetch(url)
        .then(resp => resp.json())
        .then(resp => console.log(JSON.stringify(resp)))
        .catch(error => console.error(error))
    );
  };

  render(){
    return(
      <button onClick={this.getPeople}>Button</button>
    );
  }
}

export default Request;