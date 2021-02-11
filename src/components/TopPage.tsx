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
        <Card title="Select weather forecast">
          <Card type="inner" title="Tokyo">
            <Button type="primary">
              <Link to="/tokyo">Check Tokyo Weather</Link>
            </Button>
          </Card>
          <Card type="inner" title="Nagoya">
            <Button type="primary">
              <Link to="/nagoya">Check Nagoya Weather</Link>
            </Button>
          </Card>
          <Card type="inner" title="Osaka">
            <Button type="primary">
              <Link to="/osaka">Check Osaka Weather</Link>
            </Button>
          </Card>
        </Card>
      </Layout>
    </>
  );
};
