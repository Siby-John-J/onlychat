import { SendOffer } from "../hooks/useSocket"

const peer = new RTCPeerConnection()

const channel = peer.createDataChannel('channel')
let offer: any = undefined

channel.onopen = (e: any) => console.log('opened')
channel.onmessage = (e: any) => console.log(e, ' new message')

peer.onicecandidate = e => getOffer()

function getOffer() {
    offer = peer.localDescription
    SendOffer(offer)
}

function sendOffer() {
    peer.createOffer().then(offer => {
        peer.setLocalDescription(offer).then(e => {
            console.log('all set')
        })
    })

    getOffer()
}

function recvOffer() {

}

export {
    sendOffer,
    recvOffer
}