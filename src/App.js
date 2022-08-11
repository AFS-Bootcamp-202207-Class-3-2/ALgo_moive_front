import "./App.css";
import {Route, Routes} from "react-router-dom";
import PageLayout from "./layout/PageLayout";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Login from "./features/login";
import SearchPage from "./pages/SearchPage";
import MovieDetail from "./pages/MovieDetail";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import WechatWay from "./features/pay/PayWay/WechatWay";
import ZhiFuBao from "./features/pay/PayWay/ZhiFuBao";
import ALGOBank from "./features/pay/PayWay/ALGOBank";
import ScreeningList from "./pages/Screenings"

import ChooseSeat from "../src/features/chooseSeat/index"
import ALGO from "./features/pay/PayWay/ALGO";

import Ticket from "./pages/Ticket";
import CinemaPage from "./pages/CinemaPage";
import CinemaDetail from "./pages/CinemaDetail";

import UserCenter from "./features/user/UserCenter";
import UserOrders from "./features/user/UserOrders";
import CinemaDesc from "./features/cinema/CinemaDesc";
import UserBaseInfo from "./features/user/UserBaseInfo";
import WatchMoving from "./pages/WatchMoving";
function App() {
    return (
        <>
        <div className="App">
            <Routes>
                <Route path="/" element={<PageLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="movies" element={<Movie/>}/>
                    <Route path="cinemaList" element={<CinemaPage/>}/>
                    <Route path="searchPage" element={<SearchPage/>}/>
                    <Route path="movie/:id" element={<MovieDetail/>}/>
                    <Route path="cinemas/:movieId" element={<CinemaDetail/>}/>
                    <Route path="cinemaDesc/:cinemaId" element={<CinemaDesc/>}/>
                    {/*<Route path="screenings" element={<ScreeningList />} />*/}
                    <Route path="pay/:id" element={<PaymentPage/>}>
                        <Route path="alpayway" element={<ALGOBank/>}></Route>
                        <Route path="wepayway" element={<WechatWay/>}></Route>
                        <Route path="zhpayway" element={<ZhiFuBao/>}></Route>
                    </Route>
                    <Route path="chooseSeat" element={<ChooseSeat/>}/>
                    <Route path="order/:orderId" element={<Ticket/>}/>
                    <Route path="screenings" element={<ScreeningList/>}/>
                    <Route path="user" element={<UserCenter/>}>
                        <Route path="orders" element={<UserOrders/>} />
                        <Route path="detail" element={<UserBaseInfo />} />
                    </Route>

                </Route>
                <Route path="/login" element={<Login/>}/>
                <Route path="/algo/:id" element={<ALGO/>}/>
                <Route path="/watchmovie" element={<WatchMoving/>}/>
            </Routes>
        </div>
            </>
    );
}

export default App;
