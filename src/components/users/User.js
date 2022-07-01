import React,{useEffect, Fragment} from 'react'
import Spinner from '../layout/Spinner'
import PropTypes  from 'prop-types';
import {Link, useParams } from 'react-router-dom'

function User({getUser, loading, user}) {

  const{login} = useParams();

  const {
    name,
    avatar_url,
    location,
    bio,
    html_url,
    company,
    followers,
    following,
    public_repos,
    public_gists,
    blog,
    hireable
  } = user


  useEffect(() => {
    getUser(login)
  }, []);

  if(loading) return (<Spinner />)

  return (
    <Fragment>
      <Link to ='/' className='btn btn-light'>Back To Search</Link>
      
      Hireable: {' '}
      {hireable ? 
      (<i className={"fas fa-check text-success" } />):
      (<i className={'fas fa-check text-danger'} />)}

      <div className='card grid-2'>
        <div className='all-center'>
          <img src={avatar_url} className='round-img' style={{width: '150px'}} alt="" />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        
        <div>
        {bio && (<Fragment>
            <h3>Bio</h3>
            <p>{bio}</p>
          </Fragment>)}
        
          <a href= {html_url} className = 'btn btn-dark my-1'> Visit Github Profile</a>
          <ul>
            <li>
              {login && <Fragment>
                <strong>Username : </strong> {login}
                </Fragment>}
            </li>
            <li>
              {company && <Fragment>
                <strong>Company : </strong> {company}
                </Fragment>}
            </li>
            <li>
              {blog && <Fragment>
                <strong>Website : </strong> {company}
                </Fragment>}
            </li>
          </ul>
        </div>
      </div>
      
      <div className='card text-center'>
        <div className='badge badge-primary'> Followers: {followers}</div>
        <div className='badge badge-success'> Following: {following}</div>
        <div className='badge badge-light'> Public Repos: {public_repos}</div>
        <div className='badge badge-dark'> Public Gists: {public_gists}</div>
      </div>
    </Fragment>
  )
}

User.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired
}


export default User