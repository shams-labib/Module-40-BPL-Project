import React from 'react';
import DeleteImg from '../../assets/Vector.png'
import SelectedCards from '../Selected/SelectedCards';


const Selected = ({purschedPlayers, removePlayer}) => {
    console.log(purschedPlayers)
    
    return (
                <div className='max-w-[1200px] mx-auto'>
                 {
                    purschedPlayers.map(player => <SelectedCards removePlayer={removePlayer} player={player}></SelectedCards>)
                 }
        </div>
    );
};

export default Selected;