import "./App.css";
import Chat from "./components/Chat";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./components/auth/Auth";
import { authContext } from "./context/authContext";

function App() {
    const [isLogin, SetisLogin] = useState(true);

    return (
        <>
            <authContext.Provider value={{ isLogin, SetisLogin }}>
                <Routes>
                    <Route path="/" Component={Auth} />
                    <Route path="/chat" Component={Chat} />
                </Routes>
            </authContext.Provider>
        </>
    );
}

export default App;
