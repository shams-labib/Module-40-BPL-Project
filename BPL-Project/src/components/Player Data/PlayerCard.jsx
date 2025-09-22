import React, { useState } from 'react';
import UserImg from '../../assets/user-1.png'
import FlagImg from '../../assets/report-1.png'
import { toast } from 'react-toastify';


const PlayerCard = ({player, setAvailableBalance, availableBalance, setPurschedPlayers, purschedPlayers}) => {
    const [isSelected, setIsSelected] = useState(false)
    // console.log(purschedPlayers);
    

    
    const handleSelected = (playerData)=>{
        const playerPrice = parseInt(playerData['price'].split('USD').join("").split(",").join("").split('BDT').join(''));
        if(availableBalance< playerPrice){
            toast('Balance Low');
            return ;
        }
        if(purschedPlayers.length===6){
          toast('Already 6 Card Added')
          return;
        }

        setIsSelected(true);
        setAvailableBalance(availableBalance - playerPrice);
        setPurschedPlayers([...purschedPlayers, playerData])

        toast('Player purchased')
    };


    return (
        <div className="card bg-base-100 shadow-sm p-4">
  <figure>
    <img className='w-full h-[300px] object-cover'
      src={player['player-image']}
      alt="Shoes" />
         </figure>
       <div className="mt-4">
        <div className='flex'>
            <img src={UserImg} alt="" /><h2 className="card-title ml-2">{player['player-name']}</h2>
        </div>
          <div className='flex justify-between mt-4 border-b-1 border-gray-200 pb-3'>
            <div className='flex items-center'>
            <img className='w-[20px] h-[20px]' src={FlagImg} alt="" />
            <span className='ml-2'>{player['player-country']}</span>
          </div>
          
          <button className='btn'>{player['playing-role']}</button>
          </div>

          <div className='flex justify-between font-bold mt-3'>
            <span>Rating</span>
            <span>{player['rating']}</span>
          </div>

          <div className='flex justify-between mt-2'>
            <h3 className='font-bold'>{player['batting-style']}</h3>
            <span>{player['bowling-style']}</span>
          </div>

          <div className='flex justify-between items-center mt-3'>
            <span className='font-bold'>Price : {player['price']} </span>
            <button disabled={isSelected} onClick={()=> {handleSelected(player)}} className='btn bg-gray-50'>{isSelected===true?"Selected" : "Choose Player"}</button>
          </div>
         </div>
         </div>
    );
};

export default PlayerCard;