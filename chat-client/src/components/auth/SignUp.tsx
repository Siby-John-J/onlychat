import "../../style/Login.css";
import { useContext } from "react";
import { authContext } from "../../context/authContext";

import { register, ers, handleSubmit, submit } from "../../hooks/useValidate";

function SignUp() {
    const { SetisLogin }: any = useContext(authContext)
    
    return (
        <div className="inputs">
            <div className="texts-session">
                <label htmlFor="">START FOR FREE</label>
                <h1>Create new account</h1>
                <label htmlFor="">
                    Already a member?{" "}
                    <a
                        onClick={() => {
                            SetisLogin(true);
                        }}
                    >
                        Log In
                    </a>
                </label>
            </div>
            <form onSubmit={
                handleSubmit(submit)
                // SetisLogin(true)
            }>
                <div className="input-session">
                    {
                        ers.firstname && <span>
                            {ers.firstname.message}
                        </span>
                        || ers.lastname && <span>
                            {ers.lastname.message}
                        </span>
                        || ers.email && <span>
                            {ers.email.message}
                         </span>
                        || ers.password && <span>
                            {ers.password.message}
                        </span>
                    }
                    <div className="names">
                        <input
                            placeholder="firstname"
                            type="text"
                            className="mainInp"
                            {...register('firstname')}
                            />
                        <input
                            placeholder="lastname"
                            type="text"
                            className="mainInp"
                            {...register('lastname')}
                            />
                    </div>
                    <input placeholder="email" 
                            type="email" 
                            className="mainInp"
                            { ...register('email') }
                            />
                    <input placeholder="password" type="password" 
                            className="mainInp"
                            { ...register('password') }
                            />
                </div>
                <div className="btn-session">
                    <button id="cancel">cancel</button>
                    <input id="submit" type="submit" value={'submit'}  />
                </div>
            </form>
        </div>
    );
}

export default SignUp;
