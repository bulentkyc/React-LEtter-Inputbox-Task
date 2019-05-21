import React from 'react';
import './App.css';

import Validator from './ValidationComponent/ValidationComponent';
import Char from './Char/Char'

class App extends React.Component {

  state = {
    userInput:''
  }

  inputChangeHandler(event){
    this.setState({userInput:event.target.value});
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput:updatedText});
  }

  render(){
    const charlist = this.state.userInput
    .toUpperCase()
    .split('')
    .map((ch, index)=>{
      return(
        <Char
          letter={ch}
          click={()=>this.deleteCharHandler(index)}
        />
      );
    });

    return (
      <div className="App">
        <input onChange={(e)=>this.inputChangeHandler(e)} value={this.state.userInput}/>
        <Validator textLength={this.state.userInput.length}/>
        <p>{'There are ' + this.state.userInput.length + ' characters'}</p>
        {charlist}
      </div>
    );
  }
}

export default App;
