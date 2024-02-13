import { useContext, useEffect } from "react";
import Call from "../../../assets/call.svg"
import Incoming from "../../../assets/incoming.svg"
import { callContext } from "../../../context/callContext";
import { socketEmit, socketOn, useSocketEmit } from "../../../hooks/useSocket";
import { recvOffer } from "../../../webRTC/main";

function VideoCall() {
    const { setcModel, id, sender }: any = useContext(callContext);

    socketOn(`cancel-call:${sender}`, setcModel)

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
                        socketEmit('decline:offer', id)
                    }}>
                    cancel
                </button>
            </div>
        </div>
    );
}

function IncomingCall() {
    const { setIncoming, id, sender, offer }: any = useContext(callContext)

    socketOn(`cancel-call:${sender}`, setIncoming)

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
                        socketEmit('decline:offer', id)
                    }}>
                    decline
                </button>
                <button className="accept" onClick={() => {
                    recvOffer(offer, id)
                }}>accept</button>
            </div>
        </div>
    );
}

export { VideoCall, IncomingCall };
