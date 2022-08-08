import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Navigation from "../Navigation";

import "./index.css";

const { Header, Content } = Layout;

function PageLayout() {
  return (
    <div>
      <Layout>
        <Header className="header">
          <Navigation />
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </div>
  );
}

export default PageLayout;
