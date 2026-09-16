import React from 'react'

const Title = ({children}:any) => {
  return (
    <div>
     <h2 className="mb-5 border-b border-slate-400 pb-3 text-base font-extrabold text-blue-950 after:mt-2 after:block after:h-0.5 after:w-11 after:bg-blue-600">
       {children}
     </h2>
    </div>
  )
}

export default Title
