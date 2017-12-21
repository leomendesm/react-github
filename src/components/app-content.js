import React from 'react'
import Search from './search'
import Profile from './profile'
import Actions from './actions'
import Repos from './repos'
import PropTypes from 'prop-types'

const AppContent = ({userinfo, repos, starred}) => (
  <div className='app'>
    <Search />
    
    {!!userinfo && <Profile userinfo={userinfo}/>}
    
    {!!userinfo && <Actions />}
    
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
}
export default AppContent