import {NavLink} from "react-router-dom";
import './index.css'

function BoxOffice() {
    return (
        <div className="box-office">
            <div className="box-office-header">
                <span className="box-office-title">
                    今日票房
                </span>
                <NavLink className="box-office-rank-title" to="/movie">
                    查看完整榜单 >
                </NavLink>
            </div>
            <div className="box-office-rank-box">
                <div className="box-office-rank-one">
                    <img className="box-office-rank-one-cover" />
                    <div className="box-office-rank-one-box">

                    </div>
                </div>
                <div className="box-office-rank-behind">

                </div>
            </div>
        </div>
    )
}

export default BoxOffice;