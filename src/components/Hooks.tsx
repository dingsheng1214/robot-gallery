import React, {useContext, useEffect, useState} from 'react';
import styles from './Robot.module.css'
import { appContext } from '../context/AppState';

interface Props {}

const Hooks: React.FC<Props> = (props: Props) => {
  const [count, setCount] = useState<number>(0);

  // 当deps不存在时 每次UI渲染或者状态(state,props)改变的时候，都会被调用 等同于 componentDidUpdate
    useEffect(() => {
        console.log('useEffect');
    });

  // 当deps不为空时，只有deps里的state发生变化的时候才会被调用
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  // 当deps为空数组时，只会在初始化的时候调用一次 等同于 componentDidMount
  useEffect(() => {
      const fetchData = async () => {
          const res = await fetch('https://jsonplaceholder.typicode.com/users')
          const json = await res.json()
          console.log(json);

      }
      fetchData()
  }, []);

  const { userInfo }= useContext(appContext);
  return (
      <appContext.Consumer>
          {
              (context) => {
                  return (
                      <div className={styles.cardContainer}>
                          <h2>Hooks</h2>
                          <div>
                              <h3>useState</h3>
                              <button onClick={() => setCount(count + 1)}>
                                  Click me
                              </button>
                              <p>You clicked {count} times</p>
                          </div>
                          <div>
                              <h3>useContext</h3>
                              <p>{userInfo.name}</p>
                              <p>{userInfo.pwd}</p>
                          </div>
                      </div>
                  )
              }
          }

      </appContext.Consumer>
  );
};
export default Hooks
