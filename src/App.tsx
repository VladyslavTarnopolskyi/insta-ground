import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Router } from 'react-router';

import { Header } from './components/common/header';

import './App.scss';
import Home from './containers/pages/home';
import Welcome from './containers/pages/welcome';

import history from './helpers/history';
import Posts from './containers/pages/posts';
import { Post } from './containers/pages/posts/post';
import Auth from './containers/pages/auth';

const navLinks = [
  {title: 'Home', link: '/home'},
  {title: 'Posts', link: '/posts'},
];

const App = () => {
  return (
    <>
      <Router history={history}>
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
    </>
  );
};

export default App;
