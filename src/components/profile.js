import React from 'react'
import PropTypes from 'prop-types'

const Profile = ({userinfo})=>(
  <div className='user-info'>
    <img src={userinfo.photo} alt="" />
    <h1><a href={`https://github.com/${userinfo.login}`}>{userinfo.name}</a></h1>
    <ul className='repos-info'>
      <li>Repositórios : {userinfo.repos}</li>
      <li>Seguidores : {userinfo.followers}</li>
      <li>Seguindo : {userinfo.following}</li>
    </ul>
  </div>
)
Profile.propTypes = {
  userinfo: PropTypes.shape({
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
  })
}
export default Profile