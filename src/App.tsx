import React from 'react';
import styles from './App.module.css';
import robots from './mock/robot.json'
import Robot from './components/Robot'

function App() {
  return (
      <div className={styles.app}>
          <div className={styles.robotList}>
              {
                  robots.map(({id, name, email}) => <Robot key={id} id={id} name={name} email={email} />)
              }
          </div>
      </div>
  );
}

export default App;
