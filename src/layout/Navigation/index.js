import { Col, Row } from "antd";
import logo from "../../static/images/Logo.png";
// import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <Row>
      <Col span={6}>
        <img src={logo} alt="ALGO MOVIE" width="185" height="80" />
      </Col>
      <Col span={12}>
        
      </Col>
      <Col span={6}>avatar</Col>
    </Row>
  );
}

export default Navigation;
