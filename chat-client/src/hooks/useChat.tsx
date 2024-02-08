import axios from "axios"

export async function addToChat(myId: string, id: string) {
    const resp = await axios.put('http://localhost:2000/chat/addto_chat', {
        myId,
        id
    })

    return resp.data
}

export async function removeFromChat(myId: string, id: string) {
    const resp = await axios.delete(`http://localhost:2000/chat/remove_user?myId=${myId}&id=${id}`)

    return resp.data
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

export async function useclearChat(myId: string, id: string) {
    const resp = await axios.delete(`http://localhost:2000/chat/clear_chat?myId=${myId}&id=${id}`)

    return resp.data
}