import { useContext, useEffect, useRef } from "react";
import Call from "../../../assets/call.svg"
import Incoming from "../../../assets/incoming.svg"
import { callContext } from "../../../context/callContext";
import { socketEmit, socketOn, useSocketEmit } from "../../../hooks/useSocket";
import { recvOffer } from "../../../webRTC/main";

export let setisAccept: any = undefined
export let CANCEL : any = {}

function VideoCall() {
    const { setcModel, id, sender, setIsAccept, peer2_name, firstname }: any = useContext(callContext);

    socketOn(`cancel-call:${sender}`, setcModel)

    useEffect(() => {
        function callHook() {
            useSocketEmit(id, firstname)
        }
        CANCEL.can = false
        setisAccept = setIsAccept
        callHook()
    }, [])

    const cancelAction = () => {
        setcModel((e: any) => false);
    }

    return (
        <div className="vid-div">
            <h1>{`Calling ${peer2_name.current}...`}</h1>
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
    const { setIncoming, id, sender, offer, setIsAccept, peer1_name }: any = useContext(callContext)

    socketOn(`cancel-call:${sender}`, setIncoming)

    useEffect(() => {
        setisAccept = setIsAccept
    },[])

    return (
        <div className="vid-div">
            <h1>Incoming call...</h1>
            <label
                style={{
                    color: "white",
                    fontSize: "20px",
                }}>
                From {peer1_name.current}
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
                <button className="accept" onClick={async() => {
                    await recvOffer(offer, id)
                    setIsAccept((prev: boolean) => true)
                }}>accept</button>
            </div>
        </div>
    );
}

export { VideoCall, IncomingCall };
