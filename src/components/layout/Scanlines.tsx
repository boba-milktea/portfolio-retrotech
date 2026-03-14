import React from 'react'

export function Scanlines() {
  return (
    <div className= "pointer-events-none fixed inset-0 z-50" 
    style={{background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.07) 2px, rgba(0, 0, 0, 0.07) 4px"}}></div>
  )
}