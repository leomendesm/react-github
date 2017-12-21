import React from 'react'
import Search from './search'
import Profile from './profile'
import Actions from './actions'
import Repos from './repos'
import PropTypes from 'prop-types'

const AppContent = ({userinfo, repos, starred, handleSearch, getRepos}) => (
  <div className='app'>
    <Search handleSearch={handleSearch} />
    
    {!!userinfo && <Profile userinfo={userinfo}/>}
    
    {!!userinfo && <Actions getRepos={getRepos}/>}
    
    {!!repos.length && 
      <Repos
        className='repos'
        title='Repositórios'
        repos={repos}
      />
    }
    
    {!!starred.length && 
      <Repos
        className='starred'
        title='Favoritos'
        repos={starred}
      />
    }
    
  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
}
export default AppContent