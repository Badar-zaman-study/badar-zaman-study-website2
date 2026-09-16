import React from 'react'

const Card = ({className , children}:any) => {
  return (
    <div className={`overflow-hidden rounded-xl border border-slate-100 bg-white shadow-md ${className}`}>
      {children}
    </div>
  )
}

export default Card
