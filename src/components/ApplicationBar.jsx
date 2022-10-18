import { useState, useEffect } from 'react'
import ContextMenu, { ContextMenuButton } from './ContextMenu'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'

export default function ApplicationBar() {
  const [applicationBarData, setApplicationBarData] = useState(() => {
    const saved = localStorage.getItem('applicationBar')
    const initialValue = JSON.parse(saved)
    return initialValue || []
  })
  const [showContextMenu, setShowContextMenu] = useState(false)
  const [contextMenuEvent, setContextMenuEvent] = useState()
  const [contextOnClick, setContextOnClick] = useState()

  useEffect(() => {
    const handleClick = () => {
      setShowContextMenu(false)
    }
    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [])

  const unpinApp = (index) => {
    setApplicationBarData(prev => {
      delete prev[index]
      return prev
    })
    localStorage.setItem('applicationBar', JSON.stringify(applicationBarData))
  }

  const handleOnDragEnd = (result) => {
    if (!result.destination) return
    const items = Array.from(applicationBarData)
    const [reordererdItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reordererdItem)
    setApplicationBarData(items)
    localStorage.setItem('applicationBar', JSON.stringify(items))
  }

  useEffect(() => {
    const handleClick = () => {
      let appItems = localStorage.getItem('applicationBar')
      appItems = JSON.parse(appItems)
      setApplicationBarData(appItems)
    }
    window.addEventListener('storage', handleClick)
    return () => window.removeEventListener('storage', handleClick)
  }, [])
  
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="applicationBar" direction='horizontal'>
        {(provided) => (
          <div className="applicationBar" {...provided.droppableProps} ref={provided.innerRef}>
            { showContextMenu && 
              <ContextMenu e={contextMenuEvent}>
                <ContextMenuButton onClick={() => unpinApp(contextOnClick)}>Unpin app</ContextMenuButton>
              </ContextMenu>
            }
            {
              applicationBarData.map((app, index) => (
                <Draggable key={index} draggableId={index.toString()} index={index}>
                  {(provided) => (
                    <div 
                      className="applicationBar__app" 
                      {...provided.draggableProps} 
                      {...provided.dragHandleProps} 
                      ref={provided.innerRef}
                      onContextMenu={(e) => {
                        e.preventDefault()
                        setShowContextMenu(true)
                        setContextOnClick(index)
                        setContextMenuEvent(e)
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
