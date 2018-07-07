

import React, { Component } from 'react';

class DisplayQuote extends Component {
    constructor(props){
        super(props)

        this.state = {
     
        }
    }



    render(){ 
        return (
         <span>
            <div className="singleQuote">{!this.props.editable ? 
       this.props.showNow ? this.props.showNow.text : "loading..."
        : <input placeholder={this.props.showNow.text}  onChange={(e) =>  this.props.makeChange(e)} /> }</div>

        - {this.props.showNow ? this.props.showNow.author : "loading..."} 
        {!this.props.editable ? <button onClick={this.props.handleClick}>Edit</button> : <button onClick={this.props.saveChange}>Save</button>}
        </span>
         )
        }
}
   
export default DisplayQuote;
