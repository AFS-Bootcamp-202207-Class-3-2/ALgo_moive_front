import { useSelector } from "react-redux";
import loginAlgo from "../../static/images/LoginAlgo.png";
import loginGlasses from "../../static/images/LoginAlgo.png";
import LoginView from "./loginView";
import RegisterView from "./registerView";
import "./index.css"

function Login() {
    const isLogin = useSelector((state) => state.login.isLogin);
    return (
        <div className="login-background">
            <div className="login-box">
                <div className="login-logo">
                    <img src={loginGlasses} alt="LOGIN GLASSES" className="login-glasses" />
                    <img src={loginAlgo} alt="LOGIN ALGO" className="login-algo" />
                </div>
                <div className="login-big-board">
                    <div className="login-board" hidden={!isLogin}>
                        <LoginView />
                    </div>
                    <div className="login-board" hidden={isLogin}>
                        <RegisterView />
                    </div>
                    {/* <Button onClick={}>切换</Button> */}
                </div>
            </div>
        </div>
    )
}

export default Login;