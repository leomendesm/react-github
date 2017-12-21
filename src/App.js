import React, {Component} from 'react';
import './App.css';
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
    }
  }
  handleSearch(e) {
    const value = e.target.value
    const key = e.which || e.keyCode
    const ENTER = 13
    if(key === ENTER){
      ajax().get(`https://api.github.com/users/${value}`)
      .then(result => {
       console.log(result)
        this.setState({
          userinfo: {
            name: result.name,
            login: result.login,
            photo: result.avatar_url,
            repos: result.public_repos,
            followers: result.followers,
            following: result.following,
          }
        })
      })
    }
  }
  getRepos(){
    ajax().get(`https://api.github.com/users/${this.state.userinfo.login}/repos`)
    .then(res => {
      console.log(res)
      this.setState({
        repos: res
      })
    })
  }
  render() {
    return <AppContent
    userinfo={this.state.userinfo}
    repos={this.state.repos}
    starred={this.state.starred}
    handleSearch={e => this.handleSearch(e)}
    getRepos={()=>this.getRepos()}
    />
  }
}
export default App;
