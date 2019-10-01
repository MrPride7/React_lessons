import React, {Component} from 'react';
import './ApiCatcher.css'

class ApiCatcher extends Component {

  render() {
    const response = this.props.response;
    return(
      <div className={'ApiCatcher'}>
        <p>{ response ? response : <span>No api yet</span> }</p>
      </div>
    )
  }
}
export default ApiCatcher