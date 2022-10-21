import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faLanguage } from '@fortawesome/free-solid-svg-icons'
import VolumeControl from './VolumeControl'
import DateSelect from './DateSelect'

export default function TopBar() {
  const ONE_SECOND_IN_MILISECONDS = 1000
  const timeInterval = useRef(undefined)
  const [customTime, setCustomTime] = useState(() => {
    const result = JSON.parse(localStorage.getItem('settings'))
    return result.customTime
  })
  const [currentTime, setCurrentTime] = useState()
  const [volumeControl, setVolumeControl] = useState(false)
  const [dateSelect, setDateSelect] = useState(false)
  const [allSystemComponents] = useState([setVolumeControl, setDateSelect])

  useEffect(() => {
    const date = customTime || new Date()
    timeInterval.current = setInterval(() => {
      date.setSeconds(date.getSeconds() + 1)
      setCurrentTime(date.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      }))
    }, ONE_SECOND_IN_MILISECONDS)
    const handleStorage = () => {
      let settings = localStorage.getItem('settings')
      settings = JSON.parse(settings)
      setCustomTime(settings.customTime)
    }
    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [customTime])

  const handleVisibility = (setFnc, val) => {
    allSystemComponents.forEach(set => set(false))
    setFnc(!val)
  }
  return (
    <div className="topbar">
      <FontAwesomeIcon icon={faLanguage} />
      <img src="./img/icons/volumefull.png" alt='volume icon' onClick={() => {handleVisibility(setVolumeControl, volumeControl)}}/>
      <FontAwesomeIcon icon={faChevronDown} />
      <time className="topbar__time" onClick={() => handleVisibility(setDateSelect, dateSelect)}>{currentTime}</time>
      {
        volumeControl && createPortal(<VolumeControl />, document.getElementById('root'))
      }
      {
        dateSelect && createPortal(<DateSelect />, document.getElementById('root'))
      }
  </div>
  )
}
