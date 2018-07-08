

import React, { Component } from 'react';
import axios from 'axios';

class AddBox extends Component {
    constructor(props){
        super(props)

        this.state = {
            newText: "",
            newAuthor: "",
            newCategory: ""
        }
    }

    updateText(updatedText) {
        this.setState({
            newText: updatedText
        })
    }

    updateAuthor(updatedAuthor){
        this.setState({
            newAuthor: updatedAuthor
        })
    }

    updateCategory(updatedCategory){
        this.setState({
            newCategory: updatedCategory
        })
    }

    buildRandom(){
        let promise = axios.get('https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en')
        promise.then(res => {
            this.setState({
                newText: res.data.quoteText,
                newAuthor: res.data.quoteAuthor,
                newCategory: ""
            })    
    })
}

addNewQuote(newQuoteData){
  this.props.addNewQuote(newQuoteData)
  this.setState({
    newText: "",
    newAuthor: "",
    newCategory: ""
  })
}

    render(){
        var newQuoteData = {
            text: this.state.newText,
            author: this.state.newAuthor,
            category: this.state.newCategory
        }
       return( 
            <span className="add-span">
                <div className="add-box-left">
                    <textarea cols="101" rows="10" placeholder="Type or paste a new quote here" onChange={(e) => this.updateText(e.target.value)}  value = {this.state.newText}/>
                </div>
                <div className="add-box-right">
                    <input placeholder="Author's name" onChange={(e) => this.updateAuthor(e.target.value)} value = {this.state.newAuthor}/>

                    <input placeholder="Add a topic" onChange={(e) => this.updateCategory(e.target.value)} />
                    <br />
                    <button onClick={() => this.addNewQuote(newQuoteData)}>Save</button>

                </div><br clear = "all" />
                
                <div className="find-random">
                    <button onClick={() => this.buildRandom()}>Find random quote</button>
                </div>
            </span>
        ) 
    } 
}

export default AddBox