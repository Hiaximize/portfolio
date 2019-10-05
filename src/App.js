import React from 'react';
import './App.css';
import Main from './Main.js'


class App extends React.Component{
  
  render(){
    window.addEventListener('load', ()=>{
      document.getElementById("preLoader").style.display = "none"
    })
    return (
    <div className="App">
    <meta content="width=device-width, initial-scale=1" name="viewport" />
      
      <div id="preLoader" className="preloader">
        <h1>We are loading from heroku, it will take a moment</h1>
      </div>
        
      <Main />
      
    </div>
    )
  }
}

export default App;
