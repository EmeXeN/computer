import Calendar from 'react-calendar'

export default function DateSelect() {
  // const changeSystemDate = (date) => {
  //   const settings = JSON.parse(localStorage.getItem('settings'))
  //   settings.customTime = date
  //   localStorage.setItem('settings', JSON.stringify(settings))
  //   window.dispatchEvent(new Event("storage"))
  // }
  return (
    <div className='dateSelect'>
      <Calendar 
        locale='en'
        // onChange={changeSystemDate}
      />
    </div>
  )
}
