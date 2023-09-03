
import { Layout, Menu, Dropdown, Button } from 'antd';
import { UserOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons';

const { Header } = Layout;

const TopNavbar = () => {
  const menu = (
    <Menu>
      <Menu.Item key="settings">
        <Button icon={<SettingOutlined />} type="text">
          User Settings
        </Button>
      </Menu.Item>
      <Menu.Item key="logout">
        <Button icon={<LogoutOutlined />} type="text">
          Logout
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className="header">
      <div className="logo">Ecommerce Dashboard</div>
      <Dropdown overlay={menu} placement="bottomRight" arrow>
        <Button icon={<UserOutlined />} type="text">
          User
        </Button>
      </Dropdown>
    </Header>
  );
};

export default TopNavbar;