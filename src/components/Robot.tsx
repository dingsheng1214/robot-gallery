import React, {useContext} from 'react';
import styles from './Robot.module.css'
import { appContext, appSetStateContext} from '../context/AppState'
import useAddToCart from './hook/AddToCart'
interface RobotProps {
    id: number;
    name: string;
    email: string;
}
const Robot:React.FC<RobotProps> = (props) => {
    const { id, name, email } = props;
    const { userInfo } = useContext(appContext);

    const addToCart = useAddToCart()
    return (
        <li className={styles.cardContainer}>
            <img src={`https://robohash.org/${id}`} alt="robot"/>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>作者: {userInfo.name}</p>
            <button onClick={() => addToCart(id, name, email)}>加入购物车</button>
        </li>
    )
}

export default Robot;
