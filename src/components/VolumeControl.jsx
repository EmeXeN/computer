import { useState } from 'react'

export default function VolumeControl({ right }) {
  const [volume, setVolume] = useState(() => {
    const saved = localStorage.getItem('settings')
    const initialValue = JSON.parse(saved).volume
    return initialValue || []
  })

  const getIconBasedOnVolume = () => {
    if (!volume) return "./img/icons/volumemuted.png"
    if (volume <= 30) return "./img/icons/volumelow.png"
    return "./img/icons/volumefull.png"
  }

  const [volumeIcon, setVolumeIcon] = useState(getIconBasedOnVolume)

  const changeVolume = (volume) => {
    setVolume(volume)
    setVolumeIcon(getIconBasedOnVolume)
    let settings = JSON.parse(localStorage.getItem('settings'))
    settings.volume = volume
    setTimeout(() => {
      localStorage.setItem('settings', JSON.stringify(settings))
    }, 1000)
  }

  const onChangeHandle = (e) => {
    changeVolume(Number(e.target.value))
  }
  return (
    <div className='volumeControl'>
      <img src={volumeIcon} alt="volume icon" />
      <input type="range" min="0" max="100" defaultValue={volume} onChange={onChangeHandle}/>
      <h2>{volume}</h2>
    </div>
  )
}
