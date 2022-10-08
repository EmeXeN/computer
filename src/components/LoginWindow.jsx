export default function LoginWindow() {
  return (
    <div className='loginWindow' style={{"backgroundImage": "url(./img/backgrounds/bg1.jpg)"}}>
      <div className='loginWindow__inside'>
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ae058d02-6195-427e-bf70-a4ecb0c118f4/d7mkt4j-144e827e-6616-4f71-b3e1-b8edb6182359.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FlMDU4ZDAyLTYxOTUtNDI3ZS1iZjcwLWE0ZWNiMGMxMThmNFwvZDdta3Q0ai0xNDRlODI3ZS02NjE2LTRmNzEtYjNlMS1iOGVkYjYxODIzNTkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.SxZwixXmMP0tUpSPS0jdPhR91or9aMtlA5IFO41_QIc" alt="user's avatar" />
        <p className='loginWindow__welcomeText'>Hi there, Welcome back!</p>
        <form>
          <input type="text" name="login" id="login" placeholder="Login" />
          <input type="password" name="password" id="password" placeholder="Password" />
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  )
}
