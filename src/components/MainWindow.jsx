import ApplicationBar from "./ApplicationBar"
import Desktop from "./Desktop"
import Topbar from "./TopBar"

export default function MainWindow() {
  return (
    <div className='mainWindow' style={{"backgroundImage": "url(./img/backgrounds/bg1.jpg)"}}>
      <Topbar />
      <Desktop />
      <ApplicationBar />
    </div>
  )
}
