import React from 'react';
import ReactDOM from 'react-dom';
import UserSearch from './props/refs/UserSearch';
const App = ()=>{
  return <div>
      <UserSearch />
  </div>
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);


