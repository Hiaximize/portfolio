import React from 'react';
import './App.css';
import Main from './Main.js'


class App extends React.Component{

  render(){
    return (
    <div className="App">
      
      {/* <div className="preloader">
        <h1>We are loading from heroku, it will take a moment</h1>
      </div> */}
        
      <Main />
      
    </div>
    )
  }
}

export default App;
