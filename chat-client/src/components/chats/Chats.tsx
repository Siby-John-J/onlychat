import Icon from '../../assets/icon.png'
import VideoChat from '../../assets/video-chat-icon.svg'
import { useState } from 'react'

function Chats() {
    const [shift, Unshift] = useState(false)
    const [cModel, setcModel] = useState(false)
    
    
    const handleModel = () => {
        Unshift(!shift)
    }

    const createCall = () => {
        setcModel(!cModel)
        console.log(cModel)
    }
    
    return (
        <>
            <div className="options">
                <div className="searching">
                    <h1>Chats</h1>
                    <input type="text" />
                </div>
                <div className="selections">
                    <div className="images">
                        
                    </div>
                    <div className="texts-sel">
                        <label className='name' htmlFor="">Siby John</label>
                        <label className='last-msg' htmlFor="">Last message is this</label>
                    </div>
                </div>
            </div>
            <div className="messages">
                <div className="profile">
                    <div className="images">
                    </div>
                    <div className="texts-sel">
                        <label className='name' htmlFor="">Siby John</label>
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
                    <input type="text" placeholder='Type Somethink...' />
                    <button>Send</button>
                </div>
            </div>
        </>
    )
}

export default Chats