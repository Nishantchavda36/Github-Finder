import React, { useContext } from 'react'
import UserItems from './Useritems'
import  Spinner  from '../layout/Spinner'
import GithubContext from '../../context/github/githubContext';


const Users = () =>  {

  const githubContext = useContext(GithubContext);

  const {loading, users} =githubContext;



    if(loading){
      return <Spinner />
    }  
    else{
      return (
        <div style = {userStyle}>
          {users.map(user => {
          return <UserItems key = {user.id} user = {user}/>
        })}</div>
      )
    }
}

  const userStyle ={
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'

  }

   

export default Users