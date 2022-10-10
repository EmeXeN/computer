import { useState } from 'react'

export default function ApplicationBar() {
  const [applicationBarData] = useState(() => {
    const saved = localStorage.getItem('applicationBar')
    const initialValue = JSON.parse(saved)
    return initialValue || ''
  })
  
  return (
    <div className="applicationBar">
      {
        applicationBarData.sort((a, b) => a.ORDER - b.ORDER).map((app) => (
          <div className="applicationBar__app" key={app.ORDER}>
            <img src={app.APP_ICON_DIRECTORY} alt="app bar icon" />
          </div>
        ))
      }
    </div>
  )
}
