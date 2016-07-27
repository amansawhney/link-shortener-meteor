import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return {
    <h1>Link Shortener </h1>
  }
}

Meteor.stratup(() => {
  ReactDOM.render(<App />, document.querySelector('.render-target'));
});
