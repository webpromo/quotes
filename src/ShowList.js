
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
        let promise = axios.get('http://localhost:3000/api/quotes/')
        promise.then(res => { 
          this.setState({   
            quoteList: res.data.results
          })
        })
        } 

    render(){ 
        console.log("res = "+this.state.quoteList)
        let quoteArray = this.state.quoteList.map(function(quo,i){
            return (
                <span className="item">{quo.author} on {quo.category}<br /></span>
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
