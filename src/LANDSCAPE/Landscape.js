import React, { Component } from 'react'
import './landscape.scss';
import detectOrientation, { orientationListener, deleteListener } from '../utils/detectOrientation';

export default class Landscape extends Component {
  constructor(props){
    super(props);
    detectOrientation(props);
  }

  componentDidMount() {
    orientationListener(this.props)
  }

  componentWillUnmount() {
    deleteListener();
  }
  
  render() {
    return (
      <div className="landscape-container">
        <h1>LANDSCAPING!</h1>
      </div>
    )
  }
}
