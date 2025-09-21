
import { Suspense, useState } from 'react'
import './App.css'
import Available from './components/Available Players/Available'
import Navber from './components/Navber/Navber'
import Selected from './components/Selected Players/selected'

const fetchPlayers = async ()=>{
  const res = await fetch('/players.json');
  return res.json();
}
 // ekhane ekta kahini hosce ami jdi async await use kore data ta fetch kori tahole seta age call kore nite hobe, nahole sei data kaj korbena
 const playersPromise = fetchPlayers();

function App() {
 

  const [toggle, setToggle ] = useState(true)

 const [availableBalance, setAvailableBalance] = useState(6000000)

  return (
    <>
    {/* jate available and selected e 2 jaygatei button gula show kore ejonno amra main app.jsx ei korbo, tate kore page change holeo btn thakbe */}
      <Navber availableBalance={availableBalance}></Navber>

      <div className='max-w-[1200px] mx-auto flex justify-between items-center'>
        <h1 className='font-bold text-2xl'>Available Players</h1>

        <div className='font-bold'>
          <button onClick={()=> setToggle(true)} className={`py-2 cursor-pointer px-5 border-1 border-r-0 ${toggle===true?'bg-[#E7FE29]':""} border-gray-300 rounded-l-2xl`}>Available</button>
          <button onClick={()=> setToggle(false)} className={`py-2 cursor-pointer px-5 border-1 border-r-0 ${toggle===false?'bg-[#E7FE29]':""} border-gray-300 rounded-r-2xl`}>Selected <span>(0)</span></button>
        </div>
      </div>

      {
        toggle === true?<Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
    <Available availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playersPromise={playersPromise}></Available>
    </Suspense>:<Selected></Selected>
      }
    </>
  )
}

export default App
