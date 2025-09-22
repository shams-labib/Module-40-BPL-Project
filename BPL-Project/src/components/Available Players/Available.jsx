import React, { use } from 'react';

import PlayerCard from '../Player Data/PlayerCard';

const Available = ({playersPromise, setAvailableBalance, availableBalance, setPurschedPlayers, purschedPlayers}) => {
    const playerData = use(playersPromise);
    // console.log(purschedPlayers);

    
    
    return (

        <div className='max-w-[1200px] mx-auto grid grid-cols-1 p-10 md:p-0 md:grid-cols-3 gap-5'>

      {
        playerData.map(player => <PlayerCard setPurschedPlayers={setPurschedPlayers} purschedPlayers={purschedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} player={player}></PlayerCard> )
      }



          
        </div>
    );
};

export default Available;