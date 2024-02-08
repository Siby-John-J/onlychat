import axios from 'axios'
import { userContext } from '../../context/userContext'
import { userEditFetch } from '../../hooks/useFetch'
import '../../style/Settings.css'
import { useState, useContext, useEffect, useCallback } from 'react'
import { addToChat, removeFromChat } from '../../hooks/useChat'
import { User } from '../../types/setttings_types'

function Settings() {
  const [isOpen, setIsOpen] = useState(false)
  const [allUsers, setAllUsers] = useState([])
  const {
    firstname,
    lastname,
    email,
    id,
    chats,
    setFirstname,
    setLastname,
    setEmail,
    refresh,
    setRefresh
   } : any = useContext(userContext)

   async function getAllUsers() {
    const resp = await axios.get('http://localhost:2000/user/getall')

    setAllUsers(data => resp.data)
  }

  // const callall = useCallback( async () => {
  //   const resp = await axios.get('http://localhost:2000/user/getall')

  //   setAllUsers(resp.data)
  // }, [refresh])

  useEffect(() => {
    getAllUsers()
  }, [])

  function action(_id: string, callback: Function) {
    const re = check(callback())

    if(re === 'remove') {
      const res = removeFromChat(id, _id)
      res.then(data => {
      console.log(allUsers)
      })
    } else {
      const res = addToChat(id, _id)
      res.then(data => {
        // setRefresh(!refresh)
      })
    }
  }

  function check(user: User) {
    const store =  chats.some((data: any) => data.id === user.id) ? 'remove' : 'add'
    // setRefresh(!refresh)
    return store
  }
  
  return (
    <div className='mainSettings'>
        <h1 className='sts'>Settings</h1>
        <div className="p1">
          <div className="names">
            <label htmlFor="">firstname</label>
            <input type="text" value={firstname}
              onChange={e => setFirstname(e.target.value)} />
            <label htmlFor="">lastname</label>
            <input type="text" value={lastname}
              onChange={e => setLastname(e.target.value)} />
          </div>
          
          <div className="email">
            <label htmlFor="">Email</label>
            <input type="text" value={email}
            onChange={e => setEmail(e.target.value)} />
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className='cp-btn'>
            Change Password
          </button>
          {
            isOpen ? <ChangePasswordModel /> : null
          }
        </div>
        <div className="p2">
          <div className="userslist">
            <h4 className='usersTitle'>All Users</h4>
            <div className="datas">
            {
              allUsers.map((user: User, index) : any => {
                if(id === user.id) {
                  return null
                }

                return  (
                  <div className="user" key={index}>
                    <div className="image"></div>
                    <label htmlFor="">{user.firstname}</label>
                    <button onClick={() => {
                      action(user.id, () => {
                        return user
                      })
                    }}>{
                      check(user)
                    }</button>
                  </div>
                )
              })
            }
            </div>
          </div>
        </div>
    </div>
  )
}

function ChangePasswordModel() {
  const [pass, setPass] = useState('')
  const [confpass, setConfPass] = useState('')

  const {
    firstname,
    lastname,
    email,
    id
   }: any = useContext(userContext)

  return (
    <div className="change-password">
    <label htmlFor="">enter current password</label>
    <input type="password" onChange={e => setPass(e.target.value)} />
    <label htmlFor="">enter new password</label>
    <input type="password" onChange={e => setConfPass(e.target.value)} />
    <button onClick={() => {
      if(pass !== confpass) {
        alert('please enter the same password')
        return
      }

      userEditFetch({
        firstname,
        lastname,
        email,
        password: pass,
        id
      })
    }}>
      Save
    </button>
  </div>
  )
}

export default Settings