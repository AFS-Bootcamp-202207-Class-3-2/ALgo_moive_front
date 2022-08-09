import "./App.css";
import { Route, Routes } from "react-router-dom";
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
function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<PageLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="movies" element={<Movie/>}/>
            <Route path="searchPage" element={<SearchPage/>}/>
            <Route path="movie/:id" element={<MovieDetail/>}/>
            <Route path="pay/:id" element={<PaymentPage/>}>
                <Route path="payway/:way" element={<ALGOBank/>}></Route>
                <Route path="payway/:way" element={<WechatWay/>}></Route>
                <Route path="payway/:way" element={<ZhiFuBao/>}></Route>
            </Route>
          </Route>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
  );
}

export default App;
