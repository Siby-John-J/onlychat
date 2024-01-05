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
                {/* <div className="inputs">
            <div className="texts-session">
              <label htmlFor="">START FOR FREE</label>
              <h1>Create new account</h1>
              <label htmlFor="">Already a member? <a href="/">Log In</a> </label>
            </div>
            <div className="input-session">
              <div className="names">
                <input type="text" className='mainInp'  />
                <input type="text" className='mainInp' />
              </div>
              <input type="text" className='mainInp' />
              <input type="password" className='mainInp' />
            </div>
            <div className="btn-session">
              <button id='cancel'>cancel</button>
              <button>
                <Link className='linked' to='/chat'>
                create account</Link>
              </button>
            </div>
          </div> */}
                {/* <SignUp /> */}
                {/* <SignIn /> */}

                {isLogin ? <SignIn /> : <SignUp />}
            </div>
        </>
    );
}

export default Auth;
