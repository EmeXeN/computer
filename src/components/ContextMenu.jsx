import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export default function ContextMenu({ children, e }) {
  const contextMenuRef = useRef()
  const [yPos, setYPos] = useState(e.pageY)

  useEffect(() => {
    const cmCurrent = contextMenuRef.current
    if (e.pageY + cmCurrent.offsetHeight > window.innerHeight) {
      setYPos(window.innerHeight - cmCurrent.offsetHeight)
    }
  }, [e])

  return createPortal(
    <div className='contextMenu'
      ref={contextMenuRef}
      style={{
        "left": e.pageX,
        "top": yPos,
      }}
    >
      {children}
    </div>,
    document.getElementById('root')
  )
}

export function ContextMenuButton({ children, onClick }) {
  return (
    <div className='contextMenu__button'>
      <button onClick={onClick}>{children}</button>
    </div>
  )
}
