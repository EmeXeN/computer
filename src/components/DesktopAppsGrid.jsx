import { useState, useEffect } from 'react'
import ContextMenu, { ContextMenuButton } from './ContextMenu'

import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'

export default function DesktopAppsGrid() {
  const [applications, setApplications] = useState(() => {
    const saved = localStorage.getItem('desktopApps')
    const initialValue = JSON.parse(saved)
    return initialValue || []
  })
  const [showContextMenu, setShowContextMenu] = useState(false)
  const [contextMenuEvent, setcontextMenuEvent] = useState()
  const [contextOnClick, setContextOnClick] = useState()

  useEffect(() => {
    const handleClick = () => {
      setShowContextMenu(false)
    }
    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [])

  const pinAppToBar = ({ APP_NAME, APP_ICON_DIRECTORY }) => {
    let appBarItems = localStorage.getItem('applicationBar')
    appBarItems = JSON.parse(appBarItems)
    appBarItems.push({
      APP_NAME,
      APP_ICON_DIRECTORY
    })
    appBarItems = JSON.stringify(appBarItems)
    localStorage.setItem('applicationBar', appBarItems)
    window.dispatchEvent(new Event("storage"))
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
            { showContextMenu && 
              <ContextMenu e={contextMenuEvent}>
                <ContextMenuButton onClick={() => pinAppToBar(contextOnClick)}>Pin app to bar</ContextMenuButton>
              </ContextMenu>
            }
            {
              applications.map((app, index) => (
                <Draggable key={index} draggableId={index.toString()} index={index}>
                  {(provided) => (
                    <div 
                      className="desktopApps__app" 
                      {...provided.draggableProps} 
                      {...provided.dragHandleProps} 
                      ref={provided.innerRef}
                      onContextMenu={(e) => {
                        e.preventDefault()
                        setShowContextMenu(true)
                        setContextOnClick(app)
                        setcontextMenuEvent(e)
                      }}
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
