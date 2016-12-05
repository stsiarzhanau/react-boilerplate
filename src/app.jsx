import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// import Main from 'Main';
import './styles/app.scss';

// What for?
$(document).foundation();

// ReactDOM.render(
//   <Router history={hashHistory}>
//     <Route path="/" component={Main}>
//       <IndexRoute component={} />
//       <Route path="countdown" component={} />
//     </Route>
//   </Router>,
//   document.getElementById('app'),
// );

ReactDOM.render(
  <h3>React Boilerplate</h3>,
  document.getElementById('app'),
);
