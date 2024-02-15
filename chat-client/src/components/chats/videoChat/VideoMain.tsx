import { useContext, useEffect } from "react";
import { VideoCall } from "./videoCall";
import { IncomingCall } from "./videoCall";
import { callContext } from "../../../context/callContext";
import { localVideoEl, remoteVideoEl } from "../../../webRTC/main";
import { CANCEL } from "./videoCall";
import Video from "./Video";

function VideoMain() {
  const { cModel, incoming, isaccept } : any = useContext(callContext)

  useEffect(() => {
    if(CANCEL.can === true) {
      localVideoEl.current.srcObject.getTracks().forEach((stream: any) => {
        stream.stop()
      })
    
      remoteVideoEl.current.srcObject.getTracks().forEach((stream: any) => {
        stream.stop()
      })

      // console.log(localVideoEl, remoteVideoEl)
    }

    // console.log(Local.current.)
  }, [isaccept])

  return (
    <>
        {
          cModel && <VideoCall />
        }
        {
          incoming && <IncomingCall />
        }
        { isaccept && <Video /> }
    </>
  )
}

export default VideoMain
