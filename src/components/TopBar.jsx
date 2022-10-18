import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faLanguage } from '@fortawesome/free-solid-svg-icons'
import VolumeControl from './VolumeControl'

export default function TopBar() {
  const ONE_SECOND_IN_MILISECONDS = 1000
  const [currentTime, setCurrentTime] = useState()
  const [volumeControlVisible, setVolumeControlVisible] = useState(false)

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

  const handleVolume = () => {
    setVolumeControlVisible(prev => !prev)
  }
  return (
    <div className="topbar">
      <FontAwesomeIcon icon={faLanguage} />
      <img src="./img/icons/volumefull.png" alt='volume icon' onClick={handleVolume}/>
      <FontAwesomeIcon icon={faChevronDown} />
      <time className="topbar__time">{currentTime}</time>
      {
        volumeControlVisible && createPortal(<VolumeControl />, document.getElementById('root'))
      }
  </div>
  )
}
