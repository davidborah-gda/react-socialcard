/* eslint-disable */

import React, { Component } from 'react';
import "./App.css";
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import SocialCardList from './SocialCardList';
import AddCard from './AddCard';

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
updateImageUrls(url){
  this.setState({
    imageUrls: [...this.state.imageUrls, url]
  })
}

  render() {
    return (
      <div>
      <Header title="Cat Corner" />
      <Main>
        <AddCard onCardAddition={this.updateImageUrls.bind(this)}/>
        <SocialCardList imageUrls={this.state.imageUrls}/>
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
