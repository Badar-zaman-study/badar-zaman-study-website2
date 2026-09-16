import React from 'react'

const Map = () => {
  return (
    <>
     <div className="glass-panel overflow-hidden rounded-[28px] p-2">
        <iframe
        title="Office location"
        src="https://www.google.com/maps?q=Blue%20Area%20Islamabad&output=embed"
        className="h-[300px] w-full rounded-[22px] border-0"
        loading="lazy"
        />
     </div>
    </>
  )
}

export default Map
