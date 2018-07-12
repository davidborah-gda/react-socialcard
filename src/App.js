/* eslint-disable */

import React, { Component } from 'react';
import SocialCard from './SocialCard';
import "./App.css";
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrls: [
        "https://placekitten.com/250/250",
        "https://placekitten.com/251/250",
        "https://placekitten.com/250/251",
        "https://placekitten.com/249/250",
        "https://placekitten.com/250/249",
        "https://placekitten.com/251/249",
      ]
    };
  }
  render() {
    const cards = this.state.imageUrls
                      .map((url) => <SocialCard imageSrc={url} key={url} />)
    return (
      <div className="App-container">
      <Header />
        {cards}
      </div>
    );
  }
}

export default App;
