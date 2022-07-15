import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { PageContainer } from '@ant-design/pro-components';
import { useNavigate } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { AppRoutes, MENU_ITEMS, ROUTERS } from '../router/routes';
import SliderPage from './carousel';
import './App.css';


console.log('MENU_ITEMS_LAYOUT', MENU_ITEMS);

const App: React.FC = () => {
  const navigate = useNavigate();

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    console.log('路由信息', e);
    const targetMenuItem = ROUTERS.find(item => item.key === e.key);
    navigate(`${e.key}?code=${targetMenuItem?.meta?.code || 'home'}`);
  };

  return (
    <div className='wrapper'
    >
      <Layout>
        <header>
          <div className='header clearfix'>
            <div className='logo'>
              <img className='logo-banner' src="http://jwc.mnu.cn/images/logo.png" alt="" />
            </div>
          </div>
        </header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={MENU_ITEMS}
          onClick={handleMenuClick}
        />
        <SliderPage />
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
        {/* <div
          style={{

          }}
        >
          友情链接
        </div> */}
      </Layout>
    </div >
  );
};

export default App;
