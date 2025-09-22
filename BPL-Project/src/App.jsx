
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

 const [availableBalance, setAvailableBalance] = useState(60000000);
 const [purschedPlayers, setPurschedPlayers] = useState([]);
//  console.log(purschedPlayers);

const removePlayer = (p)=>{
  const filteredData = purschedPlayers.filter(ply => ply['player-name']!==p['player-name'])
  console.log(p);
  setPurschedPlayers(filteredData)

  setAvailableBalance(availableBalance + parseInt(p['price'].split('USD').join("").split(",").join("").split('BDT').join('')))
  
}
 

  return (
    <>
    {/* jate available and selected e 2 jaygatei button gula show kore ejonno amra main app.jsx ei korbo, tate kore page change holeo btn thakbe */}
      <Navber availableBalance={availableBalance}></Navber>

      <div className='max-w-[1200px] mx-auto flex justify-between items-center'>
        <h1 className='font-bold text-2xl'>{
        toggle===true?"Available Players":`Selected Players (${purschedPlayers.length}/6)`
        
        }</h1>

        <div className='font-bold'>
          <button onClick={()=> setToggle(true)} className={`py-2 cursor-pointer px-5 border-1 border-r-0 ${toggle===true?'bg-[#E7FE29]':""} border-gray-300 rounded-l-2xl`}>Available</button>
          <button onClick={()=> setToggle(false)} className={`py-2 cursor-pointer px-5 border-1 border-r-0 ${toggle===false?'bg-[#E7FE29]':""} border-gray-300 rounded-r-2xl`}>Selected <span>({purschedPlayers.length})</span></button>
        </div>
      </div>

      {
        toggle === true?<Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
    <Available setPurschedPlayers={setPurschedPlayers} purschedPlayers={purschedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playersPromise={playersPromise}></Available>
    </Suspense>:<Selected removePlayer={removePlayer} purschedPlayers={purschedPlayers}></Selected>
      }
{/* 
     <ToastContainer></ToastContainer> */}
    </>
  )
}

export default App
