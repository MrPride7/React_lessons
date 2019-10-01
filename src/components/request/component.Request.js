import React, {Component} from 'react';
import ApiCatcher from '../ApiCatcher/component.ApiCatcher'
import './request.css'

class Request extends Component {

  state = {
    response: ''
  };

  getResponse = (data) => {
    this.setState({
      response: data
    })
  };

  getPeople = () => {

    return (
      fetch(`${URL}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&v=20180323&limit=1&ll=40.7243,-74.0018&query=coffee`)
        .then(resp => resp.json())
        .then(myJson => JSON.stringify(myJson))
        .then(data => this.getResponse(data))
        .catch(error => console.error(error))
    );
  };

  render(){
    return(
      <div className={'request'}>
        <button className={'button'} onClick={this.getPeople}>Button</button>
        <ApiCatcher response={this.state.response} />
      </div>
    );
  }
}

export default Request;
