import { SendOffer, sendAnswer, controlModel } from "../hooks/useSocket"

let peer : any = undefined
let peer2 : any = undefined

let offer: any = undefined
let sender: string | undefined = undefined

let localVideoEl: any = {}
let remoteVideoEl: any = {}
let localStream : any;

function getOffer() {
    offer = peer.localDescription

    if(offer !== null && offer.type === 'offer') {
        SendOffer(offer)
    }
}

function sendAns() {
    offer = peer2.localDescription

    if(offer !== null && offer.type === 'answer') {
        sendAnswer(offer, sender)
    }
}

// Peer-1
function createPeer() { 
    const peer = new RTCPeerConnection()
    const channel = peer.createDataChannel('channel')
    
    channel.onopen = (e: any) => controlModel()
    channel.onmessage = (e: any) => console.log('new message')

    peer.onicecandidate = e => getOffer()

    peer.ontrack = addTracks

    return peer
}

// Peer-1
async function createOffer() {
    peer = createPeer()

    await getUserMedia('peer1')

    const offer = await peer.createOffer()
    await peer.setLocalDescription(offer)
}

async function createAnswer() {
    const ans = await peer2.createAnswer()

    await peer2.setLocalDescription(ans)
}

// peer-2
function createPeer2() {
    const peer = new RTCPeerConnection()

    peer.ondatachannel = e => {
        peer.channel = e.channel
        peer.channel.onmessage = e => console.log('msage....')
        peer.channel.onopen = (e) => {
        }
    }

    peer.onicecandidate = e => sendAns()
    
    peer.ontrack = addTracks

    return peer
}

async function recvOffer(offer: any, id: string) {
    peer2 = createPeer2()

    await getUserMedia('peer2')

    sender = id
    await peer2.setRemoteDescription(JSON.parse(offer.current))

    createAnswer()
}

async function setRemote(answer: any) {
    peer.setRemoteDescription(answer)
}

function addTracks(e: any) {
    remoteVideoEl.current = {}
    remoteVideoEl.current.srcObject = e.streams[0]

    controlModel()
}

async function getUserMedia(ch: string) {
    const stream = await navigator.mediaDevices.getUserMedia({audio: true, video: true})

    localVideoEl.current = {}
    localVideoEl.current.srcObject = stream
    localStream = stream

    localStream.getTracks().forEach((track: any) => {
        if(ch === 'peer1') {
            peer.addTrack(track, localStream)
        } else if(ch === 'peer2') {
            peer2.addTrack(track, localStream)
        }
    });
}

export {
    recvOffer,
    setRemote,
    getUserMedia,
    createOffer,
    localVideoEl,
    localStream,
    remoteVideoEl
}
