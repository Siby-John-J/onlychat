import "./App.css";
import Chat from "./components/Chat";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./components/auth/Auth";
import { authContext } from "./context/authContext";
import { userContext } from "./context/userContext";

function App() {
    const [isLogin, SetisLogin] = useState(true);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <authContext.Provider value={{ isLogin, SetisLogin }}>
                <userContext.Provider value={{
                    username,
                    setUsername,
                    password,
                    setPassword
                }}>
                    <Routes>
                        <Route path="/" Component={Auth} />
                        <Route path="/chat" Component={Chat} />
                    </Routes>
                </userContext.Provider>
            </authContext.Provider>
        </>
    );
}

export default App;
