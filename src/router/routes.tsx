import React from 'react';
import { useRoutes, } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import {
    MENU_ITEMS,
    ROUTERS
} from './config';



const AppRoutes: React.FC = () => {
    const routes = useRoutes(ROUTERS);
    return routes;
};


export {
    AppRoutes,
    ROUTERS,
    MENU_ITEMS
};

