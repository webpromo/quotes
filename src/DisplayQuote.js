

import React, { Component } from 'react';

class DisplayQuote extends Component {
    constructor(props){
        super(props)

        this.state = {
     
        }
    }

    render(){ 
        return (
         <span className="display-span">
            <span className="keep-together">
            <div className="singleQuote">{!this.props.editable ? 
        this.props.showNow ? this.props.showNow.text : "loading..."
            : <input className="edit-field" defaultValue={this.props.showNow.text} onChange={(e) =>  this.props.makeChange(e)} /> }</div>

            <div className="author-name">
                {this.props.showNow ? "- "+this.props.showNow.author : "loading..."} 
            </div>
            </span> 
            
            <div>
            {!this.props.editable ? 
                <button onClick={() => this.props.handleEditClick()}>Edit</button> : <button onClick={() => this.props.saveChange()}>Save</button>} 
            
            <button onClick={() => this.props.trashQuote()}>Delete</button>
            </div>
        </span>
         )
        }
}
   
export default DisplayQuote;
