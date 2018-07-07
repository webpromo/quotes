import React, { Component } from 'react';
import './reset.css';
import './App.css';
import ShowList from './ShowList.js';

class App extends Component {

  render() {
    return (

        <section>

          <ShowList />



          <div className="addBox">
            <input placeholder="Enter quote text here"></input>
          </div>

        </section>

    );
  }
}

export default App;
