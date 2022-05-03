import React from 'react'

interface msgProps {
  message: string
}

export const Header = ({ message }: msgProps) => {
  return (
    <header className="mx-auto mt-2">
      <h1 className="mx-auto mt-8 text-center font-redhat text-2xl font-bold font-bold text-rose-500 md:text-4xl ">
        {message ? message : "WE'RE LAUNCHING SOON"}
      </h1>
    </header>
  )
}
