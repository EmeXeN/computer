import { useState, useEffect } from 'react'

export default function Desktop() {
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
    <div className='desktop'>
      <div className="topbar">
        <time className="topbar__time">{currentTime}</time>
      </div>
    </div>
  )
}
