import { Link } from 'react-router-dom';
import { Menu } from 'antd';

export const Header = () => {
  return (
    <Menu theme="dark" mode="horizontal">
      <Menu.Item key="1">
        <Link to="/metaweather-app" className="top-link">
          TopPage
        </Link>
      </Menu.Item>
    </Menu>
  );
};
