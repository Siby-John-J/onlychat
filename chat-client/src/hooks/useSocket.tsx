
import { useContext } from 'react'
import { sendOffer } from '../webRTC/main'
import { io } from 'socket.io-client'
import { callContext } from '../context/callContext'
const socket = io('http://localhost:2000')
let _id: undefined | string = undefined

function useSocketEmit(id: string) {
  _id = id
  function run() {
    sendOffer()
  }

  run()
}

export function SendOffer(prop: any) {
  const data = {
    offer: prop,
    id: _id
  }

  prop !== null ? socket.emit('send:offer', JSON.stringify(data)) : ''
}

function useSocketOn(channel: string, setIncoming: Function) {
  socket.on(channel, (data: any) => {
    setIncoming((prev: any) => true)
  })
  
  return () => {
    socket.disconnect()
  }
  // useEffect(() => {
  // }, [])
}

export {
  useSocketEmit,
  useSocketOn
}