import React from 'react';
import './App.css';
import robots from './mock/robot.json'
import Robot from './components/Robot'

function App() {
  return (
      <ul>
          {
              robots.map(({id, name, email}) => <Robot key={id} id={id} name={name} email={email} />)
          }
      </ul>
  );
}

export default App;
