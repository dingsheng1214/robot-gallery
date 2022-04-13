import React, {useEffect, useState} from 'react';
import logo from './assets/images/logo.svg'
import styles from './App.module.css';
import robots from './mock/robot.json'
import Robot from './components/Robot'
import ShoppingCart from './components/ShoppingCart'
import Hooks from './components/Hooks';
import RobotDiscount from './components/RobotDiscount';

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

const AppHooks: React.FC<Props> = () => {
    const [state, setState] = useState<State>({
        robots: robots,
        count: 0
    });

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const json = await res.json()
            setState({
                ...state,
                robots: json
            })
        }
        fetchData()
    })

    return (
        <div className={styles.app}>
            <div className={styles.appHeader}>
                <img src={logo} className={styles.appLogo} alt=""/>
            </div>
            <h1>罗伯特机器人狂拽炫酷吊炸天online在线购物平台名字要长</h1>

            <ShoppingCart />

            <div className={styles.robotList}>

                {
                    state.robots.map(({id, name, email}, index) => {
                        return (
                            index < 5 ? <Robot key={id} id={id} name={name} email={email}/> :
                                <RobotDiscount key={id} id={id} name={name} email={email} />
                        )
                    })
                }
                <Hooks />
            </div>

        </div>
    );
}

export default AppHooks;
