import React from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import AdList from './Adlist2'
import CreateAd from './createAd'



function App() {
  const name = "Advertisment";




  return (
    <div className="App">
      <header className="App-header">
        <h1>{name}</h1>
      </header>
  {/*<CreateAd></CreateAd>*/}
      
      <br></br>
      <div className="columns">
        <div className="column button">
          
          Advertisment
          
  </div>
  
        <div className="column button">
          New Ad
  </div>
        <div className="column button">
          Log In
  </div>
        <div className="column button">
        Register
  </div>
     
      

      
    </div>
    <AdList/>
    </div>
  );
}

export default App;
