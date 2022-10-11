import { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'

export default function ApplicationBar() {
  const [applicationBarData, setApplicationBarData] = useState(() => {
    const saved = localStorage.getItem('applicationBar')
    const initialValue = JSON.parse(saved)
    return initialValue || ''
  })

  const handleOnDragEnd = (result) => {
    if (!result.destination) return
    const items = Array.from(applicationBarData)
    const [reordererdItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reordererdItem)
    setApplicationBarData(items)
    localStorage.setItem('applicationBar', JSON.stringify(items))
  }
  
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="applicationBar" direction='horizontal'>
        {(provided) => (
          <div className="applicationBar" {...provided.droppableProps} ref={provided.innerRef}>
            {
              applicationBarData.sort((a, b) => a.ORDER - b.ORDER).map((app, index) => (
                <Draggable key={app.ORDER} draggableId={app.ORDER.toString()} index={index}>
                  {(provided) => (
                    <div 
                      className="applicationBar__app" 
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
