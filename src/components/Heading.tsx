import React from 'react'

interface HeadingProps {
  icon?: any;
  title?: string;
  description?: string;
}
const Heading = ({icon: Icon , title , description}:HeadingProps) => {
  return (
    <>
    <div className="group flex flex-col gap-2 items-center justify-center mb-7 px-2">
       {
        Icon && 
        <Icon className="h-10 w-10 text-blue-700 transition-transform duration-200 group-hover:-translate-y-1" strokeWidth={2.25}/>
       }
       {
        title && 
        <h1 className='text-2xl font-bold tracking-tight text-blue-700 sm:text-3xl text-center'>{title}
        </h1>
       }
       {
        description && 
         <p className="text-sm text-black/80 sm:text-base text-center">{description}</p>
       }
        <span className="mx-auto mt-2 block h-0.5 w-12 bg-blue-700" />

    </div>
    </>
  )
}

export default Heading
