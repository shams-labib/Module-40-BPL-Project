
import { Suspense } from 'react'
import './App.css'
import Available from './components/Available Players/Available'
import Navber from './components/Navber/Navber'
import Selected from './components/Selected Players/selected'

const fetchPlayers = async ()=>{
  const res = await fetch('/players.json');
  return res.json();
}


function App() {
  // ekhane ekta kahini hosce ami jdi async await use kore data ta fetch kori tahole seta age call kore nite hobe, nahole sei data kaj korbena

  const playersPromise = fetchPlayers();

  return (
    <>
    {/* jate available and selected e 2 jaygatei button gula show kore ejonno amra main app.jsx ei korbo, tate kore page change holeo btn thakbe */}


    
    <Navber></Navber>
    <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
    <Available playersPromise={playersPromise}></Available>
    </Suspense>
    {/* <Selected></Selected> */}
    </>
  )
}

export default App
