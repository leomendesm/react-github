import React from 'react';
import './App.css';
import Search from './components/search'
import Profile from './components/profile'
import Actions from './components/actions'
import Repos from './components/repos'
import Starred from './components/starred'
const App = () => (
  <div className='app'>
    <Search />
    <Profile />
    <Actions />
    <Repos />
    <Starred />
  </div>
  )

export default App;
