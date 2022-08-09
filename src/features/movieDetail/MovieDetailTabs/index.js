import { Link } from "react-router-dom";
import { Tabs, Breadcrumb } from "antd";
import "./index.css";
const { TabPane } = Tabs;

function MovieDetailTabs(props) {
  const { movie } = props;
  return (
    <div>
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">ALGO MOVIE</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/movies">电影</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{movie.movieName}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Tabs
        defaultActiveKey="1"
        className="movie-detail-tabs"
        tabBarGutter={50}
      >
        <TabPane tab={<span>剧情介绍</span>} key="1">
          <article>
            <p>{movie.movieDesc}</p>
          </article>
        </TabPane>
        <TabPane tab={<span>演员列表</span>} key="2">
          <article>
            <h2>主演</h2>
            <p>{movie.actors}</p>
          </article>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default MovieDetailTabs;
