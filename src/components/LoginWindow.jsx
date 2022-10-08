import { useContext, useEffect } from "react"
import { UserContext } from '../context/UserContext'

export default function LoginWindow() {
  const { accountData } = useContext(UserContext)
  return (
    <div className='loginWindow' style={{"backgroundImage": "url(./img/backgrounds/bg1.jpg)"}}>
      <div className='loginWindow__inside'>
        <img src={accountData.avatarSrc} alt="user's avatar" />
        <p className='loginWindow__welcomeText'>Hi {accountData.name}, Welcome back!</p>
        <form>
          <input type="text" name="login" id="login" placeholder="Login" />
          <input type="password" name="password" id="password" placeholder="Password" />
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  )
}
