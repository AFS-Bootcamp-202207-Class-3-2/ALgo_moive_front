import {useDispatch, useSelector} from "react-redux";
import loginAlgo from "../../static/images/LoginAlgo.png";
import loginGlasses from "../../static/images/Logo.png";
import LoginView from "./loginView";
import RegisterView from "./registerView";
import {changePageState} from "./loginSlice";
import "./index.css"
import {Button} from "antd";

function Login() {
    const isLogin = useSelector((state) => state.login.isLogin);
    const dispatch = useDispatch();

    const updateLoginState = () => {
        dispatch(changePageState());
    }

    return (
        <div className="login-background">
            <div className="login-box">
                <div className="login-logo">
                    <i className="iconfont login-glasses" >&#xe62b;</i>
                    <img src={loginAlgo} alt="LOGIN ALGO" className="login-algo" />
                </div>
                <div className="login-big-board">
                    {isLogin ? <LoginView updateLoginState={updateLoginState} /> : <RegisterView updateLoginState={updateLoginState} />}
                    <Button
                        size="large"
                        type="ghost"
                        onClick={updateLoginState}>
                        {isLogin ? 'Switch to Register' : 'Switch to Log in'}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Login;
