
import React from 'react';


export default function ListItem(showThis){
    let auth = showThis.showThis.author;
    let categ = showThis.showThis.category;
    return (
        <span>
{auth} on {categ}</span>
    )

}

