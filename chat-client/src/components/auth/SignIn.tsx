import { Link } from "react-router-dom";
import "../../style/Login.css";
import { useContext, useState } from "react";
import { useAuthFetch } from "../../hooks/useFetch";
import { authContext } from "../../context/authContext";

export default function SignIn() {
    const { SetisLogin }: any = useContext(authContext);

    function changeState() {
        SetisLogin(false);
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="inputs">
            <div className="texts-session">
                <label htmlFor="">WELCOME BACK</label>
                <h1>Sign in</h1>
                <label htmlFor="">
                    New to OnlyChat? <a onClick={changeState}>Create account</a>{" "}
                </label>
            </div>
            <div className="input-session">
                <input
                    placeholder="email"
                    type="email"
                    className="mainInp"
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    placeholder="password"
                    type="password"
                    className="mainInp"
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div className="btn-session">
                <button id="cancel">cancel</button>
                <button onClick={() => {
                    if(email !== '' && password !== '') {
                        useAuthFetch({
                            email: email,
                            password: password
                        })
                    }
                }}>
                    {/* <Link className="linked" to="/chat">
                    </Link> */}
                        sign in
                </button>
            </div>
        </div>
    );
}
