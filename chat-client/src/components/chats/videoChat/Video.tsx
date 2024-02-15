import { useContext, useEffect, useRef } from "react"
import { setisAccept } from "./videoCall"
import { localStream, localVideoEl, peer, peer2, remoteVideoEl } from "../../../webRTC/main"
import { cancelStream } from "../../../hooks/useSocket"
import { callContext } from "../../../context/callContext"
import { CANCEL } from "./videoCall"

export let Local: any = undefined
export let Remote: any = undefined

interface Data {
  sender: string
  id: string
  localref: any
  remoteref: any
}

export function stopStream(data: Data, status: null | boolean = null) {
  const { id, localref, remoteref, sender } = data

  // if(peer !== undefined) {
  //   peer.close()
  // }

  // if(peer2 !== undefined) {
  //   peer2.close()
  // }

  Local.current.srcObject.getTracks().forEach((stream: any) => {
    stream.stop()
  })

  Remote.current.srcObject.getTracks().forEach((stream: any) => {
    stream.stop()
  })
  
  setisAccept((prev: boolean) => false)
  CANCEL.can = true

  status === null ? cancelStream({myid: sender, id: id}): ''
}

function Video() {
  const { id, sender }: any = useContext(callContext)
  const localref = useRef({})
  const remoteref = useRef({})

  useEffect(() => {
    async function call() {
      localref.current.srcObject = localVideoEl.current.srcObject
      remoteref.current.srcObject = remoteVideoEl.current.srcObject

      Local = localref
      Remote = remoteref
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
              // setisAccept((prev: boolean) => false)
              stopStream({
                id,
                sender,
                localref,
                remoteref
              })
            }}>Cancel</button>
        </div>
    </div>
  )
}

export default Video
