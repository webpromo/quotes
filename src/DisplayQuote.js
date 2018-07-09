

import React from 'react';


export default function DisplayQuote(props){


        return (
         <span className="display-span">
            <span className="keep-together">
            <div className="singleQuote">{!props.editable ? 
        props.showNow ? props.showNow.text : "loading..."
            : <input className="edit-field" defaultValue={props.showNow.text} onChange={(e) =>  props.makeChange(e)} /> }</div>

            <div className="author-name">
                {props.showNow ? "- "+props.showNow.author : "loading..."} 
            </div>
            </span> 
            
            <div>
            {!props.editable ? 
                <button onClick={() => props.handleEditClick()}>Edit</button> : <button onClick={() => props.saveChange()}>Save</button>} 
            
            <button onClick={() => props.trashQuote()}>Delete</button>
            </div>
        </span>
         )

    }
   