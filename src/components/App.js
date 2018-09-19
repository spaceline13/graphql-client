import React, { Component } from 'react';
import Header from './Header'
import { Switch, Route } from 'react-router-dom'
import '../styles/App.css';
import PostList from './PostList.js';
import UserList from './cms/UserList.js';
import AddPost from './AddPost.js';
import Login from './Login'

class App extends Component {
  render() {
    return (
        <div className="center w85">
            <Header />
            <div className="ph3 pv1 background-gray">
                <Switch>
                    <Route exact path="/users" component={UserList} />
                    <Route exact path="/" component={PostList} />
                    <Route exact path="/create" component={AddPost} />
                    <Route exact path="/login" component={Login} />
                </Switch>
            </div>
        </div>
    );
  }
}

export default App;
