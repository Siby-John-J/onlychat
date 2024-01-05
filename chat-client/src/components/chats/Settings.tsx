import '../../style/Settings.css'
import { useState } from 'react'

function Settings() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className='mainSettings'>
        <h1 className='sts'>Settings</h1>
        <div className="p1">
          <div className="names">
            <label htmlFor="">firstname</label>
            <input type="text" />
            <label htmlFor="">lastname</label>
            <input type="text" />
          </div>

          <div className="email">
            <label htmlFor="">Email</label>
            <input type="text" />
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className='cp-btn'>Change Password</button>
          {
            isOpen ? <ChangePasswordModel /> : null
          }
        </div>
        <div className="p2">
          <div className="userslist">
            <h4 className='usersTitle'>All Users</h4>
            <div className="datas">
              <div className="user">
                <div className="image"></div>
                <label htmlFor="">username</label>
                <button>add</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

function ChangePasswordModel() {
  return (
    <div className="change-password">
    <label htmlFor="">enter current password</label>
    <input type="text" />
    <label htmlFor="">enter new password</label>
    <input type="text" />
    <button>Save</button>
  </div>
  )
}

export default Settings