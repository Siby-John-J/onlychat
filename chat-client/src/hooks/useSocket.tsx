
import { createOffer , setRemote } from '../webRTC/main'
import { io } from 'socket.io-client'
import { setisAccept } from '../components/chats/videoChat/videoCall'
import { Local, Remote, stopStream } from '../components/chats/videoChat/Video'
import { CANCEL } from '../components/chats/videoChat/videoCall'
const socket = io('http://localhost:2000')
let _id: undefined | string = undefined

let incoming: any;
let model: any;

let incoming_name : undefined | string = undefined

function useSocketEmit(id: string, name: string) {
  incoming_name = name
  _id = id
  function run() {
    createOffer()
  }
  run()
}

export function SendOffer(prop: any) {
  const data = {
    offer: prop,
    id: _id,
    name: incoming_name
  }

  prop !== null ? socket.emit('send:offer', JSON.stringify(data)) : ''
}

export function sendAnswer(data: any, sender: string | undefined) {
  const _data = {
    id: sender,
    answer: data
  }

  socket.emit('send:answer', JSON.stringify(_data))
}

export function getAnswer(channel: string) {
  socket.on(channel, (data: any) => {
    const answer = JSON.parse(data)
    answer.type === 'answer' ? setRemote(answer) : ''
  })
}

export function cancelStream(data: object) {
  socket.emit('cancel:stream', JSON.stringify(data))
}

export function getCancelStream(id: string) {
  socket.on(`getcancel:${id}`, (data: any) => {
    // const { myid, id }: any = JSON.parse(data)

    CANCEL.can = true
    setisAccept((prev: boolean) => false)
    incoming((prev: boolean) => false)


    Local.current.srcObject.getTracks().forEach((stream: any) => {
      stream.stop()
    })
  
    Remote.current.srcObject.getTracks().forEach((stream: any) => {
      stream.stop()
    })

    // stopStream({
    //   id,
    //   sender: myid,
    //   localref: Local,
    //   remoteref: Remote
    // }, false)
  })
}

function useSocketOn(channel: string, setIncoming: Function, offer: any, peer1_name: any) {
  incoming = setIncoming
  socket.on(channel, (data: any) => {
    const {_offer, name } = JSON.parse(data)

    peer1_name.current = name
    
    offer.current = JSON.stringify(_offer)

    setIncoming((prev: any) => true)
  })
}

function socketEmit(channel: string, id: any) {
  socket.emit(channel, id)
}

function socketOn(channel: string, setcModel: Function) {
  model = setcModel
  socket.on(channel, (data: any) => {
    setcModel((prev: any) => false)
  })
}

function controlModel() {
  model((prev: any) => false)
  incoming((prev: any) => false)

  setisAccept !== undefined ? setisAccept((prev: any) => true) : ''
}

export {
  useSocketEmit,
  useSocketOn,
  socketEmit,
  socketOn,
  controlModel
}