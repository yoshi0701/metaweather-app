import React from 'react';
import { Layout, Card, Button } from 'antd';
import { Link } from 'react-router-dom';

export const TopPage = () => {
  const { Content } = Layout;
  return (
    <>
      <Layout>
        <Content>
          <h1>Top Page</h1>
          <img src="https://www.metaweather.com/static/img/weather/png/64/lc.png" />
        </Content>
        <Card title="地域を選択する">
          <Card type="inner" title="東京">
            <Button type="primary">
              <Link to="/tokyo">東京の天気を確認する</Link>
            </Button>
          </Card>
          <Card type="inner" title="名古屋">
            <Button type="primary">
              <Link to="/nagoya">名古屋の天気を確認する</Link>
            </Button>
          </Card>
          <Card type="inner" title="大阪">
            <Button type="primary">
              <Link to="/osaka">大阪の天気を確認する</Link>
            </Button>
          </Card>
        </Card>
      </Layout>
    </>
  );
};
