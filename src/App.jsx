import './App.scss';
import { useState, useEffect } from 'react'
import LoginWindow from './components/LoginWindow' 
import UserProvider from './context/UserContext';
import RegisterWindow from './components/RegisterWindow' 
import MainWindow from './components/MainWindow';

function App() {
  const [accountData, setAccountData] = useState(() => {
    const saved = localStorage.getItem('account')
    const initialValue = JSON.parse(saved)
    return initialValue || ''
  })

  useEffect(() => {
    document.addEventListener('contextmenu', (e) => e.preventDefault())
  }, [])
  const [loggedIn, setLoggedIn] = useState(false)
  return ( 
    <div className='App' >
      {
        (accountData && !loggedIn) && <UserProvider><LoginWindow setLoggedIn={setLoggedIn} /></UserProvider> 
      }
      {
        (!accountData && !loggedIn) && <UserProvider><RegisterWindow setAccountData={setAccountData} /></UserProvider>
      }
      {
        loggedIn && <MainWindow />
      }
    </div>
  );
}

export default App;