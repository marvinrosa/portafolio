import React from 'react'
import logo from '../src/logo.png'

const Dev = () => {
  return (
    <div className="bg-sky-700 w-screen h-screen">
        <h1 className="flex flex-row flex-wrap justify-center content-start text-6xl text-white p-64">
            <span className="shrink-0 flex flex-col h-1/2"><img className="pr-2" src={logo} width={70} height={40}/></span>
            <span className="">marvinrosa</span>
            <span className="text-sky-300">.dev</span>
        </h1>
    </div>
  )
}

export default Dev