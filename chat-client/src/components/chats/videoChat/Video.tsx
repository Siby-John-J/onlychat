import { useEffect, useRef } from "react"
import { setisAccept } from "./videoCall"
import { localVideoEl, remoteVideoEl } from "../../../webRTC/main"
// const localVideoEl: any = {}
function Video() {
  const localref = useRef({})
  const remoteref = useRef({})

  useEffect(() => {
    async function call() {
      localref.current.srcObject = localVideoEl.current.srcObject
      remoteref.current.srcObject = remoteVideoEl.current.srcObject
    }
    call()
  }, [])

  return (
    <div className="vid-win">
        <div className="play">
            <video className="peer1"  autoPlay ref={localref}></video>
            <video className="peer2" autoPlay ref={remoteref}></video>
        </div>
        <div className="controls">
            <button id="can-btn" onClick={() => {
              setisAccept((prev: boolean) => false)
            }}>Cancel</button>
        </div>
    </div>
  )
}

export default Video
