import { useSearchParams } from "react-router-dom";
import { Socket, io } from "socket.io-client";
import Icon from "../../assets/icon.png";
import VideoChat from "../../assets/video-chat-icon.svg";
import { useContext, useEffect, useRef, useState } from "react";
import { useFetchUser } from "../../hooks/useFetch";
import { userContext } from "../../context/userContext";
import { getChats, useclearChat } from "../../hooks/useChat";
import { User } from "../../types/setttings_types";
import Search from "./Search";
import { searchContext } from "../../context/searchContext";
import { callContext } from "../../context/callContext";
import { chatContext } from "../../context/chatContext";
import Video from "./videoChat/Video";
import TextChat from "./textChat/textChat";
import Input from "./textChat/Input";
import { getAnswer, useSocketOn } from "../../hooks/useSocket";
import { getUserMedia } from "../../webRTC/main";
let sender: any = undefined

const socket = io("http://localhost:2000");

function Chats() {
    const _input = document.getElementsByClassName("real_input")[0];

    const offer = useRef()

    const [shift, Unshift] = useState(false);
    const [cModel, setcModel] = useState(false);
    const [incoming, setIncoming] = useState(false);
    const [select, setSelect] = useState(false);
    const [isopen, SetisOpen] = useState(false)
    const [currentChat, setCurrentChat]: any = useState({});
    const [text, setText] = useState("");

    const [search, setSearch] = useState("");

    const [params, setParams] = useSearchParams();
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
        setRefresh,
    }: any = useContext(userContext);

    const [allChats, setAllChats] = useState([]);

    const localVideoEl = useRef()
    const localStream = useRef()

    socket.on("refresh", (data: boolean) => {
        setRefresh(!refresh);
    });

    useEffect(() => {
        async function getUser() {
            const id = params.get("id");
            const result = await useFetchUser(id);
            setChat(result.chats);
            setFirstname(result.firstname);
            setLastname(result.lastname);
            setEmail(result.email);
            setId(result.id);
            sender = id

            const _id = result.chats.map((e) => e.id);
            setChatFunc(_id);

            useSocketOn(id, setIncoming, offer)
        }

        async function setChatFunc(chats: any) {
            const res = await getChats(chats);
            setAllChats(res);
        }

        getUser();
    }, [refresh, cModel, incoming]);

    const handleModel = () => {
        Unshift(!shift);
    };

    const createCall = () => {
        // getUserMedia(localVideoEl, localStream)
        setcModel(true);
    };

    const selectChat = (_id: any) => {
        setSelect(true);
        const filtered = allChats.filter((e) => e.id === _id);
        setCurrentChat(filtered);
    };

    const clearChat = (_id: any) => {
        useclearChat(id, _id);
    };

    const sendMessage = (_text: string, _id: string) => {
        socket.emit("msg", {
            message: text,
            senderId: id,
            recvId: _id,
        });
    };

    getAnswer(`send-ans:${sender}`)

    return (
        <>
            <div className="options">
                <div className="searching">
                    <h1>Chats</h1>
                    <searchContext.Provider value={{ search, setSearch }}>
                        <Search />
                    </searchContext.Provider>
                </div>
                {allChats.map((data: User, ind: number) => {
                    if (data.firstname.startsWith(search)) {
                        return (
                            <div
                                className="selections"
                                key={ind}
                                onClick={(e) => selectChat(data.id)}
                            >
                                <div className="images"></div>
                                <div className="texts-sel">
                                    <label className="name" htmlFor="">
                                        {data.firstname}
                                    </label>
                                    <label className="last-msg" htmlFor="">
                                        Last message is this
                                    </label>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>

            <div className="messages">
                {select === true
                    ? (function returns() {
                          const { firstname, lastname, id } = currentChat[0];
                          const curr = chats.filter((e: any) => e.id === id)[0];

                          return (
                              <>
                                  <div className="profile">
                                      <div className="images"></div>
                                      <div className="texts-sel">
                                          <label className="name" htmlFor="">
                                              {firstname + " " + lastname}
                                          </label>
                                      </div>
                                      <img
                                          onClick={handleModel}
                                          className="dots"
                                          src={Icon}
                                          alt=""
                                      />
                                      <img
                                          onClick={createCall}
                                          className="vid"
                                          src={VideoChat}
                                          alt=""
                                      />
                                      <div
                                          style={{
                                              display: shift ? "block" : "none",
                                          }}
                                          className="profile-model"
                                      >
                                          <button
                                              className="c-chat"
                                              onClick={() => {
                                                  clearChat(id);
                                              }}
                                          >
                                              clear chat
                                          </button>
                                      </div>
                                  </div>

                                  <callContext.Provider value={{ cModel, setcModel, incoming, 
                                                                    setIncoming, id, sender, offer,
                                                                    localVideoEl, localStream }}>
                                    {
                                        <Video />
                                    }
                                  </callContext.Provider>
                                
                                    <TextChat prop={curr} />

                                    <Input prop={{
                                        sendMessage, setText,
                                        id, text
                                    }} />
                              </>
                          );
                      })()
                    : ""}
            </div>
        </>
    );
}

export default Chats;
