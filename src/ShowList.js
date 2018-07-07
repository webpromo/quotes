
import React, { Component } from 'react';
import axios from 'axios';
import DisplayQuote from './DisplayQuote';

class ShowList extends Component {
    constructor(props){
        super(props)

        this.state = {
            quoteList: [],
            editedQuote: "",
            editable: false
        }
        this.handleInput = this.handleInput.bind(this);
        this.saveInput = this.saveInput.bind(this);
        this.handleClick = this.handleClick.bind(this)
 
    }

    handleInput(event){
        let value = event.target.value;
        this.setState({
            editedQuote:value
        });
      }

      handleClick() {
        this.setState({
            editable: true
        })
    }

      saveInput(){
        let promise = axios.put('http://localhost:3006/api/quotes/0', {
            text: this.state.editedQuote
        })
        promise.then(res => {   //correct
            this.setState({   
                quoteList: res.data,
                editable: false
              })           
        }) 
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
            <DisplayQuote showNow = {this.state.quoteList[0]}
            makeChange = {this.handleInput}
            saveChange = {this.saveInput} 
            editable = {this.state.editable} 
            handleClick = {this.handleClick} />
            </div>

         </span>

    )
    }

}

export default ShowList;
