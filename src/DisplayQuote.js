

import React from 'react';

function DisplayQuote(props) {
    
        return (
         <span>
             <div className="singleQuote" contentEditable="true">
       "{props.showNow ? props.showNow.text : "x"}"</div>
      - {props.showNow ? props.showNow.author : "x"}
        </span>
         )
}
   
export default DisplayQuote;
