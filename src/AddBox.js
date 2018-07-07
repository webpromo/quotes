


import React, { Component } from 'react';

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

    render(){
        var newQuoteData = {
            text: this.state.newText,
            author: this.state.newAuthor,
            category: this.state.newCategory
        }
       return( 
            <span>
                <div className="add-box-left">
                    <input placeholder="Type or paste a new quote here" onChange={(e) => this.updateText(e.target.value)} />
                </div>
                <div className="add-box-right">
                    <input placeholder="Author's name" onChange={(e) => this.updateAuthor(e.target.value)} />
                    <input placeholder="Topic" onChange={(e) => this.updateCategory(e.target.value)} /><br />
                    <button onClick={() => this.props.addNewQuote(newQuoteData)}>Save</button>
                </div>
            </span>
        )
    } 
}

export default AddBox