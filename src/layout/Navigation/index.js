import { Col, Row, Input, Select, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import logo from "../../static/images/Logo.png";
import "./index.css";

const { Option } = Select;
const { Search } = Input;

function Navigation() {
  const onSearch = () => {};

  return (
    <Row>
      <Col span={6}>
        <img src={logo} alt="ALGO MOVIE" className="nav-logo" />
      </Col>
      <Col span={12}>
        <nav className="nav-list">
          <NavLink
            to="/"
            className={({ isActive }) =>
              "nav-item" + (isActive ? " active" : " ")
            }
          >
            首页
          </NavLink>
          <NavLink
            to="/movie"
            className={({ isActive }) =>
              "nav-item" + (isActive ? " active" : " ")
            }
          >
            电影
          </NavLink>
          <NavLink
            to="/cinema"
            className={({ isActive }) =>
              "nav-item" + (isActive ? " active" : " ")
            }
          >
            影院
          </NavLink>
          <NavLink
            to="/top"
            className={({ isActive }) =>
              "nav-item" + (isActive ? " active" : " ")
            }
          >
            榜单
          </NavLink>
        </nav>
      </Col>
      <Col span={6}>
        <div className="nav-right-box">
          <Input.Group compact>
            <Select defaultValue="movie">
              <Option value="movie">电影</Option>
              <Option value="cinema">影院</Option>
            </Select>
            <Search
              placeholder="找电影、影院"
              allowClear
              onSearch={onSearch}
              style={{ width: 200 }}
            />
          </Input.Group>
          <Avatar
            size={{ xs: 24, sm: 24, md: 32, lg: 32, xl: 32, xxl: 40 }}
            icon={<UserOutlined />}
          ></Avatar>
        </div>
      </Col>
    </Row>
  );
}

export default Navigation;
