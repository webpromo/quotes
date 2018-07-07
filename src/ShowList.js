
import React, { Component } from 'react';
import axios from 'axios';
import DisplayQuote from './DisplayQuote';

class ShowList extends Component {
    constructor(props){
        super(props)

        this.state = {
            quoteList: [],
            editedQuote: "",
            editable: false,
            selectedQuote: ""
        }
        this.handleInput = this.handleInput.bind(this);
        this.saveInput = this.saveInput.bind(this);
        this.handleClick = this.handleClick.bind(this)
        this.selectQuote = this.selectQuote.bind(this)
 
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
        let promise = axios.put('http://localhost:3006/api/quotes/'+this.state.selectedQuote.id, {
            text: this.state.editedQuote
        })
        promise.then(res => {   
            let quote = res.data.find(quote => {
                if(quote.id === this.state.selectedQuote.id){
                    return quote
                }
            })
            console.log(quote);
            this.setState({   
                quoteList: res.data,
                selectedQuote: quote,
                editable: false
              })           
        }) 
        } 
        // trashQuote(){
        //     let promise = axios.delete('http://localhost:3006/api/quotes/'+id, {
        //         text: this.state.editedQuote
        //     })
        //     promise.then(res => {  
        //         this.setState({   
        //             quoteList: res.data,
        //           })           
        //     }) 
        //     } 

     selectQuote(value){
        this.setState({   
            selectedQuote: value
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
        const quoteArray = this.state.quoteList.map((quo,i) => {
            return (
                <div className="item" key={i} onClick={() => this.selectQuote(quo)} > {quo.author} on {quo.category}<br /></div>
            )
        });

        var selectedQuote = this.state.selectedQuote || this.state.quoteList[0];

        return (
        <span>
            <div className="listBox">
                CLICK TO VIEW, EDIT OR DELETE
                <div className="quoteList">
                {quoteArray}
                </div>
            </div>

            <div className="displayBox">
            <DisplayQuote showNow = {selectedQuote}
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
