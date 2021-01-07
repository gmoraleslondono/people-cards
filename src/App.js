import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: [],
      pageNum: 1,
    }
  }

  componentDidMount() {
    const url = `https://reqres.in/api/users?page=${this.state.pageNum}`;

    fetch(url)
      .then(response => response.json())
      // .then(response => console.log('response', response))
      .then(response => this.setState({ users: response.data}))
  }

  render() {
    const { users } = this.state;

    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">People Cards</h1>
        </div>
        <div className="users">
          {users.map((user) => (
            <div className="card" key={user.id}>
              <img src={user.avatar} className="card-img-top" alt={`${user.email} avatar`}/>
              <div className="card-body">
                <h5 className="card-title">{user.first_name} {user.last_name}</h5>
                <p className="card-text">{user.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default App;
