import { useSearchParams } from 'react-router-dom'
import { Socket, io } from 'socket.io-client'
import Icon from '../../assets/icon.png'
import VideoChat from '../../assets/video-chat-icon.svg'
import { useContext, useEffect, useState } from 'react'
import { useFetchUser } from '../../hooks/useFetch'
import { userContext } from '../../context/userContext'
import { getChats, useclearChat } from '../../hooks/useChat'
import { User } from '../../types/setttings_types'
import Search from './Search'
import { searchContext } from '../../context/searchContext'

const socket = io('http://localhost:2000')

function Chats() {
    const _input = document.getElementsByClassName('real_input')[0]

    const [shift, Unshift] = useState(false)
    const [cModel, setcModel] = useState(false)
    const [select, setSelect] = useState(false)
    const [currentChat, setCurrentChat] : any = useState({})
    const [text, setText] = useState('')

    const [search, setSearch] = useState('')

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
        chats,
        refresh,
        setRefresh
    }: any = useContext(userContext)

    const [allChats, setAllChats] = useState([])

    socket.on('refresh', (data: boolean) => {
        setRefresh(!refresh)
    })
    
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
    }, [refresh])

    const handleModel = () => {
        Unshift(!shift)
    }

    const createCall = () => {
        setcModel(!cModel)
    }

    const selectChat = (_id: any) => {
        setSelect(true)
        const filtered = allChats.filter(e => e.id === _id)
        setCurrentChat(filtered)
    }

    const clearChat = (_id: any) => {
        useclearChat(id, _id)
    }

    const sendMessage = (_text: string, _id: string) => {
        socket.emit('msg', {
            message: text,
            senderId: id,
            recvId: _id
        })
    }
    
    return (
        <>
            <div className="options">
                <div className="searching">
                    <h1>Chats</h1>
                    <searchContext.Provider value={{search, setSearch}}>
                        <Search />
                    </searchContext.Provider>
                </div>
                {
                    allChats.map((data: User, ind: number) => {
                        if(data.firstname.startsWith(search)) {
                            return (
                                <div className="selections" key={ind} onClick={e => 
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
                        }
                    })
                }
            </div>

            <div className="messages">
                {
                    select === true ?
                      (function returns() {
                        const {firstname, lastname, id} = currentChat[0]
                        const curr = chats.filter((e: any) => e.id === id)[0]

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
                                        <button className='c-chat' onClick={() => {
                                            clearChat(id)
                                        }}>clear chat</button>
                                    </div>
                                </div>

                                <div className="data">
                                    {
                                        curr.data.map((msg: any, index :number) => {
                                            {
                                                if(msg?.p1) {
                                                    const store = msg['p1']
                                                    return (
                                                        <div className="right-single-msg" key={index}>
                                                            <label className='content' htmlFor="">{store}</label>
                                                            <label className='time' htmlFor="">12:00pm</label>
                                                        </div>
                                                    )
                                                } else {
                                                    const store = msg['p2']
                                                    return (
                                                        <div className="left-single-msg">
                                                            <div className='left-child'>
                                                                <label className='content' htmlFor="">{store}</label>
                                                                <label className='time' htmlFor="">12:00pm</label>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            }
                                        })
                                    }
                                </div>

                                <div className="chat-input">
                                    <input className='real_input' type="text" placeholder='Type Somethink...' onKeyDown={e => {
                                        if(e.key === 'Enter' && text !== '') {
                                            sendMessage(text, id)
                                            e.currentTarget.value = ''
                                        }
                                    }} onChange={e => setText(e.target.value)} />
                                    <button onClick={() => {
                                        if(text !== '') {
                                            sendMessage(text, id)
                                            _input.value = ''
                                        }
                                    }}>Send</button>
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
