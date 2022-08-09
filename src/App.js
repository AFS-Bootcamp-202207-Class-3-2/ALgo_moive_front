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

import CinemaList from "./pages/CinemaList";
import ChooseSeat from "../src/features/chooseSeat/index"
import ALGO from "./features/pay/PayWay/ALGO";

// import ScreeningList from './pages/Screenings'
import Ticket from "./pages/Ticket";

function App() {
    return (
        <>
        <div className="App">
            <Routes>
                <Route path="/" element={<PageLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="movies" element={<Movie/>}/>
                    <Route path="searchPage" element={<SearchPage/>}/>
                    <Route path="movie/:id" element={<MovieDetail/>}/>
                    <Route path="cinemas/:movieId" element={<CinemaList/>}/>
                    {/*<Route path="screenings" element={<ScreeningList />} />*/}
                    <Route path="pay/:id" element={<PaymentPage/>}>
                        <Route path="alpayway" element={<ALGOBank/>}></Route>
                        <Route path="wepayway" element={<WechatWay/>}></Route>
                        <Route path="zhpayway" element={<ZhiFuBao/>}></Route>
                    </Route>
                    <Route path="chooseSeat" element={<ChooseSeat/>}/>
                    <Route path="order/:orderId" element={<Ticket/>}/>
                    <Route path="screenings" element={<ScreeningList/>}/>
                </Route>
                <Route path="/login" element={<Login/>}/>
                <Route path="/algo" element={<ALGO/>}/>
            </Routes>
        </div>
            </>
    );
}

export default App;
