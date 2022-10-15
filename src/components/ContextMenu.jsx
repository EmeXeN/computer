import { useRef, useEffect } from 'react'

export default function ContextMenu({ children, x, y }) {
  return (
    <div className='contextMenu'
      style={{
        "left": x,
        "top": y,
      }}
    >
      {children}
    </div>
  )
}

export function ContextMenuButton({ children, onClick }) {
  return (
    <div className='contextMenu__button'>
      <button onClick={onClick}>{children}</button>
    </div>
  )
}
