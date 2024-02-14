import { useContext } from "react";
import { VideoCall } from "./videoCall";
import { IncomingCall } from "./videoCall";
import { callContext } from "../../../context/callContext";
import Video from "./Video";

function VideoMain() {
  const { cModel, incoming, isaccept } : any = useContext(callContext)

  return (
    <>
        {
          cModel && <VideoCall />
        }
        {
          incoming && <IncomingCall />
        }
        { isaccept && <Video /> }

        {/* <Video /> */}
        {/* { cModel === false && incoming === false ? <Video /> : ''} */}
    </>
  )
}

export default VideoMain
