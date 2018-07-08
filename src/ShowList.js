
import React, { Component } from 'react';
import axios from 'axios';
import DisplayQuote from './DisplayQuote';
import AddBox from './AddBox';

class ShowList extends Component {
    constructor(props){
        super(props)

        this.state = {
            quoteList: [],
            editedQuote: "",
            editable: false,
            selectedQuote: "",
            emptyQuote: {}
        }
        this.makeChange = this.makeChange.bind(this);
        this.saveInput = this.saveInput.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this)
        this.trashQuote = this.trashQuote.bind(this)
        this.selectQuote = this.selectQuote.bind(this)
        this.addNewQuote = this.addNewQuote.bind(this)
    }

    makeChange(event){
        let value = event.target.value;
        this.setState({
            editedQuote:value
        });
      }

    handleEditClick() {
        this.setState({
            editable: true
        })
    }

    saveInput(){
        console.log("here: "+this.state.selectedQuote.id)
        let promise = axios.put('http://localhost:3006/api/quotes/'+this.state.selectedQuote.id, {
            text: this.state.editedQuote
        })
        promise.then(res => {   
            let quote = res.data.find(quote => {
                if(quote.id === this.state.selectedQuote.id){
                    return quote
                }
            })
            this.setState({   
                quoteList: res.data,
                selectedQuote: quote,
                editable: false
              })           
        }) 
    } 

    trashQuote(){
        console.log("trash: "+this.state.selectedQuote.id)
        let promise = axios.delete('http://localhost:3006/api/quotes/'
        +this.state.selectedQuote.id, {
            text: this.state.editedQuote
        })
        promise.then(res => {  
            this.setState({   
                quoteList: res.data,
                selectedQuote: this.state.emptyQuote
            })           
        }) 
    } 

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

    addNewQuote(newQuoteObj){
        let promise = axios.post('http://localhost:3006/api/quotes/', {newQuoteObj})
        promise.then(res => {   
            let quote = res.data.pop()
            this.setState({   
                quoteList: res.data,
                selectedQuote: quote
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
                makeChange = {this.makeChange}
                saveChange = {this.saveInput} 
                trashQuote = {this.trashQuote} 
                editable = {this.state.editable} 
                handleEditClick = {this.handleEditClick} />
            </div>

            <div className="addBox">
                <AddBox addNewQuote = {this.addNewQuote}/>
            </div>
         </span>
    )
    }
}

export default ShowList;
