import '../style/Chat.css'
import ChatsIcn from '../assets/chats.svg'
import SettingsIcn from '../assets/settings.svg'
import LogOutIcn from '../assets/log-out.svg'
import Chats from './chats/Chats'
import Settings from './chats/Settings'
import { useContext, useEffect, useState } from 'react'
import { userContext } from '../context/userContext'

function Chat() {
    const [navigate, changeNaviate] = useState('')
    // const [changer, setChanger] = useState(false)
    // const { refresh } : any = useContext(userContext)  

    // function change (){
    //     setChanger(!changer)
    // }
    
    // useEffect(() => {
    //     console.log('lwal')
    //     console.log(navigate)
    // }, [changer, refresh])
    

    return (
        <div className="mainChat">
            <div className="type">
                <img onClick={() => 
                    changeNaviate('')
                } src={ChatsIcn} alt="" />
                <img onClick={() =>
                    changeNaviate('settings')
                }
                src={SettingsIcn} alt="" />
                <img src={LogOutIcn} alt="" />
            </div>
            {
                navigate === '' ? <Chats /> : <Settings />
            }
        </div>
    )
}

export default Chat
