import { Col, Row, Input, Select, Avatar, Dropdown, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../static/images/Logo.png";
import "./index.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {loadUserInfo, userLogout} from "./NavigationSlice";
const { Option } = Select;
const { Search } = Input;

function Navigation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.navigation.userInfo);
  const [searchValue, setSearchValue] = useState("");
  const toHomePage = () => {
    navigate("/");
  };
  const onChange = (event) => {
    setSearchValue(event.target.value);
  };
  const onSearch = (event) => {
    const value = searchValue;
    setSearchValue("");
    navigate("searchPage", {
      replace: false,
      state: {
        category: selectSearchCategory,
        keyword: event,
        value,
      },
    });
  };

  const logout = () => {
    dispatch(userLogout());
    navigate("/");
  }

  useEffect(() => {
    dispatch(loadUserInfo());
  }, [dispatch]);

  const [selectSearchCategory, setSelectSearchCategory] = useState("movie");
  const selectSearchCategoryChange = (event) => {
    setSelectSearchCategory(event);
  };

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <Link to="/user/detail">个人中心</Link>,
        },
        {
          key: "2",
          label: <Link to="/user/orders">我的订单</Link>,
        },
        {
          key: "3",
          label: <span onClick={logout}>退出登录</span>,
        },
      ]}
    />
  );

  return (
    <Row>
      <Col span={6}>
        <img
          src={logo}
          alt="ALGO MOVIE"
          className="nav-logo"
          onClick={toHomePage}
        />
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
            to="/movies"
            className={({ isActive }) =>
              "nav-item" + (isActive ? " active" : " ")
            }
          >
            电影
          </NavLink>
          <NavLink
            to="/cinemaList"
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
            <Select defaultValue="movie" onChange={selectSearchCategoryChange}>
              <Option value="movie">电影</Option>
              <Option value="cinema">影院</Option>
            </Select>
            <Search
              placeholder="找电影、影院"
              allowClear
              onSearch={onSearch}
              onChange={onChange}
              className="nav-searchinput"
              value={searchValue}
            />
          </Input.Group>
          <Dropdown overlay={menu} disabled={userInfo && userInfo.token ? false : true}>
            <Link to={userInfo && userInfo.token ? "/user/detail" : "/login"}>
              <Avatar
                size={{ xs: 24, sm: 24, md: 32, lg: 32, xl: 32, xxl: 40 }}
                icon={
                  userInfo && userInfo.token ? (
                    <img src={userInfo.avatar} alt="用户头像" />
                  ) : (
                    <UserOutlined />
                  )
                }
              ></Avatar>
            </Link>
          </Dropdown>
        </div>
      </Col>
    </Row>
  );
}

export default Navigation;
