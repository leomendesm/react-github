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
      e.target.disabled = true
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
          },
          repos: [],
          starred: [],
        })
        e.target.disabled = false
      })
    }
  }
  getRepos(){
    ajax().get(`https://api.github.com/users/${this.state.userinfo.login}/repos`)
    .then(res => {
      this.setState({
        repos: res,
      })
    })
  }
  getStarred(){
    ajax().get(`https://api.github.com/users/${this.state.userinfo.login}/starred`)
    .then(res => {
      this.setState({
        starred: res.map(rep => ({ name:rep.full_name, html_url: rep.html_url}))
      })
    })
  }
  render() {
    return <AppContent
    userinfo={this.state.userinfo}
    repos={this.state.repos}
    starred={this.state.starred}
    handleSearch={e => this.handleSearch(e)}
    getRepos={() => this.getRepos()}
    getStarred={() => this.getStarred()}
    />
  }
}
export default App;
