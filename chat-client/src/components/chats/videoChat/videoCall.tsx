import { useContext, useEffect } from "react";
import Call from "../../../assets/call.svg"
import Incoming from "../../../assets/incoming.svg"
import { callContext } from "../../../context/callContext";
import { useSocketEmit } from "../../../hooks/useSocket";

function VideoCall() {
    const { setcModel, id }: any = useContext(callContext);

    useEffect(() => {
        function callHook() {
            useSocketEmit(id)
        }

        callHook()
    }, [])

    const cancelAction = () => {
        setcModel((e: any) => false);
    }

    return (
        <div className="vid-div">
            <h1>Calling romy...</h1>
            <div className="image">
                <img src={Call} alt="none" />
            </div>
            <div className="buttons">
                <button className="cancel"
                    onClick={() => {
                        cancelAction()
                    }}>
                    cancel
                </button>
            </div>
        </div>
    );
}

function IncomingCall() {
    const { setIncoming }: any = useContext(callContext);

    return (
        <div className="vid-div">
            <h1>Incoming call...</h1>
            <label
                style={{
                    color: "white",
                    fontSize: "20px",
                }}>
                From romy
            </label>
            <div className="image">
                <img src={Incoming} alt="" />
            </div>
            <div className="buttons">
                <button className="cancel"
                    onClick={() => {
                        setIncoming((e: any) => false);
                    }}>
                    decline
                </button>
                <button className="accept" onClick={() => {
                    
                }}>accept</button>
            </div>
        </div>
    );
}

export { VideoCall, IncomingCall };
