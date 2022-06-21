import React from 'react'
import UserItems from './Useritems'
import  Spinner  from '../layout/Spinner'
import PropTypes from 'prop-types'


const Users = ({users, loading}) =>  {
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

    Users.prototype = {
      users: PropTypes.array.isRequired,
      loading: PropTypes.bool.isRequired
    }

export default Users