import React from "react";
import {Tabs} from "antd";
import "./index.css";
import MovieItemRank from "./MovieItemRank";
const { TabPane } = Tabs;

export default function TopMovie() {

        return (
            <div className="tab_div">
                <Tabs defaultActiveKey="1" size="large" centered>
                    {/*<div >*/}
                        <TabPane tab='评分' key="1">
                            <MovieItemRank searchField={'score'}/>
                        </TabPane>
                        <TabPane tab='票房' key="2">
                            <MovieItemRank searchField={'boxOffice'}/>
                        </TabPane>
                        <TabPane tab='热度' key="3">
                            <MovieItemRank searchField={'hotSpot'}/>
                        </TabPane>
                    {/*</div>*/}

                </Tabs>
            </div>
        );
}
