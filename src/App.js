import React from 'react';
import {withRouter} from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import routes from './routes.js';
import './App.css';

function App(props) {
  console.log(props)
  return (
    <div className="App">
      {props.location.pathname === '/'
      ? (<>
          {routes}
        </>)
      : (<>
          <Nav />
          {routes}
        </>)}
    </div>
  );
}

export default withRouter(App);
