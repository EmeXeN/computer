import { createContext, useState } from "react"

export const UserContext = createContext()

const UserProvider = ({children}) => {
  const [accountData, setAccountData] = useState(() => {
    const saved = localStorage.getItem('account')
    const initialValue = JSON.parse(saved)
    return initialValue || null
  })
  const value = {
    accountData,
    setAccountData
  }
  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  )
}

export default UserProvider