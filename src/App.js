import React ,{ useState,  Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';

import axios from 'axios';
import GithubState from './context/github/GithubState';
import './App.css';

const App = () => {
 
  const [users, setUsers] = useState([]);
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
 
 

  const searchUsers = async text => {
    

    setLoading(true);
    
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      
    setLoading(false);
    setUsers(res.data.items);
    
  }

  //Get Single Github User
  
  const getUser = async (userName) => {
    
    setLoading(true);

    const res = await axios.get(`https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    
    setUser(res.data);
    setLoading(false);
    
  }

  //Get User Repos

  const getUserRepos = async (userName) => {
    setLoading(true);

    const res = await axios.get(`https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    setRepos(res.data);
    setLoading(false);
  }


 //Clear users from states
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  }

  //Setting an alerts if the input is empty
 const showAlert = (msg, type) => {
  
    setAlert({msg, type});
    setTimeout(() => setAlert(null), 2000);

  }
   
    return (
      <GithubState>
     <Router>
     <div className="App">
      <Navbar/>
       <div className="container">
        <Alert alert = {alert}/>
         <Routes>
         <Route 
          path = "/" 
          element = {
           <Fragment>
            <Search
              searchUsers = {searchUsers}
              clearUsers = {clearUsers}
              showClear = {users.length > 0 ? true : false}
              setAlert = {showAlert}
            />
            <Users loading = {loading} users = {users}/>
           </Fragment>
         } />
            <Route path = '/about' element = {<About />} />
            <Route path = '/user/:login' element = {
              <User
                getUser = {getUser}
                getUserRepos = {getUserRepos}
                user = {user}
                repos = {repos}
                loading = {loading}
              /> 
        }/> 
          </Routes>
        </div>
      </div>
      </Router>
      </GithubState>
    );
  
}

export default App;
