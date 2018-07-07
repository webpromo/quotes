
import React, { Component } from 'react';
import axios from 'axios';
import DisplayQuote from './DisplayQuote';

class ShowList extends Component {
    constructor(){
        super()

        this.state = {
            quoteList: []
        }
    }

    componentDidMount(){ 
        let promise = axios.get('http://localhost:3006/api/quotes')
        promise.then(res => {   
          this.setState({   
            quoteList: res.data
          })
        }) 
        } 
 
    render(){ 
        let quoteArray = this.state.quoteList.map(function(quo,i){
            return (
                <span className="item" key={i}>{quo.author} on {quo.category}<br /></span>
            )
        });


        return (
        <span>
            <div className="listBox">
                CLICK TO VIEW, EDIT OR DELETE
                <div className="quoteList">
                {quoteArray}
                </div>
            </div>
            <div className="displayBox">
            <DisplayQuote showNow = {this.state.quoteList[0]}/>
            </div>
         </span>

    )
    }

}

export default ShowList;
