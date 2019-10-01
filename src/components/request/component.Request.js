import React, {Component} from 'react';
import ApiCatcher from '../ApiCatcher/component.ApiCatcher'
import './request.css'

const URL = 'https://api.foursquare.com/v2/venues/explore';
const CLIENT_ID = 'ANKXZLBEFXHPMRS2QGOPPB5ICZAIJZOVOFRURYIS3ECOSIXC';
const CLIENT_SECRET = 'QNQDRHW52SSGBKVEBXVREHZUHEGNQUE3JMPCBEWXNSN32OUC';

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
      fetch(`${URL}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20180323&limit=1&ll=40.7243,-74.0018&query=coffee`)
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