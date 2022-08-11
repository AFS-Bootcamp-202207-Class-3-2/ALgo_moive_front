import { Outlet } from "react-router-dom";
import { Layout, BackTop  } from "antd";
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
        <Content className="content">
          <Outlet />
        </Content>
      </Layout>
        <BackTop />
        <strong className="site-back-top-basic">-</strong>
    </div>
  );
}

export default PageLayout;
