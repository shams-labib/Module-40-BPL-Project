import React, { use } from 'react';
import UserImg from '../../assets/user-1.png'
import FlagImg from '../../assets/report-1.png'

const Available = ({playersPromise}) => {
    const playerData = use(playersPromise);
    console.log(playerData);

    
    
    return (

        <div className='max-w-[1200px] mx-auto grid grid-cols-1 p-10 md:p-0 md:grid-cols-3 gap-5'>

      {
        playerData.map(player =>  <div className="card bg-base-100 shadow-sm p-4">
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
            <button className='btn bg-gray-50'>Choose Player</button>
          </div>
         </div>
         </div>)
      }



          
        </div>
    );
};

export default Available;