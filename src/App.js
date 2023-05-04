
import './App.css';

import React, { Component } from 'react'
import Navbar from './NewsApp/Navbar';
import News from './NewsApp/News';

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <News pageSize={15} country={"in"} category={'business'}/>
      </>
    )
  }
}
