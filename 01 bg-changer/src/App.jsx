import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("Olive")

  return (
    <>
      <div className='w-full h-screen' style={{backgroundColor:color}}>
          <div className='fixed bottom-12 flex flex-wrap justify-center px-4 py-3 inset-x-0'>
                <div className='flex flex-wrap gap-2 justify-center items-center bg-white px-4 py-3 rounded-2xl shadow-2xl'>
                    <button
                    onClick={() => setColor('red')}
                     className='outline-none shadow-lg px-3 py-1 rounded-lg hover:scale-110 transition text-white capitalize font-medium'
                     style={{backgroundColor:"red"}}
                     >Red</button>
                    <button
                    onClick={() => setColor('green')}
                     className='outline-none shadow-lg px-3 py-1 rounded-lg hover:scale-110 transition text-white capitalize font-medium'
                     style={{backgroundColor:"green"}}
                     >green</button>
                    <button
                    onClick={() => setColor('blue')}
                     className='outline-none shadow-lg px-3 py-1 rounded-lg hover:scale-110 transition text-white capitalize font-medium'
                     style={{backgroundColor:"blue"}}
                     >blue</button>
                    <button
                    onClick={() => setColor('olive')}
                     className='outline-none shadow-lg px-3 py-1 rounded-lg hover:scale-110 transition text-white capitalize font-medium'
                     style={{backgroundColor:"olive"}}
                     >olive</button>
                    <button
                    onClick={() => setColor('gray')}
                     className='outline-none shadow-lg px-3 py-1 rounded-lg hover:scale-110 transition text-white capitalize font-medium'
                     style={{backgroundColor:"gray"}}
                     >gray</button>
                    <button
                    onClick={() => setColor('black')}
                     className='outline-none shadow-lg px-3 py-1 rounded-lg hover:scale-110 transition text-white capitalize font-medium'
                     style={{backgroundColor:"black"}}
                     >black</button>
                     <button
                    onClick={() => setColor('white')}
                     className='outline-none shadow-lg px-3 py-1 rounded-lg hover:scale-110 transition capitalize font-medium'
                     style={{backgroundColor:"white"}}
                     >white</button>
                     <button
                    onClick={() => setColor('yellow')}
                     className='outline-none shadow-lg px-3 py-1 rounded-lg hover:scale-110 transition capitalize font-medium'
                     style={{backgroundColor:"yellow"}}
                     >yellow</button>
                     <button
                    onClick={() => setColor('pink')}
                     className='outline-none shadow-lg px-3 py-1 rounded-lg hover:scale-110 transition capitalize font-medium'
                     style={{backgroundColor:"pink"}}
                     >pink</button>
                     <button
                    onClick={() => setColor('purple')}
                     className='outline-none shadow-lg px-3 py-1 rounded-lg hover:scale-110 transition capitalize font-medium'
                     style={{backgroundColor:"purple"}}
                     >purple</button>
                     <button
                    onClick={() => setColor('lavender')}
                     className='outline-none shadow-lg px-3 py-1 rounded-lg hover:scale-110 transition capitalize font-medium' 
                     style={{backgroundColor:"lavender"}}
                     >lavender</button>
                    
                    
                </div>
          </div>
      </div>
    </>
  )
}

export default App
