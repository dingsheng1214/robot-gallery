import React from 'react';
import logo from './assets/images/logo.svg'
import styles from './App.module.css';
import robots from './mock/robot.json'
import Robot from './components/Robot'
import ShoppingCart from './components/ShoppingCart'

interface IRobot {
  id: number;
  name: string;
  username: string;
  email: string;
}
interface Props {}
interface State {
  robots: IRobot[];
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      robots: robots,
    }
  }
  async componentDidMount() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const json = await res.json()
      this.setState({
        robots: json
      })
  }
  render() {
      return (
          <div className={styles.app}>
              <div className={styles.appHeader}>
                  <img src={logo} className={styles.appLogo} alt=""/>
              </div>
              <h1>罗伯特机器人狂拽炫酷吊炸天online在线购物平台名字要长</h1>

              <ShoppingCart />

              <div className={styles.robotList}>
                  {
                      this.state.robots.map(({id, name, email}) => <Robot key={id} id={id} name={name} email={email} />)
                  }
              </div>
          </div>
      );
  }
}

export default App;
