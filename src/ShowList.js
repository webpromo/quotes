
import React, { Component } from 'react';
import axios from 'axios';

class ShowList extends Component {
    constructor(){
        super()

        this.state = {
            quoteList: []
        }
    }

    componentDidMount(){ 
        let promise = axios.get('/api/quotes')
        promise.then(res => { 
            console.log("res = "+res)           
          this.setState({   
            quoteList: res.data
          })
        })
        } 

    render(){ 
        console.log("state = "+this.state)
        let quoteArray = this.state.quoteList.map(function(quo,i){
            return (
                <span className="item" key={i}>{quo.author} on {quo.category}<br /></span>
            )
        });


        return (
        <div className="listBox">
         CLICK TO VIEW, EDIT OR DELETE
         <div className="quoteList">
          {quoteArray}
         </div>
         </div>

    )
    }

}

export default ShowList;
