import React, { Component } from 'react';
import './landing.scss';

class Landing extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount() {
    
  }

  render(){
    return (
      <div className="landing-container"
      ref={element => this.threeJSRoot = element}>
      </div>
    )
  }
}

export default Landing;