import {Outlet} from "react-router-dom";
import {BackTop, Layout} from "antd";
import Navigation from "../Navigation";
import BlindBox from "../../features/home/BlindBox";

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
      <BlindBox></BlindBox>
    </div>
  );
}

export default PageLayout;
