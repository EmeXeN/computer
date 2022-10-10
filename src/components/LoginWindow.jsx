import { useContext } from "react"
import { UserContext } from '../context/UserContext'

export default function LoginWindow({ setLoggedIn }) {
  const { accountData } = useContext(UserContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    const formLogin = e.target[0].value 
    const formPassword = e.target[1].value
    const { login, password } = accountData
    if (login === formLogin && password === formPassword) {
      setLoggedIn(true)
    } else {
      // send notification in future
    }
  }
  return (
    <div className='loginWindow' style={{"backgroundImage": "url(./img/backgrounds/bg1.jpg)"}}>
      <div className='loginWindow__inside'>
        <img src={accountData.avatarSrc} alt="user's avatar" />
        <p className='loginWindow__welcomeText'>Hi {accountData.name}, Welcome back!</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="login" id="login" placeholder="Login" />
          <input type="password" name="password" id="password" placeholder="Password" />
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  )
}
