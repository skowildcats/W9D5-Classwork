import React from 'react';
import Clock from './clock.jsx';
import Tab from './tab.jsx';

const App = (props) => {
  return (
    <div className="app">
      <Clock />
      <Tab tabs={[
        {title: "one", content: "I am the first"},
        {title: "two", content:"Second pane here"},
        {title: "three", content:"Third pane here"},
      ]} />
    </div>
  )
}

export default App;