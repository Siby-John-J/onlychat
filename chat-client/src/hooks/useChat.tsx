import axios from "axios"

export async function addToChat(myId: string, id: string) {

    const resp = await axios.put('http://localhost:2000/user/addto_chat', {
        myId,
        id
    })

    console.log(resp.data)
}

export async function getChats(id: []) {
    const resp = await axios.get('http://localhost:2000/user/getby_id', {
        params: [id]
    })

    return resp.data
}

export async function sendMessageFetch(text: string, myId: string, _id: string) {
    const resp = await axios.put('http://localhost:2000/user/chat', {
        message: text,
        senderId: myId,
        recvId: _id
    })
}