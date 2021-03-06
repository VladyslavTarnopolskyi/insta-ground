import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';

import { Header } from './components/common/header';

import './App.scss';
import Home from './containers/pages/home';
import Welcome from './containers/pages/welcome';

import Posts from './containers/pages/posts';
import { Post } from './containers/pages/posts/post';
import Auth from './containers/pages/auth';
import store from './store';

const navLinks = [
  {title: 'Home', link: '/home'},
  {title: 'Posts', link: '/posts'},
];

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header
          navLinks={navLinks}>
        </Header>
        <Switch>
          <Route path='/' exact>
            <Welcome />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/posts' exact>
            <Posts/>
          </Route>
          <Route path='/posts/:id'>
            <Post/>
          </Route>
          <Route path='/auth' exact>
            <Auth/>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
