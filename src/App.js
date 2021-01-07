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
      <div>
        <p>People Cards</p>
          {users.map((user) => (
            <div>
              <img src={user.avatar} alt="Person image"/>
              <p key={user.id}>{user.email}</p>
            </div>
          ))}
      </div>
    )
  }
}

export default App;
