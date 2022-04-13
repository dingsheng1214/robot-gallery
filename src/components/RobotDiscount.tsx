import React, {useContext} from 'react';
import styles from './Robot.module.css'
import { appContext } from '../context/AppState'
import { withAddToCart } from './hoc/AddToCart'

export interface RobotProps {
    id: number;
    name: string;
    email: string;
    addToCart: (id, name, email) => void;
}
const RobotDiscount:React.FC<RobotProps> = (props) => {
    const { id, name, email, addToCart } = props;
    const { userInfo} = useContext(appContext);

    return (
        <li className={styles.cardContainer}>
            <img src={`https://robohash.org/${id}`} alt="robot"/>
            <h2>打折商品</h2>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>作者: {userInfo.name}</p>
            <button onClick={() => addToCart(id, name, email)}>加入购物车</button>
        </li>
    )
}

export default withAddToCart(RobotDiscount);
