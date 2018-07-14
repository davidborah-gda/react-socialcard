/* eslint-disable */

import React, { Component } from 'react';
import "./AddCard.css";

class AddCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            url: ''
        }
    }
    handleUrlChange(e) {
        this.setState({
            url: e.target.value
        });
    }

    handleAddCard(){
        this.props.onCardAddition(this.state.url);
        this.setState({
            url: ''
        });
    }

    render() {
        return (
            <div className="AddCat-container">
                <input type="text" placeholder="url of the kitty pic"
                 className="AddCard-input" 
                 value={this.state.url} 
                 onChange={this.handleUrlChange.bind(this)}/>
                <button className="AddCard-button" onClick={this.handleAddCard.bind(this)}>Go</button>
             </div>
        );
    }
}

export default AddCard;