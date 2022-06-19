import React from 'react'
import propTypes from 'prop-types'

const UserItems = ({user: {id,login,avatar_url,html_url}}) => { 

    return (
      <div className='card text-center'>
       <img src={avatar_url} alt="Avatar" className='round-img' style={{width: '60px'}} />
       <h3>{login}</h3>
       <div>
         <a href= {html_url} className = 'btn btn-dark btn-sm my-1'>More</a>
       </div>
      </div>
    )
  }

UserItems.propTypes = {
  user: propTypes.object.isRequired,

}

export default UserItems