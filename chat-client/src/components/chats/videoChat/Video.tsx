import { useContext } from "react";
import { VideoCall } from "./videoCall";
import { IncomingCall } from "./videoCall";
import { callContext } from "../../../context/callContext";

function Video() {
  const { cModel, incoming } : any = useContext(callContext)

  return (
    <>
        {
          cModel && <VideoCall />
        }
        {
          incoming && <IncomingCall />
        }
    </>
  )
}

export default Video
