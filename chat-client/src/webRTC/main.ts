import { SendOffer, sendAnswer } from "../hooks/useSocket"

const peer = new RTCPeerConnection()

const channel = peer.createDataChannel('channel')
let offer: any = undefined
let sender: string | undefined = undefined

channel.onopen = (e: any) => console.log('opened...')
channel.onmessage = (e: any) => console.log(e, ' new message')

// peer.ontrack = e => console.log('lwal niga')

peer.onicecandidate = e => getOffer()

peer.ondatachannel = e => {
    peer.channel = e.channel
    peer.channel.onmessage = e => console.log('msage....')
}

function getOffer() {
    offer = peer.localDescription
    if(offer !== null && offer.type === 'offer') {
        SendOffer(offer)
    } else if(offer !== null && offer.type === 'answer') {
        sendAnswer(offer, sender)
    }
}

function sendOffer() {
    peer.createOffer().then(offer => {
        peer.setLocalDescription(offer).then(e => {
            console.log('all set')
        })
    })

    getOffer()
}

function createAnswer() {
    peer.createAnswer().then(ans => peer.setLocalDescription(ans)).then(e => 
        console.log('created...')
    )
}

function recvOffer(offer: any, id: string) {
    sender = id
    peer.setRemoteDescription(JSON.parse(offer.current)).then(e => console.log('offer set'))   

    createAnswer()
}

function setRemote(answer: any) {
    peer.setRemoteDescription(answer)
}

export {
    sendOffer,
    recvOffer,
    setRemote
}