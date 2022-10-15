import { useState } from 'react'

import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'

export default function DesktopAppsGrid() {
  const [applications, setApplications] = useState(() => {
    const saved = localStorage.getItem('desktopApps')
    const initialValue = JSON.parse(saved)
    return initialValue || []
  })

  const pinAppToBar = ({ APP_NAME, APP_ICON_DIRECTORY }) => {
    let appBarItems = localStorage.getItem('applicationBar')
    appBarItems = JSON.parse(appBarItems)
    appBarItems.push({
      APP_NAME,
      APP_ICON_DIRECTORY
    })
    localStorage.setItem('applicationBar', appBarItems)
  }

  const handleOnDragEnd = (result) => {
    if (!result.destination) return
    const items = Array.from(applications)
    const [reordererdItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reordererdItem)
    setApplications(items)
    localStorage.setItem('desktopApps', JSON.stringify(items))
  }
  
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="desktopApps" direction='horizontal'>
        {(provided) => (
          <div className="desktopApps" {...provided.droppableProps} ref={provided.innerRef}>
            {
              applications.map((app, index) => (
                <Draggable key={index} draggableId={index.toString()} index={index}>
                  {(provided) => (
                    <div 
                      className="desktopApps__app" 
                      {...provided.draggableProps} 
                      {...provided.dragHandleProps} 
                      ref={provided.innerRef}
                      style={{ ...provided.draggableProps.style, position: 'static' }}
                    >
                      <img src={app.APP_ICON_DIRECTORY} alt="app bar icon" />
                    </div>
                  )}
                </Draggable>
              ))
            }
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
