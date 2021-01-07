import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: [],
      pageNum: 1,
      totalPages: 0
    }
  }

  // componentDidMount() {
  //   const url = `https://reqres.in/api/users?page=${this.state.pageNum}`;

  //   fetch(url)
  //     .then(response => response.json())
  //     // .then(response => console.log('response', response))
  //     .then(response => this.setState({ users: response.data}))
  // }

  componentDidMount() {
    this.changePage(this.state.pageNum)
  }

  changePage(pageNum) {
    const url = `https://reqres.in/api/users?page=${pageNum}`;

    fetch(url)
      .then(response => response.json())
      .then(response => this.setState({ users: response.data, pageNum: pageNum, totalPages: response.total_pages}))
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
            <div class="card mb-3" key={user.id}>
              <div class="row g-0">
                <div class="col-md-4">
                <img src={user.avatar} className="card-img-top" alt={`${user.email} avatar`}/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                  <h5 className="card-title">{user.first_name} {user.last_name}</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text">{user.email}</p>
                  </div>
                </div>
              </div>
            </div>
            // <div className="card" key={user.id}>
            //   <img src={user.avatar} className="card-img-top" alt={`${user.email} avatar`}/>
            //   <div className="card-body">
            //     <h5 className="card-title">{user.first_name} {user.last_name}</h5>
            //     <p className="card-text">{user.email}</p>
            //   </div>
            // </div>
          ))}
        </div>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
          type="button"
          className="btn btn-secondary"
          disabled={this.state.pageNum === 1 ? true : false}
          onClick={() => this.changePage(this.state.pageNum - 1)}
          >
            &laquo;
          </button>
          <button type="button" className="btn btn-secondary">{this.state.pageNum}</button>
          <button
            type="button"
            className="btn btn-secondary"
            disabled={this.state.pageNum >= this.state.totalPages ? true : false}
            onClick={() => this.changePage(this.state.pageNum + 1)}
          >
            &raquo;
          </button>
        </div>
      </div>
    )
  }
}

export default App;
