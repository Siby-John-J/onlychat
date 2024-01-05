import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "../../style/Login.css";
import { useContext } from "react";
import { useFetch } from "../../hooks/useFetch";
import { authContext } from "../../context/authContext";
import { zodResolver } from "@hookform/resolvers/zod";

function SignUp() {
    const { SetisLogin }: any = useContext(authContext)

    type userType = {
        firstname: string,
        lastname: string,
        email: string,
        password: string
    }
    
    const Schema : ZodType<userType> = z.object({
        firstname: z.string().min(3).max(9),
        lastname: z.string().min(3).max(9),
        email: z.string(),
        password: z.string().min(3).max(14)
    }).refine((data) => {
        if(data.password.length <= 5) {
            return false
        } else {
            return true
        }
    }, {
            message: 'weak password',
            path: ['password']
        }
    )
    
    const { register, handleSubmit, formState: {errors} } = useForm<userType>({resolver: zodResolver(Schema)})
    
    const submit = (data: userType) => {
        const response = useFetch(data)
        console.log(response)
    }
    
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
            <form onSubmit={handleSubmit(submit)}>
                <div className="input-session">
                    {
                        errors.firstname && <span>
                            {errors.firstname.message}
                        </span>
                        || errors.lastname && <span>
                            {errors.lastname.message}
                        </span>
                        || errors.email && <span>
                            {errors.email.message}
                         </span>
                        || errors.password && <span>
                            {errors.password.message}
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
                    {/* onSubmit={() => SetisLogin(true)} */}
                </div>
            </form>
        </div>
    );
}

export default SignUp;
