
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
        let promise = axios.get('http://localhost:3006/api/quotes/')
        promise.then(res => { 
          this.setState({   
            quoteList: res.data.results
          })
        })
      }

    render(){
        let response ="Not working";
        if (this.state.quoteList.id) { 
response = this.state.quoteList.id
        }
        return (
            // {componentDidMount()}
        <div className="listBox">
         CLICK TO VIEW, EDIT OR DELETE
         <div className="quoteList">
          {response}
         </div>
         </div>

    )
    }

}

export default ShowList;
