/* eslint-disable */

import React, { Component } from 'react';
import "./SocialCard.css";
import PropTypes from 'prop-types';

class SocialCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      dislikes: 0,
    };
  }
likeIt(){
    this.setState({
        likes: this.state.likes + 1
    })
}

dislikeIt(){
    this.setState({
        dislikes: this.state.dislikes + 1
    })
}

  render() {
    const { imageSrc } = this.props;
    return (
      <div className="SocialCard-container">
        <section className="SocialCard-summary">
          <span className="like circle">
            {this.state.likes}
          </span>
          <span className="dislike circle">
            {this.state.dislikes}
          </span>
        </section>
        <section className="SocialCard-image">
          <img src={imageSrc} />
        </section>
        <section className="SocialCard-interactions">
          <button className="SocialCard-button like"
          onClick={this.likeIt.bind(this)}>
Like
          </button>
          <button className="SocialCard-button dislike"
          onClick={this.dislikeIt.bind(this)}>
Dislike
          </button>
        </section>
      </div>
    );
  }
}

SocialCard.propTypes = {
  imageSrc: PropTypes.string.isRequired
};

export default SocialCard;
