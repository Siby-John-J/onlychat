import { useContext } from "react";
import { authContext } from "../../context/authContext";
import "../../style/Login.css";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

function Auth() {
    const { isLogin }: any = useContext(authContext);

    return (
        <>
            <div className="maindiv">
                <div className="header">
                    <div className="circle"></div>
                    <h3>OnlyChat</h3>
                </div>
                {isLogin ? <SignIn /> : <SignUp />}
            </div>
        </>
    );
}

export default Auth;
