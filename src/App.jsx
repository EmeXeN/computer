import './App.scss';
import { useState } from 'react'
import LoginWindow from './components/LoginWindow' 
import UserProvider from './context/UserContext';
import RegisterWindow from './components/RegisterWindow' 

function App() {
  const [accountData, setAccountData] = useState(() => {
    const saved = localStorage.getItem('account')
    const initialValue = JSON.parse(saved)
    return initialValue || ''
  })
  return ( 
    <div className='App' >
      {
        accountData ? <UserProvider><LoginWindow /></UserProvider> 
        : 
        <UserProvider><RegisterWindow setAccountData={setAccountData} /></UserProvider>
      }
    </div>
  );
}

export default App;