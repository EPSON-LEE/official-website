import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { AppRoutes, MENU_ITEMS } from './routes';
import './App.css';

const App: React.FC = () => {
  const navigate = useNavigate();

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    console.log('路由信息', e);
    navigate(e.key, {
      replace: true,
    });
  };

  return (
    <Layout style={{ height: '100vh', width: '80vw', margin: '0 auto' }}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={MENU_ITEMS}
        onClick={handleMenuClick}
      />
      <Layout className="site-layout">
        <div
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <AppRoutes />
        </div>
      </Layout>
    </Layout>
  );
};

export default App;
