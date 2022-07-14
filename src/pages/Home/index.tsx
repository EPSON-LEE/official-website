import React, { useEffect, useMemo, useState } from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { Card } from 'antd';
import { Avatar, List } from 'antd';

export default () => {
  const customLoadingDom = useMemo(
    () => <div style={{ color: 'red', padding: '30px', textAlign: 'center' }}>自定义加载...</div>,
    [],
  );
  const [customLoading, setCustomLoading] = useState<React.ReactNode | boolean>(customLoadingDom);

  const data = [
    {
      title: '通知公告',
    },
    {
      title: '新闻信息',
    },
    {
      title: '学术活动',
    },
  ];

  return (
    <div style={{
      // display: 'flex',
      // flexDirection: 'row',
      // justifyContent: 'space-around',
    }}>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Card title={item.title}>
              <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
              <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
              <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </Card>
          </List.Item>
        )}
      />
    </div >
  );
};