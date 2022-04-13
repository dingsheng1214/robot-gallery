import React, {useContext} from 'react';
import styles from './Robot.module.css'
import { appContext, appSetStateContext} from '../context/AppState'

interface RobotProps {
    id: number;
    name: string;
    email: string;
}
const Robot:React.FC<RobotProps> = (props) => {
    const { id, name, email } = props;
    const { userInfo, shoppingCart } = useContext(appContext);
    const setState = useContext(appSetStateContext);

    const addToShoppingCart = () => {
        if (setState) {
            setState({
                userInfo,
                shoppingCart: {
                    items: [...shoppingCart.items, { id, name, email }]
                }

            })
        }
    }
    return (
        <li className={styles.cardContainer}>
            <img src={`https://robohash.org/${id}`} alt="robot"/>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>作者: {userInfo.name}</p>
            <button onClick={addToShoppingCart}>加入购物车</button>
        </li>
    )
}

export default Robot;
