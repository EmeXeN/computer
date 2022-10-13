import ApplicationBar from "./ApplicationBar"
import Desktop from "./Desktop"

export default function MainWindow() {
  return (
    <div className='mainWindow' style={{"backgroundImage": "url(./img/backgrounds/bg1.jpg)"}}>
      <Desktop />
      <ApplicationBar />
    </div>
  )
}
