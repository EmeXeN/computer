import { useContext } from 'react'
import { BASIC_SETS } from '../config.js'
import { UserContext } from '../context/UserContext'

export default function RegisterWindow({ setAccountData }) {
  const { saveAccountData } = useContext(UserContext)
  const setBasicLocalStorageData = () => {
    if (!localStorage.getItem('applicationBar')) {
      localStorage.setItem('applicationBar', JSON.stringify(BASIC_SETS.APPLICATION_BAR_ITEMS))
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target[0].value
    const login = e.target[1].value
    const password = e.target[2].value
    saveAccountData({
      name,
      login,
      password,
      avatarSrc: './img/baseAvatar.png',
    })
    setAccountData(true)
    setBasicLocalStorageData()
  }

  return (
    <div className='loginWindow' style={{"backgroundImage": "url(./img/backgrounds/bg1.jpg)"}}>
    <div className='loginWindow__inside'>
      <img src="./img/baseAvatar.png" alt="user's avatar" />
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="name" placeholder="Name" required/>
        <input type="text" name="login" id="login" placeholder="Login" required/>
        <input type="password" name="password" id="password" placeholder="Password" required/>
        <input type="submit" value="Register" />
      </form>
    </div>
  </div>
  )
}
