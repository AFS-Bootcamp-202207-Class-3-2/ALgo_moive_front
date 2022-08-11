import { Outlet } from "react-router-dom";
import { Layout, BackTop } from "antd";
import { useDispatch } from "react-redux";
import Navigation from "../Navigation";
import blindBoxImage from "../../static/images/blindBox.png";
import BlindBox from "../BlindBox";
import { changeBlindBoxModalVisible } from "../BlindBox/BlindBoxSlice";

import "./index.css";

const { Header, Content } = Layout;

function PageLayout() {
  const dispatch = useDispatch();
  const openBlindBoxModal = () => {
    dispatch(changeBlindBoxModalVisible(true));
  };
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
      <button className="blind-box-button" onClick={openBlindBoxModal}>
        <img src={blindBoxImage} alt="盲盒图标" width={40} />
        <p>精选盲盒</p>
      </button>
      <BackTop />
      <strong className="site-back-top-basic">-</strong>
      <BlindBox></BlindBox>
    </div>
  );
}

export default PageLayout;
