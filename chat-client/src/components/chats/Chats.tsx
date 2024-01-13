import { useSearchParams } from 'react-router-dom'
import { Socket, io } from 'socket.io-client'
import Icon from '../../assets/icon.png'
import VideoChat from '../../assets/video-chat-icon.svg'
import { useContext, useEffect, useState } from 'react'
import { useFetchUser } from '../../hooks/useFetch'
import { userContext } from '../../context/userContext'
import { getChats, sendMessageFetch } from '../../hooks/useChat'

const socket = io('http://localhost:2000')

function Chats() {
    const [shift, Unshift] = useState(false)
    const [cModel, setcModel] = useState(false)
    const [select, setSelect] = useState(false)
    const [currentChat, setCurrentChat] = useState({})
    const [text, setText] = useState('')

    const [params, setParams] = useSearchParams()
    const { 
        firstname,
        lastname,
        setFirstname,
        setLastname,
        setEmail,
        setId,
        id,
        setChat,
        chats
    }: any = useContext(userContext)

    // const [name, setName] = useState('')

    const [allChats, setAllChats] = useState([])
    
    useEffect(() => {
        async function getUser() {
            const id = params.get('id')
            const result = await useFetchUser(id)
            setChat(result.chats)
            setFirstname(result.firstname)
            setLastname(result.lastname)
            setEmail(result.email)
            setId(result.id)

            const _id = result.chats.map(e => e.id)
            setChatFunc(_id)
        }

        async function setChatFunc(chats: any) {
            const res = await getChats(chats)
            setAllChats(res)
        }

        getUser()
    }, [])

    const handleModel = () => {
        Unshift(!shift)
    }

    const createCall = () => {
        setcModel(!cModel)
        console.log(cModel)
    }

    const selectChat = (_id: any) => {
        setSelect(true)
        const filtered = allChats.filter(e => e.id === _id)
        setCurrentChat(filtered)
    }

    const sendMessage = async (_text: string, _id: string) => {
        // console.log(_id, id)
        socket.emit('msg', {
            message: text,
            senderId: id,
            recvId: _id
        })
        // await sendMessageFetch(text, id, _id)
    }
    
    return (
        <>
            <div className="options">
                <div className="searching">
                    <h1>Chats</h1>
                    <input type="text" />
                </div>
                {
                    allChats.map(data => {
                        return (
                            <div className="selections" onClick={e => 
                                selectChat(data.id)
                            }>
                                <div className="images">
                                    
                                </div>
                                <div className="texts-sel">
                                    <label className='name' htmlFor="">{data.firstname}</label>
                                    <label className='last-msg' htmlFor="">Last message is this</label>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="messages">
                {
                    select === true ?
                      (function returns() {
                        // console.log(currentChat[0].chats, Date())
                        const {firstname, lastname, chats, id} = currentChat[0]

                        return (
                            <>
                                <div className="profile">
                                    <div className="images">
                                    </div>
                                    <div className="texts-sel">
                                        <label className='name' htmlFor="">{firstname + ' ' + lastname}</label>
                                    </div>
                                    <img onClick={handleModel} className='dots' src={Icon} alt="" />
                                    <img onClick={createCall} className='vid' src={VideoChat} alt="" />
                                    <div style={{display: shift ? 'block' : 'none'}} className="profile-model">
                                </div>
                                </div>

                                <div className="data">
                                    <div className="left-single-msg">
                                        <label className='content' htmlFor="">difjidjijfidjfijdfjijdifji</label>
                                        <label className='time' htmlFor="">12:00pm</label>
                                    </div>
                                    <div className="right-single-msg">
                                        <label className='content' htmlFor="">difjidjijfidjfijdfjdifjidjijfidjfijdfjijdifjiijdifji</label>
                                        <label className='time' htmlFor="">12:00pm</label>
                                    </div>
                                </div>

                                <div className="chat-input">
                                    <input type="text" placeholder='Type Somethink...' onChange={e => setText(e.target.value)} />
                                    <button onClick={() => sendMessage(text, id)}>Send</button>
                                </div>
                            </>
                        )
                    })()
                : ''}
            </div>
        </>
    )
}

export default Chats
