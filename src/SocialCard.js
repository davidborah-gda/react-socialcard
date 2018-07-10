import React, { Component } from 'react';

class SocialCard extends Component {
  render() {
    return (
      <div className="SocialCard-container">
        <section className="SocialCard-image">
          <img src="https://via.placeholder.com/250x250" />
        </section>
        <section className="SocialCard-interactions">
          <button className="SocialCard-button like">
Like
          </button>
          <button className="SocialCard-button dislike">
Dislike
          </button>
        </section>
      </div>
    );
  }
}

export default SocialCard;
