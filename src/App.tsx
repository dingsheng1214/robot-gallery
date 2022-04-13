import React from 'react';
import logo from './assets/images/logo.svg'
import styles from './App.module.css';
import robots from './mock/robot.json'
import Robot from './components/Robot'
import ShoppingCart from './components/ShoppingCart'
import Hooks from './components/Hooks';

interface IRobot {
  id: number;
  name: string;
  username: string;
  email: string;
}
interface Props {}
interface State {
  robots: IRobot[];
  count: number;
}

class App extends React.Component<Props, State> {
    //  🔥 生命周期第一阶段：初始化状态
  constructor(props: Props) {
      console.log('constructor', new Date().getTime())
    super(props)
    this.state = {
        robots: robots,
        count: 0
    }
  }
    // 生命周期第一阶段：在组件创建好dom元素以后、挂载进页面的时候调用
  async componentDidMount() {
      console.log('componentDidMount')
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const json = await res.json()
      this.setState({
        robots: json
      })
  }

    // 🔥 生命周期第二阶段：更新状态
    // 更新前: 组件接收到一个新的 props (更新)时被调用
    // componentWillReceiveProps(nextProps: Readonly<Props>, nextContext: any) {} //  弃用
    //  建议使用下面👇的
    static getDerivedStateFromProps(nextProps: Readonly<Props>, prevState: State) {
        console.log('getDerivedStateFromProps')
        return null
    }

    // 更新中: 人为控制是否更新
    shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any) {
        console.log('shouldComponentUpdate')
        return true
    }

    // 更新后
    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any) {
        console.log('componentDidUpdate')
    }

    // 🔥 生命周期第三阶段：卸载组件
    // 组件销毁后调用，用于释放资源
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    render() {
        console.log('render')
      return (
          <div className={styles.app}>
              <div className={styles.appHeader}>
                  <img src={logo} className={styles.appLogo} alt=""/>
              </div>
              <h1>罗伯特机器人狂拽炫酷吊炸天online在线购物平台名字要长</h1>

              <div>
                  <button onClick={() => {
                      this.setState({count: this.state.count+1})
                      console.log(this.state.count) // 0

                      this.setState({count: this.state.count+1})
                      console.log(this.state.count) // 0
                  }}>
                      计数器 {this.state.count}
                  </button>
                  <button onClick={() => {
                      this.setState({count: this.state.count+1}, () => {
                          console.log(this.state.count) // 1
                      })

                      this.setState({count: this.state.count+1}, () => {
                          console.log(this.state.count) // 1
                      })
                  }}>
                      计数器 {this.state.count}
                  </button>
                  <button onClick={() => {
                      this.setState((prevState: State) => {
                          console.log(this.state.count) // 0
                          console.log(prevState.count) // 0
                          return {
                              count: prevState.count+1
                          }
                      })
                      console.log(this.state.count) // 0

                      this.setState((prevState: State) => {
                          console.log(this.state.count) // 0
                          console.log(prevState.count) // 0
                          return {
                              count: prevState.count+1
                          }
                      })
                      console.log(this.state.count) // 0
                  }}>
                      计数器 {this.state.count}
                  </button>
              </div>

              <ShoppingCart />

              <div className={styles.robotList}>
                  {
                      this.state.robots.map(({id, name, email}) => <Robot key={id} id={id} name={name} email={email} />)
                  }
                  <Hooks />
              </div>
          </div>
      );
  }
}

export default App;
