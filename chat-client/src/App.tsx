import "./App.css";
import Chat from "./components/Chat";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./components/auth/Auth";
import { authContext } from "./context/authContext";
import { userContext } from "./context/userContext";

function App() {
    const [isLogin, SetisLogin] = useState(true);
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [id, setId] = useState('')
    const [chats, setChat] = useState('')

    return (
        <>
            <authContext.Provider value={{ isLogin, SetisLogin }}>
                <userContext.Provider value={{
                    firstname,
                    lastname,
                    setFirstname,
                    setLastname,
                    email,
                    setEmail,
                    password,
                    setPassword,
                    id,
                    setId,
                    chats,
                    setChat
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
