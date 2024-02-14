
import { createOffer , setRemote } from '../webRTC/main'
import { io } from 'socket.io-client'
import { setisAccept } from '../components/chats/videoChat/videoCall'
const socket = io('http://localhost:2000')
let _id: undefined | string = undefined

let incoming: any;
let model: any;

function useSocketEmit(id: string) {
  _id = id
  function run() {
    createOffer()
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

function useSocketOn(channel: string, setIncoming: Function, offer: any) {
  incoming = setIncoming
  socket.on(channel, (data: any) => {
    offer.current = data
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
    // console.log(data)
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