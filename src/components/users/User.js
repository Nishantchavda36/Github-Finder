import React, { Component } from 'react'
import { useParams } from 'react-router-dom';

export class User extends Component {
  
  params = useParams();
  

  
  componentDidMount(){
    this.props.getUser(this.props.params.login);
  }
  
  render() {
    
    
    
    
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable

    } = this.props;

    const {loading} =this.props;

    return (
      <div>User</div>
    )
  }
}

export default User