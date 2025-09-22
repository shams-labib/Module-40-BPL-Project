import React from 'react';
import DeleteImg from '../../assets/Vector.png'

const SelectedCards = ({player, removePlayer}) => {
  console.log(player);

  const handleRemove = ()=>{
    removePlayer(player)
  }
  
    return (
            <div className=' p-4 border-1 border-gray-300 rounded-xl mt-5 flex justify-between items-center'>
                       <div className='flex'>
              <img src={player['player-image']} className='h-[50px] w-[50px] rounded-xl' alt="" />
               <div className='ml-2'>
                <h1>{player['player-name']}</h1>
                <p className='text-xs'>{player['playing-role']}</p>
            </div>
            </div>
            <div className='cursor-pointer' onClick={handleRemove}>
              <img src={DeleteImg} alt="" />
            </div>
                  </div>
    );
};

export default SelectedCards;