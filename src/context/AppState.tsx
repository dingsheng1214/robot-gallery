import React, {Dispatch, SetStateAction, useState} from 'react';

interface UserInfo{
    name: string;
    pwd: string;
    email?: string;
}
interface Robot {
   id: number;
   name: string;
   email: string;
}
interface ShoppingCart {
    items: Robot[];
}

interface AppState{
    userInfo: UserInfo;
    shoppingCart: ShoppingCart
}
const defaultUserInfo: AppState= {
    userInfo: {
        name: 'zhangsan',
        pwd: '123456',
    },
    shoppingCart: {
        items: []
    }
}
export const appContext = React.createContext<AppState>(defaultUserInfo);
export const appSetStateContext = React.createContext<Dispatch<SetStateAction<AppState>> | undefined>(undefined);

interface Props {
    children: React.ReactNode;
}
export const AppStateProvider: React.FC<Props> = (props ) => {
    const [state, setState] = useState(defaultUserInfo);
    return (
        <appContext.Provider value={state}>
            <appSetStateContext.Provider value={setState}>
                {props.children}
            </appSetStateContext.Provider>
        </appContext.Provider>
    )
}

