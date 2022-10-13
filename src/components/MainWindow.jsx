import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeLow, faChevronDown, faLanguage } from '@fortawesome/free-solid-svg-icons'
import ApplicationBar from "./ApplicationBar"
import Desktop from "./Desktop"

export default function MainWindow() {
  const ONE_SECOND_IN_MILISECONDS = 1000
  const [currentTime, setCurrentTime] = useState()

  useEffect(() => {
    setInterval(() => {
      const date = new Date()
      const currentTime = date.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      }) 
      setCurrentTime(currentTime)
    }, ONE_SECOND_IN_MILISECONDS)
  }, [])

  return (
    <div className='mainWindow' style={{"backgroundImage": "url(./img/backgrounds/bg1.jpg)"}}>
      <div className="topbar">
        <FontAwesomeIcon icon={faLanguage} />
        <FontAwesomeIcon icon={faVolumeLow} />
        <FontAwesomeIcon icon={faChevronDown} />
        <time className="topbar__time">{currentTime}</time>
      </div>
      <Desktop />
      <ApplicationBar />
    </div>
  )
}
