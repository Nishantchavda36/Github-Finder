import { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Useritems from './components/users/Useritems';
import './App.css';

class App extends Component {
  
  
  
  
  
  
  render(){
    return (
      <div className="App">
        <Navbar
          title = 'GitHub Finder'
          icon = 'fab fa-github'
        />
        <Useritems 
        
        
        />
      </div>
    );
  }
  
}

export default App;
